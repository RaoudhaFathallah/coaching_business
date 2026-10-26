"use client";

import Link from "next/link";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import { useLanguage } from "@/providers/LanguageProvider";

export default function FeedbacksPage() {
  const { t } = useLanguage();

  return (
    <main>
      <PageBannerTitle
        title={t("feedbacks.title")}
        homeText={t("common.home")}
        homeUrl="/"
        image="/images/page-banner1.jpg"
        image2="/images/page-banner2.jpg"
        image3="/images/page-banner3.jpg"
      />

      <section id="testimonials" className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-[900px] text-center">
          <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F8F1E1] text-3xl text-[#112240]">
            <i aria-hidden="true" className="ri-chat-quote-line" />
          </span>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b88712]">
            {t("feedbacks.eyebrow")}
          </p>
          <h1 className="mb-5 text-3xl leading-tight sm:text-4xl lg:text-5xl">
            {t("feedbacks.heading")}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-[#626775]">
            {t("feedbacks.description")}
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/how-it-works/"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#E6B325] px-6 py-3.5 font-semibold text-[#23274A] transition hover:bg-[#f0c84f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E6B325]"
            >
              {t("feedbacks.exploreProcess")}
              <i aria-hidden="true" className="ri-arrow-right-line" />
            </Link>
            <Link
              href="/booking/"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#112240] px-6 py-3.5 font-semibold text-[#112240] transition hover:bg-[#112240] hover:text-white"
            >
              {t("common.bookFreeCall")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
