"use client";

import Image from "next/image";
import Link from "next/link";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import { useLanguage } from "@/providers/LanguageProvider";

const valueIcons = ["ri-heart-3-line", "ri-user-search-line", "ri-footprint-line"];
const approachNumbers = ["01", "02", "03"];

export default function AboutMePage() {
  const { t, messages } = useLanguage();
  const values = messages.aboutMe.values.items.map((item, index) => ({
    ...item,
    icon: valueIcons[index],
  }));
  const approach = messages.aboutMe.approach.steps.map((step, index) => ({
    ...step,
    number: approachNumbers[index],
  }));

  return (
    <main id="about-page">
      <PageBannerTitle
        title={t("common.aboutMe")}
        homeText={t("common.home")}
        homeUrl="/"
        image="/images/page-banner1.jpg"
        image2="/images/page-banner2.jpg"
        image3="/images/page-banner3.jpg"
      />

      <section className="bg-[#112240] px-5 py-16 text-white sm:px-8 md:py-24 lg:py-28">
        <div className="container mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#E6B325]">
              {t("common.aLittleAboutMe")}
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {t("aboutMe.hero.title")}
            </h1>
            <p className="mb-5 max-w-xl text-lg leading-relaxed text-white/80">
              {t("aboutMe.hero.paragraph1")}
            </p>
            <p className="mb-8 max-w-xl leading-relaxed text-white/70">
              {t("aboutMe.hero.paragraph2")}
            </p>
            <Link
              href="/booking/"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#E6B325] px-6 py-3.5 font-semibold text-[#23274A] transition hover:bg-[#f0c84f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E6B325]"
            >
              {t("common.bookFreeCall")}
              <i aria-hidden="true" className="ri-arrow-right-up-line" />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="absolute -inset-3 rounded-[48%_48%_18px_18px] border border-white/25" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[48%_48%_18px_18px] bg-[#dce9e5]">
              <Image
                src="/images/life-coach/about-me2.jpg"
                alt={t("aboutMe.hero.imageAlt")}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 480px"
                className="object-cover object-top"
              />
            </div>
            <p className="absolute -bottom-4 left-3 rounded-lg bg-white px-5 py-3 font-semibold text-[#23274A] shadow-lg sm:left-7">
              {t("aboutMe.hero.caption")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 md:py-24 lg:py-28">
        <div className="container mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto w-full max-w-[540px]">
            <Image
              src="/images/life-coach/about-me.jpg"
              alt={t("aboutMe.philosophy.imageAlt")}
              width={1026}
              height={684}
              sizes="(max-width: 768px) 90vw, 540px"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <div className="absolute -bottom-5 right-4 max-w-[270px] rounded-xl bg-[#F8F1E1] p-5 text-[#23274A] shadow-lg sm:right-8">
              <p className="font-semibold">{t("aboutMe.philosophy.cardTitle")}</p>
              <p className="mt-1 text-sm text-[#626775]">
                {t("aboutMe.philosophy.cardSubtitle")}
              </p>
            </div>
          </div>
          <div className="pt-2 md:pt-0">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b88712]">
              {t("aboutMe.philosophy.eyebrow")}
            </p>
            <h2 className="mb-5 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {t("aboutMe.philosophy.title")}
            </h2>
            <p className="mb-4 text-[#626775]">
              {t("aboutMe.philosophy.paragraph1")}
            </p>
            <p className="text-[#626775]">
              {t("aboutMe.philosophy.paragraph2")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA] px-5 py-16 sm:px-8 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-[1200px]">
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b88712]">
              {t("aboutMe.values.eyebrow")}
            </p>
            <h2 className="mb-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {t("aboutMe.values.title")}
            </h2>
            <p className="text-[#626775]">
              {t("aboutMe.values.description")}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.icon}
                className="rounded-xl border border-[#e7e9ee] bg-white p-6 shadow-sm sm:p-8"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#F8F1E1] text-2xl text-[#112240]">
                  <i aria-hidden="true" className={value.icon} />
                </span>
                <h3 className="mb-3 text-xl">{value.title}</h3>
                <p className="text-[#626775]">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-[1000px]">
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b88712]">
              {t("aboutMe.approach.eyebrow")}
            </p>
            <h2 className="mb-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {t("aboutMe.approach.title")}
            </h2>
            <p className="text-[#626775]">
              {t("aboutMe.approach.description")}
            </p>
          </div>
          <ol className="grid gap-5 md:grid-cols-3">
            {approach.map((step) => (
              <li
                key={step.number}
                className="rounded-xl border border-[#e7e9ee] p-6 sm:p-8"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#112240] font-semibold text-[#E6B325]">
                  {step.number}
                </span>
                <h3 className="mb-3 text-xl">{step.title}</h3>
                <p className="text-[#626775]">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#112240] px-5 py-16 text-center text-white sm:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#E6B325]">
            {t("aboutMe.cta.eyebrow")}
          </p>
          <h2 className="mb-5 text-3xl leading-tight text-white sm:text-4xl">
            {t("aboutMe.cta.title")}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/75">
            {t("aboutMe.cta.description")}
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
