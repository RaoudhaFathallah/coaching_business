"use client";

import PageBannerTitle from "@/components/Common/PageBannerTitle";
import ContactInfo from "@/components/ContactUs/ContactInfo";
import ContactForm from "@/components/ContactUs/ContactForm";
import { useLanguage } from "@/providers/LanguageProvider";

export default function ContactUsPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageBannerTitle
        title={t("nav.contact")}
        homeText={t("common.home")}
        homeUrl="/"
        image="/images/life-coach/about-me.jpg"
        image2="/images/life-coach/service1.jpg"
        image3="/images/life-coach/service2.jpg"
      />

      <div className="bg-[#ffff]">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
}
