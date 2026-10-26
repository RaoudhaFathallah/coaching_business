"use client";

import Image from "next/image";
import Link from "next/link";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import { useLanguage } from "@/providers/LanguageProvider";

// Non-translatable data; order matches `courses.programs.items` in the locale files.
const programMeta = [
  { image: "/images/life-coach/course-img1.jpg", icon: "ri-seedling-line" },
  { image: "/images/life-coach/course-img2.jpg", icon: "ri-briefcase-4-line" },
  { image: "/images/life-coach/course-img3.jpg", icon: "ri-scales-3-line" },
  { image: "/images/life-coach/course-img4.jpg", icon: "ri-compass-3-line" },
];

const processNumbers = ["01", "02", "03"];

export default function CoursesPage() {
  const { t, messages } = useLanguage();
  const programs = programMeta.map((meta, index) => ({
    ...meta,
    ...messages.courses.programs.items[index],
  }));
  const processSteps = messages.courses.process.steps.map((step, index) => ({
    ...step,
    number: processNumbers[index],
  }));

  return (
    <main>
      <PageBannerTitle
        title={t("courses.title")}
        homeText={t("common.home")}
        homeUrl="/"
        image="/images/page-banner1.jpg"
        image2="/images/page-banner2.jpg"
        image3="/images/page-banner3.jpg"
      />

      <section className="bg-white px-5 py-16 sm:px-8 md:py-20">
        <div className="container mx-auto grid max-w-[1200px] items-center gap-10 md:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b88712]">
              {t("courses.hero.eyebrow")}
            </p>
            <h1 className="mb-5 text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {t("courses.hero.title")}
            </h1>
            <p className="mb-7 max-w-2xl text-[#626775]">
              {t("courses.hero.description")}
            </p>
            <Link
              href="/booking/"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#E6B325] px-6 py-3.5 font-semibold text-[#23274A] transition hover:bg-[#f0c84f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E6B325]"
            >
              {t("common.bookFreeCall")}
              <i aria-hidden="true" className="ri-arrow-right-up-line" />
            </Link>
          </div>
          <div className="relative mx-auto w-full max-w-[500px]">
            <Image
              src="/images/life-coach/course-img1.jpg"
              alt={t("courses.hero.imageAlt")}
              width={800}
              height={600}
              priority
              sizes="(max-width: 768px) 90vw, 500px"
              className="aspect-[5/4] w-full rounded-2xl object-cover"
            />
            <div className="absolute -bottom-4 left-4 rounded-xl bg-[#112240] px-5 py-4 text-white shadow-lg sm:left-8">
              <p className="font-semibold">
                {t("common.yourGoalsYourPace")}
              </p>
              <p className="mt-1 text-sm text-white/70">
                {t("courses.hero.cardSubtitle")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="scroll-mt-24 bg-[#F7F8FA] px-5 py-16 sm:px-8 md:py-24">
        <div className="container mx-auto max-w-[1200px]">
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b88712]">
              {t("courses.programs.eyebrow")}
            </p>
            <h2 className="mb-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {t("courses.programs.title")}
            </h2>
            <p className="text-[#626775]">
              {t("courses.programs.description")}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {programs.map((program) => (
              <article
                key={program.image}
                className="group overflow-hidden rounded-2xl border border-[#e7e9ee] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Link
                  href="/courses/course-details/"
                  className="relative block aspect-[16/9] overflow-hidden"
                  aria-label={`${t("courses.programs.learnMoreAbout")} ${program.title}`}
                >
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 560px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-[#112240] shadow">
                    <i aria-hidden="true" className={program.icon} />
                  </span>
                </Link>
                <div className="p-6 sm:p-8">
                  <h3 className="mb-3 text-2xl">{program.title}</h3>
                  <p className="mb-5 text-[#626775]">{program.description}</p>
                  <p className="mb-3 text-sm font-semibold text-[#23274A]">
                    {t("courses.programs.focusLabel")}
                  </p>
                  <ul className="mb-6 space-y-2">
                    {program.focus.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[#626775]"
                      >
                        <i
                          aria-hidden="true"
                          className="ri-check-line mt-0.5 text-lg text-[#b88712]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/courses/course-details/"
                    className="inline-flex items-center gap-2 font-semibold text-[#112240] underline decoration-[#E6B325] decoration-2 underline-offset-4 transition hover:text-[#717FF8]"
                  >
                    {t("courses.programs.explore")}
                    <i aria-hidden="true" className="ri-arrow-right-line" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
        <div className="container mx-auto max-w-[1100px]">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b88712]">
              {t("courses.process.eyebrow")}
            </p>
            <h2 className="mb-4 text-3xl leading-tight sm:text-4xl">
              {t("courses.process.title")}
            </h2>
            <p className="text-[#626775]">
              {t("courses.process.description")}
            </p>
          </div>
          <ol className="grid gap-5 sm:grid-cols-3">
            {processSteps.map((step) => (
              <li
                key={step.number}
                className="rounded-xl border border-[#e7e9ee] p-6 sm:p-8"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#112240] font-semibold text-[#E6B325]">
                  {step.number}
                </span>
                <h3 className="mb-3 text-xl">{step.title}</h3>
                <p className="text-sm text-[#626775]">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#F7F8FA] px-5 py-16 text-center text-[#23274A] sm:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b88712]">
            {t("courses.cta.eyebrow")}
          </p>
          <h2 className="mb-5 text-3xl leading-tight text-[#23274A] sm:text-4xl">
            {t("courses.cta.title")}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-[#626775]">
            {t("courses.cta.description")}
          </p>
          <Link
            href="/booking/"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#E6B325] px-6 py-3.5 font-semibold text-[#23274A] transition hover:bg-[#f0c84f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E6B325]"
          >
            {t("common.bookFreeCall")}
            <i aria-hidden="true" className="ri-arrow-right-up-line" />
          </Link>
        </div>
      </section>
    </main>
  );
}
