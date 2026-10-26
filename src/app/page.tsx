"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/providers/LanguageProvider";

// Non-translatable data; order matches the matching lists in the locale files.
const benefitIcons = [
  "ri-user-heart-line",
  "ri-calendar-check-line",
  "ri-focus-3-line",
  "ri-global-line",
];

const programIcons = [
  "ri-seedling-line",
  "ri-briefcase-4-line",
  "ri-scales-3-line",
  "ri-compass-3-line",
];

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b88712]">
        {eyebrow}
      </p>
      <h2
        className={`mb-4 text-3xl leading-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-[#23274A]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={light ? "text-white/75" : "text-[#626775]"}>
          {description}
        </p>
      )}
    </div>
  );
}

function PrimaryButton({
  children,
  href = "/booking/",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-md bg-[#E6B325] px-6 py-3.5 font-semibold text-[#23274A] transition hover:bg-[#f0c84f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E6B325]"
    >
      {children}
      <i aria-hidden="true" className="ri-arrow-right-up-line" />
    </Link>
  );
}

export default function HomePage() {
  const { t, messages } = useLanguage();
  const benefits = messages.home.benefits.map((benefit, index) => ({
    ...benefit,
    icon: benefitIcons[index],
  }));
  const programs = messages.home.programs.items.map((program, index) => ({
    ...program,
    icon: programIcons[index],
  }));
  const steps = messages.home.process.steps;
  const plans = messages.home.pricing.plans;
  const questions = messages.home.faq.questions;

  return (
    <main>
      <section id="home" className="relative isolate overflow-hidden bg-[#112240]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_20%,rgba(113,127,248,0.22),transparent_42%)]" />
        <div className="container mx-auto grid min-h-[610px] max-w-[1320px] items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-20 lg:gap-16 lg:py-24">
          <div className="max-w-2xl text-center md:text-left">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-[#F8F1E1]">
              <span className="h-2 w-2 rounded-full bg-[#E6B325]" />
              {t("home.hero.badge")}
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {t("home.hero.title")}
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-base text-white/75 sm:text-lg md:mx-0">
              {t("home.hero.description")}
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <PrimaryButton>{t("common.bookFreeCall")}</PrimaryButton>
              <Link
                href="#programs"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3.5 font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                {t("home.hero.exploreCoaching")} <i aria-hidden="true" className="ri-arrow-down-line" />
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-3 text-sm text-white/70 md:justify-start">
              <span
                className="flex text-[#E6B325]"
                aria-label={t("home.hero.starsLabel")}
              >
                {"★★★★★"}
              </span>
              <span>{t("home.hero.support")}</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[470px]">
            <div className="absolute -inset-4 rounded-[48%_48%_18px_18px] border border-white/20" />
            <div className="relative mx-auto aspect-[4/5] max-h-[540px] overflow-hidden rounded-[48%_48%_18px_18px] bg-[#dce9e5]">
              <Image
                src="/images/life-coach/hero-img.png"
                alt={t("home.hero.imageAlt")}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 470px"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-xl bg-white px-5 py-4 shadow-xl sm:-left-8">
              <p className="font-semibold text-[#23274A]">{t("common.yourGoalsYourPace")}</p>
              <p className="mt-1 text-sm text-[#626775]">{t("home.hero.cardSubtitle")}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label={t("home.benefitsLabel")}
        className="bg-[#F8F1E1]"
      >
        <div className="container mx-auto grid max-w-[1320px] grid-cols-1 gap-5 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:py-12">
          {benefits.map((benefit) => (
            <div key={benefit.icon} className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-2xl text-[#112240]">
                <i aria-hidden="true" className={benefit.icon} />
              </span>
              <div>
                <h2 className="mb-1 text-lg">{benefit.title}</h2>
                <p className="text-sm text-[#626775]">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-24 bg-white py-16 md:py-24 lg:py-28">
        <div className="container mx-auto grid max-w-[1200px] items-center gap-12 px-5 sm:px-8 md:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto w-full max-w-[540px]">
            <Image
              src="/images/life-coach/about-me.jpg"
              alt={t("home.about.imageAlt")}
              width={1026}
              height={684}
              className="aspect-[4/3] w-full rounded-2xl object-cover"
              sizes="(max-width: 768px) 90vw, 540px"
            />
            <div className="absolute -bottom-5 right-4 rounded-xl bg-[#112240] px-5 py-4 text-white shadow-lg sm:right-8">
              <p className="font-semibold">{t("home.about.cardTitle")}</p>
              <p className="mt-1 text-sm text-white/70">{t("home.about.cardSubtitle")}</p>
            </div>
          </div>
          <div className="pt-4 md:pt-0">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b88712]">
              {t("common.aLittleAboutMe")}
            </p>
            <h2 className="mb-5 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {t("home.about.title")}
            </h2>
            <p className="mb-4 text-[#626775]">
              {t("home.about.paragraph1")}
            </p>
            <p className="mb-7 text-[#626775]">
              {t("home.about.paragraph2")}
            </p>
            <Link
              href="/about-me/"
              className="inline-flex items-center gap-2 font-semibold text-[#112240] underline decoration-[#E6B325] decoration-2 underline-offset-4 hover:text-[#717FF8]"
            >
              {t("common.learnMore")} <i aria-hidden="true" className="ri-arrow-right-line" />
            </Link>
          </div>
        </div>
      </section>

      <section id="programs" className="scroll-mt-24 bg-[#F7F8FA] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-[1200px] px-5 sm:px-8">
          <SectionHeading
            eyebrow={t("home.programs.eyebrow")}
            title={t("home.programs.title")}
            description={t("home.programs.description")}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <article
                key={program.icon}
                className="flex h-full flex-col rounded-xl border border-[#e7e9ee] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#F8F1E1] text-2xl text-[#112240]">
                  <i aria-hidden="true" className={program.icon} />
                </span>
                <h3 className="mb-3 text-xl">{program.title}</h3>
                <p className="mb-5 flex-1 text-sm text-[#626775]">
                  {program.description}
                </p>
                <Link
                  href="/courses/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#112240] hover:text-[#717FF8]"
                >
                  {t("common.learnMore")} <i aria-hidden="true" className="ri-arrow-right-line" />
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#112240] px-6 py-8 text-center text-white sm:px-10 md:flex-row md:text-left">
            <div>
              <h3 className="mb-2 text-2xl text-white">
                {t("home.programs.ctaTitle")}
              </h3>
              <p className="text-white/75">
                {t("home.programs.ctaDescription")}
              </p>
            </div>
            <PrimaryButton>{t("common.bookFreeCall")}</PrimaryButton>
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 bg-white py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-[1200px] px-5 sm:px-8">
          <SectionHeading
            eyebrow={t("home.process.eyebrow")}
            title={t("home.process.title")}
            description={t("home.process.description")}
          />
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={index} className="relative rounded-xl border border-[#e7e9ee] p-6">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#112240] text-lg font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 text-xl">{step.title}</h3>
                <p className="text-sm text-[#626775]">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 bg-[#F7F8FA] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-[1000px] px-5 sm:px-8">
          <SectionHeading
            eyebrow={t("home.pricing.eyebrow")}
            title={t("home.pricing.title")}
            description={t("home.pricing.description")}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {plans.map((plan, index) => (
              <article
                key={plan.name}
                className={`relative rounded-2xl border bg-white p-7 shadow-sm sm:p-9 ${
                  index === 1 ? "border-[#E6B325] ring-1 ring-[#E6B325]" : "border-[#e7e9ee]"
                }`}
              >
                {index === 1 && (
                  <span className="absolute right-5 top-5 rounded-full bg-[#F8F1E1] px-3 py-1 text-xs font-semibold text-[#725408]">
                    {t("common.moreSupport")}
                  </span>
                )}
                <h3 className="mb-2 text-2xl">{plan.name}</h3>
                <p className="mb-5 text-[#626775]">{plan.description}</p>
                <p className="mb-6 text-sm text-[#626775]">
                  <span className="block text-2xl font-bold text-[#23274A]">
                    {t("common.customPricing")}
                  </span>
                  {t("home.pricing.discussedDuringCall")}
                </p>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[#626775]">
                      <i aria-hidden="true" className="ri-check-line mt-0.5 text-lg text-[#b88712]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <PrimaryButton>{t("home.pricing.discussPlan")}</PrimaryButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="scroll-mt-24 bg-white py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-[1200px] px-5 sm:px-8">
          <SectionHeading
            eyebrow={t("home.testimonials.eyebrow")}
            title={t("home.testimonials.title")}
            description={t("home.testimonials.description")}
          />
          <div className="rounded-2xl border border-[#e7e9ee] bg-[#F7F8FA] px-6 py-10 text-center sm:px-10">
            <p className="mx-auto mb-6 max-w-2xl text-[#626775]">
              {t("home.testimonials.placeholder")}
            </p>
            <Link
              href="/feedbacks/"
              className="inline-flex items-center gap-2 font-semibold text-[#112240] underline decoration-[#E6B325] decoration-2 underline-offset-4 hover:text-[#717FF8]"
            >
              {t("home.testimonials.visitStories")} <i aria-hidden="true" className="ri-arrow-right-line" />
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 bg-[#F7F8FA] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-[850px] px-5 sm:px-8">
          <SectionHeading
            eyebrow={t("home.faq.eyebrow")}
            title={t("home.faq.title")}
          />
          <div className="divide-y divide-[#e1e3e8] border-y border-[#e1e3e8]">
            {questions.map((item, index) => (
              <details key={index} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#23274A] marker:hidden [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <i
                    aria-hidden="true"
                    className="ri-add-line shrink-0 text-xl text-[#b88712] transition-transform group-open:rotate-45"
                  />
                </summary>
                <p className="max-w-3xl pt-4 text-[#626775]">{item.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-7 text-center text-sm text-[#626775]">
            {t("home.faq.stillQuestion")}{" "}
            <Link href="/faq/" className="font-semibold text-[#112240] underline underline-offset-4">
              {t("home.faq.visitFaq")}
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-[#112240] px-5 py-16 text-center text-white sm:px-8 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#E6B325]">
            {t("home.cta.eyebrow")}
          </p>
          <h2 className="mb-5 text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            {t("home.cta.title")}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/75">
            {t("home.cta.description")}
          </p>
          <PrimaryButton>{t("common.bookFreeCall")}</PrimaryButton>
        </div>
      </section>
    </main>
  );
}
