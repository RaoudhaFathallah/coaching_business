"use client";

import Link from "next/link";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import { useLanguage } from "@/providers/LanguageProvider";

export default function FaqPage() {
  const { t, messages } = useLanguage();
  const questions = messages.faq.questions;

  return (
    <main>
      <PageBannerTitle
        title={t("faq.title")}
        homeText={t("common.home")}
        homeUrl="/"
        image="/images/page-banner1.jpg"
        image2="/images/page-banner2.jpg"
        image3="/images/page-banner3.jpg"
      />

      <section id="faq" className="scroll-mt-24 bg-[#F7F8FA] px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-[850px]">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b88712]">
              {t("faq.eyebrow")}
            </p>
            <h1 className="mb-4 text-3xl leading-tight sm:text-4xl">
              {t("faq.heading")}
            </h1>
            <p className="text-[#626775]">
              {t("faq.description")}
            </p>
          </div>
          <div className="divide-y divide-[#e1e3e8] rounded-2xl border border-[#e1e3e8] bg-white px-5 sm:px-8">
            {questions.map((item, index) => (
              <details key={index} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#23274A] marker:hidden [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <i
                    aria-hidden="true"
                    className="ri-add-line shrink-0 text-xl text-[#b88712] transition-transform group-open:rotate-45"
                  />
                </summary>
                <p className="max-w-3xl pt-4 leading-relaxed text-[#626775]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contact-us/"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#E6B325] px-6 py-3.5 font-semibold text-[#23274A] transition hover:bg-[#f0c84f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E6B325]"
            >
              {t("faq.askQuestion")}
              <i aria-hidden="true" className="ri-arrow-right-up-line" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
