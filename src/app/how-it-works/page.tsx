"use client";

import Link from "next/link";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import { useLanguage } from "@/providers/LanguageProvider";

const stepMeta = [
  { number: "01", icon: "ri-calendar-check-line" },
  { number: "02", icon: "ri-question-answer-line" },
  { number: "03", icon: "ri-route-line" },
  { number: "04", icon: "ri-footprint-line" },
];

export default function HowItWorksPage() {
  const { t, messages } = useLanguage();
  const steps = stepMeta.map((meta, index) => ({
    ...meta,
    ...messages.howItWorks.steps[index],
  }));

  return (
    <main>
      <PageBannerTitle
        title={t("common.howItWorks")}
        homeText={t("common.home")}
        homeUrl="/"
        image="/images/page-banner1.jpg"
        image2="/images/page-banner2.jpg"
        image3="/images/page-banner3.jpg"
      />

      <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-[850px] text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b88712]">
            {t("howItWorks.intro.eyebrow")}
          </p>
          <h1 className="mb-5 text-4xl leading-tight sm:text-5xl">
            {t("howItWorks.intro.title")}
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#626775]">
            {t("howItWorks.intro.description")}
          </p>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 bg-[#F7F8FA] px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <ol className="grid gap-5 sm:grid-cols-2">
            {steps.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-[#e7e9ee] bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#112240] text-xl text-[#E6B325]">
                    <i aria-hidden="true" className={step.icon} />
                  </span>
                  <span className="font-semibold tracking-widest text-[#b88712]">
                    {step.number}
                  </span>
                </div>
                <h2 className="mb-3 text-2xl">{step.title}</h2>
                <p className="leading-relaxed text-[#626775]">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-[900px] rounded-2xl bg-[#F8F1E1] p-7 text-center sm:p-10">
          <h2 className="mb-4 text-3xl">
            {t("howItWorks.cta.title")}
          </h2>
          <p className="mx-auto mb-7 max-w-2xl text-[#626775]">
            {t("howItWorks.cta.description")}
          </p>
          <Link
            href="/booking/"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#112240] px-6 py-3.5 font-semibold text-white transition hover:bg-[#263c60] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#112240]"
          >
            {t("common.bookFreeCall")}
            <i aria-hidden="true" className="ri-arrow-right-up-line" />
          </Link>
        </div>
      </section>
    </main>
  );
}
