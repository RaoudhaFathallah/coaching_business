"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import { useLanguage } from "@/providers/LanguageProvider";
import {
  ApiError,
  AppointmentType,
  BookingAvailabilitySlot,
  createBooking,
  getBookingAvailability,
} from "@/lib/api";

// Non-translatable data; labels live under `booking.appointmentTypes.<id>` in the locale files.
const appointmentTypes = [
  { id: "discovery", icon: "ri-chat-smile-3-line", duration: "30 min" },
  { id: "coaching", icon: "ri-user-heart-line", duration: "60 min" },
  { id: "online", icon: "ri-global-line", duration: "60 min" },
] as const;

type AppointmentId = (typeof appointmentTypes)[number]["id"];

const apiAppointmentTypes: Record<AppointmentId, AppointmentType> = {
  discovery: "FreeAssessmentCall",
  coaching: "GroupCoaching",
  online: "PrivateOneOnOneCoaching",
};

const intlLocales = { en: "en-US", fr: "fr-FR" } as const;

function dateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function BookingPage() {
  const { language, t, messages } = useLanguage();
  const intlLocale = intlLocales[language];
  const today = useMemo(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }, []);
  const [month, setMonth] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [appointmentId, setAppointmentId] = useState<AppointmentId>("discovery");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [notice, setNotice] = useState("");
  const [availableTimeSlots, setAvailableTimeSlots] = useState<
    BookingAvailabilitySlot[]
  >([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [availabilityError, setAvailabilityError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentAppointment =
    appointmentTypes.find((appointment) => appointment.id === appointmentId) ??
    appointmentTypes[0];
  const currentAppointmentCopy =
    messages.booking.appointmentTypes[currentAppointment.id];
  const selectedDay = selectedDate
    ? new Date(`${selectedDate}T12:00:00`).getDay()
    : null;
  const isSelectedWeekend = selectedDay === 0 || selectedDay === 6;
  const firstWeekday = (month.getDay() + 6) % 7;
  const daysInMonth = new Date(
    month.getFullYear(),
    month.getMonth() + 1,
    0
  ).getDate();
  const monthLabel = new Intl.DateTimeFormat(
    intlLocale,
    { month: "long", year: "numeric" }
  ).format(month);
  const formattedDate = selectedDate
    ? new Intl.DateTimeFormat(intlLocale, {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(`${selectedDate}T12:00:00`))
    : "";

  useEffect(() => {
    if (!selectedDate) {
      setAvailableTimeSlots([]);
      setAvailabilityError(false);
      setIsLoadingSlots(false);
      return;
    }

    const controller = new AbortController();
    setAvailableTimeSlots([]);
    setAvailabilityError(false);
    setIsLoadingSlots(true);
    setSelectedTime("");

    getBookingAvailability(
      apiAppointmentTypes[appointmentId],
      selectedDate,
      controller.signal
    )
      .then((slots) => {
        setAvailableTimeSlots(slots);
      })
      .catch((error: unknown) => {
        if (!controller.signal.aborted) {
          console.error("Unable to load booking availability.", error);
          setAvailabilityError(true);
          setSelectedTime("");
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoadingSlots(false);
        }
      });

    return () => controller.abort();
  }, [appointmentId, selectedDate]);

  function changeMonth(offset: number) {
    setMonth((current) => new Date(current.getFullYear(), current.getMonth() + offset, 1));
    setSelectedDate("");
    setSelectedTime("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const notes = String(formData.get("notes") ?? "").trim();

    if (!selectedDate || !selectedTime) {
      setNotice(t("booking.notices.chooseDateAndTime"));
      return;
    }

    const selectedSlot = availableTimeSlots.find(
      (slot) => slot.startTime === selectedTime && slot.isAvailable
    );
    if (!selectedSlot) {
      setNotice(t("booking.notices.availabilityLoadError"));
      return;
    }

    setIsSubmitting(true);
    try {
      const booking = await createBooking({
        firstName,
        lastName,
        email,
        phone: null,
        preferredLanguage: language,
        currentLevel: null,
        goals: notes || null,
        message: notes || null,
        appointmentType: apiAppointmentTypes[appointmentId],
        appointmentDate: selectedDate,
        startTime: selectedSlot.startTime,
        endTime: selectedSlot.endTime,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        honeypot: "",
      });
      setNotice(
        booking.notificationsSent
          ? t("booking.notices.bookingSuccess")
          : t("booking.notices.bookingSavedEmailFailed")
      );
      form.reset();
    } catch (error) {
      console.error("Unable to submit booking request.", error);
      setNotice(
        error instanceof ApiError && error.status === 409
          ? t("booking.notices.bookingConflict")
          : t("booking.notices.bookingError")
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main>
      <PageBannerTitle
        title={t("booking.title")}
        homeText={t("common.home")}
        homeUrl="/"
        image="/images/page-banner1.jpg"
        image2="/images/page-banner2.jpg"
        image3="/images/page-banner3.jpg"
      />

      <section className="bg-white px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b88712]">
              {t("booking.intro.eyebrow")}
            </p>
            <h1 className="mb-3 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {t("booking.intro.title")}
            </h1>
            <p className="mx-auto max-w-2xl text-[#626775]">
              {t("booking.intro.description")}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_320px]"
          >
            <div className="space-y-7">
              <section className="rounded-2xl border border-[#e7e9ee] bg-white p-5 shadow-sm sm:p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#112240] font-semibold text-white">
                    1
                  </span>
                  <div>
                    <h2 className="text-xl">
                      {t("booking.step1.title")}
                    </h2>
                    <p className="text-sm text-[#626775]">
                      {t("booking.step1.description")}
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  {appointmentTypes.map((appointment) => {
                    const selected = appointmentId === appointment.id;
                    const copy = messages.booking.appointmentTypes[appointment.id];
                    return (
                      <button
                        key={appointment.id}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => {
                          setAppointmentId(appointment.id);
                          if (
                            appointment.id !== "discovery" &&
                            isSelectedWeekend
                          ) {
                            setSelectedDate("");
                          }
                          setSelectedTime("");
                          setNotice("");
                        }}
                        className={`rounded-xl border p-4 text-left transition ${
                          selected
                            ? "border-[#E6B325] bg-[#F8F1E1] ring-1 ring-[#E6B325]"
                            : "border-[#e7e9ee] hover:border-[#b88712]"
                        }`}
                      >
                        <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F8F1E1] text-xl text-[#112240]">
                          <i aria-hidden="true" className={appointment.icon} />
                        </span>
                        <span className="block font-semibold text-[#23274A]">
                          {copy.title}
                        </span>
                        <span className="mt-1 block min-h-10 text-sm text-[#626775]">
                          {copy.description}
                        </span>
                        <span className="mt-3 block text-xs font-semibold text-[#b88712]">
                          {appointment.duration}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>

              <div className="grid gap-7 md:grid-cols-2">
                <section className="rounded-2xl border border-[#e7e9ee] bg-white p-5 shadow-sm sm:p-7">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#112240] font-semibold text-white">
                      2
                    </span>
                    <div>
                      <h2 className="text-xl">
                        {t("booking.step2.title")}
                      </h2>
                      <p className="text-sm text-[#626775]">
                        {appointmentId === "discovery"
                          ? t("booking.step2.discoveryAvailability")
                          : t("booking.step2.weekendsUnavailable")}
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => changeMonth(-1)}
                      disabled={
                        month.getFullYear() === today.getFullYear() &&
                        month.getMonth() === today.getMonth()
                      }
                      aria-label={t("booking.step2.previousMonth")}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e7e9ee] text-[#112240] hover:bg-[#F7F8FA] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <i aria-hidden="true" className="ri-arrow-left-s-line" />
                    </button>
                    <h3 className="font-semibold capitalize text-[#23274A]">
                      {monthLabel}
                    </h3>
                    <button
                      type="button"
                      onClick={() => changeMonth(1)}
                      aria-label={t("booking.step2.nextMonth")}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e7e9ee] text-[#112240] hover:bg-[#F7F8FA]"
                    >
                      <i aria-hidden="true" className="ri-arrow-right-s-line" />
                    </button>
                  </div>
                  <div className="grid grid-cols-7 gap-y-2 text-center">
                    {messages.booking.weekdays.map((day) => (
                      <span
                        key={day}
                        className="py-2 text-xs font-semibold text-[#626775]"
                      >
                        {day}
                      </span>
                    ))}
                    {Array.from({ length: firstWeekday }, (_, index) => (
                      <span key={`empty-${index}`} aria-hidden="true" />
                    ))}
                    {Array.from({ length: daysInMonth }, (_, index) => {
                      const day = index + 1;
                      const date = new Date(
                        month.getFullYear(),
                        month.getMonth(),
                        day
                      );
                      const disabled =
                        date < today ||
                        (appointmentId !== "discovery" &&
                          (date.getDay() === 0 || date.getDay() === 6));
                      const key = dateKey(date);
                      const selected = selectedDate === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          disabled={disabled}
                          aria-pressed={selected}
                          aria-label={new Intl.DateTimeFormat(
                            intlLocale,
                            { dateStyle: "full" }
                          ).format(date)}
                          onClick={() => {
                            setSelectedDate(key);
                            setSelectedTime("");
                            setNotice("");
                          }}
                          className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full text-sm transition ${
                            selected
                              ? "bg-[#E6B325] font-semibold text-[#23274A]"
                              : disabled
                                ? "cursor-not-allowed text-[#c4c7ce]"
                                : "text-[#23274A] hover:bg-[#F8F1E1]"
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </section>

                <section className="rounded-2xl border border-[#e7e9ee] bg-white p-5 shadow-sm sm:p-7">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#112240] font-semibold text-white">
                      3
                    </span>
                    <div>
                      <h2 className="text-xl">
                        {t("booking.step3.title")}
                      </h2>
                      <p className="text-sm text-[#626775]">
                        {t("booking.step3.description")}
                      </p>
                    </div>
                  </div>
                  {!selectedDate ? (
                    <p className="rounded-lg bg-[#F7F8FA] p-4 text-sm text-[#626775]">
                      {t("booking.step3.chooseDateFirst")}
                    </p>
                  ) : (
                    <>
                      <p className="mb-4 text-sm font-medium capitalize text-[#23274A]">
                        {formattedDate}
                      </p>
                      {isLoadingSlots ? (
                        <p role="status" className="text-sm text-[#626775]">
                          {t("booking.notices.availabilityLoading")}
                        </p>
                      ) : availabilityError ? (
                        <p role="alert" className="text-sm text-rose-700">
                          {t("booking.notices.availabilityLoadError")}
                        </p>
                      ) : availableTimeSlots.length === 0 ? (
                        <p className="text-sm text-[#626775]">
                          {t("booking.notices.noAvailability")}
                        </p>
                      ) : (
                      <div className="grid grid-cols-2 gap-3">
                        {availableTimeSlots.map((slot) => (
                          <button
                            key={slot.startTime}
                            type="button"
                            disabled={!slot.isAvailable}
                            aria-pressed={selectedTime === slot.startTime}
                            onClick={() => {
                              setSelectedTime(slot.startTime);
                              setNotice("");
                            }}
                            className={`rounded-lg border px-3 py-2.5 text-sm font-semibold transition ${
                              selectedTime === slot.startTime
                                ? "border-[#E6B325] bg-[#E6B325] text-[#23274A]"
                                : slot.isAvailable
                                  ? "border-[#e7e9ee] text-[#23274A] hover:border-[#b88712]"
                                  : "cursor-not-allowed border-[#e7e9ee] text-[#c4c7ce]"
                            }`}
                          >
                            {slot.startTime}
                          </button>
                        ))}
                      </div>
                      )}
                      <p className="mt-4 text-xs leading-relaxed text-[#626775]">
                        {t("booking.step3.subjectToConfirmation")}
                      </p>
                    </>
                  )}
                </section>
              </div>

              <section className="rounded-2xl border border-[#e7e9ee] bg-white p-5 shadow-sm sm:p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#112240] font-semibold text-white">
                    4
                  </span>
                  <div>
                    <h2 className="text-xl">
                      {t("booking.step4.title")}
                    </h2>
                    <p className="text-sm text-[#626775]">
                      {t("booking.step4.description")}
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-[#23274A]">
                    {t("booking.step4.firstName")}
                    <input
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      required
                      className="mt-2 block w-full rounded-lg border border-[#d9dce3] px-4 py-3 text-base font-normal text-[#23274A] outline-none transition focus:border-[#112240] focus:ring-2 focus:ring-[#112240]/15"
                    />
                  </label>
                  <label className="block text-sm font-medium text-[#23274A]">
                    {t("booking.step4.lastName")}
                    <input
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      required
                      className="mt-2 block w-full rounded-lg border border-[#d9dce3] px-4 py-3 text-base font-normal text-[#23274A] outline-none transition focus:border-[#112240] focus:ring-2 focus:ring-[#112240]/15"
                    />
                  </label>
                  <label className="block text-sm font-medium text-[#23274A]">
                    {t("booking.labels.email")}
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="mt-2 block w-full rounded-lg border border-[#d9dce3] px-4 py-3 text-base font-normal text-[#23274A] outline-none transition focus:border-[#112240] focus:ring-2 focus:ring-[#112240]/15"
                    />
                  </label>
                  <label className="block text-sm font-medium text-[#23274A] sm:col-span-2">
                    {t("booking.step4.notes")}
                    <textarea
                      name="notes"
                      rows={3}
                      className="mt-2 block w-full resize-y rounded-lg border border-[#d9dce3] px-4 py-3 text-base font-normal text-[#23274A] outline-none transition focus:border-[#112240] focus:ring-2 focus:ring-[#112240]/15"
                    />
                  </label>
                </div>
              </section>

              {notice && (
                <p
                  role="status"
                  className="rounded-lg border border-[#e7e9ee] bg-[#F7F8FA] px-4 py-3 text-sm text-[#23274A]"
                >
                  {notice}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#112240] px-6 py-4 font-semibold text-white transition hover:bg-[#1a3258] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#112240] disabled:cursor-wait disabled:opacity-70"
              >
                {isSubmitting ? t("booking.notices.availabilityLoading") : t("booking.submit")}
                <i aria-hidden="true" className="ri-arrow-right-up-line" />
              </button>
              <p className="text-center text-xs leading-relaxed text-[#626775]">
                {t("booking.disclaimer")}
              </p>
            </div>

            <aside className="rounded-[18px] bg-[#122b4b] p-5 text-white shadow-sm lg:sticky lg:top-28">
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E6B325]/15 text-xl text-[#E6B325]">
                <i aria-hidden="true" className="ri-calendar-check-line" />
              </span>
              <h2 className="mb-4 text-[2rem] font-bold leading-none text-white">
                {t("booking.summary.title")}
              </h2>

              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-white/75">{t("booking.summary.appointment")}</dt>
                  <dd className="mt-1 font-semibold text-white">
                    {currentAppointmentCopy.title}
                  </dd>
                </div>
                <div>
                  <dt className="text-white/75">{t("booking.summary.date")}</dt>
                  <dd className="mt-1 font-semibold capitalize text-white">
                    {formattedDate || t("booking.summary.notSelected")}
                  </dd>
                </div>
                <div>
                  <dt className="text-white/75">{t("booking.summary.time")}</dt>
                  <dd className="mt-1 font-semibold text-white">
                    {selectedTime || t("booking.summary.notSelected")}
                  </dd>
                </div>
                <div>
                  <dt className="text-white/75">{t("booking.labels.duration")}</dt>
                  <dd className="mt-1 font-semibold text-white">{currentAppointment.duration}</dd>
                </div>
                <div className="border-t border-white/15 pt-3">
                  <dt className="text-white/75">{t("booking.summary.price")}</dt>
                  <dd className="mt-1 text-[2rem] font-bold leading-none text-[#E6B325]">
                    {appointmentId === "discovery"
                      ? t("booking.summary.free")
                      : t("booking.summary.toBeDiscussed")}
                  </dd>
                </div>
              </dl>

              <p className="mt-5 border-t border-white/15 pt-4 text-sm leading-relaxed text-white/80">
                {t("booking.summary.confirmationNote")}
              </p>

              <Link
                href="/contact-us/"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#E6B325] underline decoration-[#E6B325]/80 underline-offset-4 hover:text-[#f0c84f]"
              >
                {t("booking.summary.contactLink")}
                <i aria-hidden="true" className="ri-arrow-right-line" />
              </Link>
            </aside>
          </form>
        </div>
      </section>
    </main>
    
  );
}
