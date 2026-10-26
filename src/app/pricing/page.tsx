"use client";

import Link from "next/link";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import { useLanguage } from "@/providers/LanguageProvider";

export default function PricingPage() {
  const { t, messages } = useLanguage();
  const plans = messages.pricing.plans;

  return (
    <main>
      <PageBannerTitle
        title={t("common.pricing")}
        homeText={t("common.home")}
        homeUrl="/"
        image="/images/page-banner1.jpg"
        image2="/images/page-banner2.jpg"
        image3="/images/page-banner3.jpg"
      />

      <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-[850px] text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b88712]">
            {t("pricing.intro.eyebrow")}
          </p>
          <h1 className="mb-5 text-4xl leading-tight sm:text-5xl">
            {t("pricing.intro.title")}
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#626775]">
            {t("pricing.intro.description")}
          </p>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 bg-[#F7F8FA] px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1000px] gap-6 md:grid-cols-2">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`relative rounded-2xl border bg-white p-7 shadow-sm sm:p-9 ${
                index === 1
                  ? "border-[#E6B325] ring-1 ring-[#E6B325]"
                  : "border-[#e7e9ee]"
              }`}
            >
              {index === 1 && (
                <span className="absolute right-5 top-5 rounded-full bg-[#F8F1E1] px-3 py-1 text-xs font-semibold text-[#725408]">
                  {t("common.moreSupport")}
                </span>
              )}
              <h2 className="mb-3 text-2xl">{plan.name}</h2>
              <p className="mb-7 min-h-12 text-[#626775]">{plan.description}</p>
              <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-[#b88712]">
                {t("common.customPricing")}
              </p>
              <p className="mb-7 text-sm text-[#626775]">
                {t("pricing.discussedDuringDiscoveryCall")}
              </p>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-[#626775]"
                  >
                    <i
                      aria-hidden="true"
                      className="ri-check-line mt-0.5 text-lg text-[#b88712]"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/booking/"
                className={`inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3.5 text-center font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  index === 1
                    ? "bg-[#E6B325] text-[#23274A] hover:bg-[#f0c84f] focus-visible:outline-[#E6B325]"
                    : "bg-[#112240] text-white hover:bg-[#263c60] focus-visible:outline-[#112240]"
                }`}
              >
                {t("pricing.discussPlan")}
                <i aria-hidden="true" className="ri-arrow-right-up-line" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="mb-4 text-3xl">
            {t("pricing.cta.title")}
          </h2>
          <p className="mb-7 text-[#626775]">
            {t("pricing.cta.description")}
          </p>
          <Link
            href="/booking/"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#717FF8] px-6 py-3.5 font-semibold text-[#23274A] transition hover:bg-[#5968e8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#717FF8]"
          >
            {t("common.bookFreeCall")}
            <i aria-hidden="true" className="ri-arrow-right-up-line" />
          </Link>
        </div>
      </section>
    </main>
  );
}
