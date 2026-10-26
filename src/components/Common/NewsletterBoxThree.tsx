"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/providers/LanguageProvider";
import { getTranslations } from "@/locales";
import { isTranslatedRoute } from "@/locales/routes";

const NewsletterBoxThree: React.FC = () => {
  const pathname = usePathname();
  const { language } = useLanguage();
  // Only the coaching landing pages are translated; other routes stay in English.
  const { t } = getTranslations(isTranslatedRoute(pathname) ? language : "en");

  return (
    <>
      <div className="relative before:absolute before:content-[''] before:bg-[#112240] before:bottom-0 before:left-0 before:h-[50%] before:w-full">
        <div className="container mx-auto">
          <div
            className="relative bg-[#E6B325] p-[30px] md:p-[50px] lg:p-[60px] xl:p-[100px]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <div className="grid items-center gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h1 className="text-[#112240] text-[30px] md:text-[40px] lg:text-[50px] xl:text-[70px] 2xl:text-[80px] sm:tracking-[-1.2px] leading-none">
                  {t("newsletter.title")}
                </h1>
              </div>

              <div>
                <form className="space-y-[15px]">
                  <input
                    type="email"
                    placeholder={t("newsletter.emailPlaceholder")}
                    className="bg-transparent text-[#112240] border border-[#112240] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#112240]"
                  />

                  <button
                    type="submit"
                    className="bg-[#112240] font-semibold text-white block w-full py-[15px] px-[10px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-white"
                  >
                    {t("newsletter.subscribe")}{" "}
                    <i className="ri-arrow-right-up-line"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterBoxThree;
