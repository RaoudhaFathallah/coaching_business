"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/providers/LanguageProvider";

import logo from "/public/images/logo-1.png";

const FooterThree: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <footer className="bg-[#112240] pt-[50px] md:pt-[60px] lg:pt-[140px]">
        <div className="container mx-auto">
          <div className="grid items-center gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <div className="lg:flex items-center space-y-[30px] lg:space-y-[0] lg:space-x-[50px] rtl:space-x-reverse">
              <Link href="/">
                <Image src={logo} alt="logo" />
              </Link>

              <div className="max-w-sm text-[#F8F1E199]">
                <p>{t("footer.tagline")}</p>
              </div>
            </div>

            <div className="md:text-end">
              <p className="mb-3 text-[#F8F1E199]">{t("footer.startJourney")}</p>
              <Link
                href="/booking/"
                className="primaryText font-semibold text-[20px] lg:text-[30px] transition duration-500 ease-in-out hover:text-[#fff]"
              >
                {t("common.bookFreeCall")}
              </Link>
            </div>
          </div>

          <hr className="border-[#F8F1E11C] my-[50px] md:my-[60px] lg:my-[70px]" />

          <div className="grid gap-[30px] grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            <div>
              <h3 className="text-[#F8F1E1] text-[20px] mb-[30px] leading-none">
                {t("footer.coaching")}
              </h3>

              <ul className="space-y-[14px]">
                <li>
                  <Link
                    href="/courses/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.programs")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/how-it-works/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.howItWorks")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/pricing/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.pricing")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#F8F1E1] text-[20px] mb-[30px] leading-none">
                {t("footer.discover")}
              </h3>

              <ul className="space-y-[14px]">
                <li>
                  <Link
                    href="/about-me/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.aboutMe")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/feedbacks/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.testimonials")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/faq/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.faq")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#F8F1E1] text-[20px] mb-[30px] leading-none">
                {t("footer.getStarted")}
              </h3>

              <ul className="space-y-[14px]">
                <li>
                  <Link
                    href="/booking/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.bookCall")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact-us/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.contact")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#F8F1E1] text-[20px] mb-[30px] leading-none">
                {t("footer.information")}
              </h3>

              <ul className="space-y-[14px]">
                <li>
                  <Link
                    href="/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.home")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/privacy-policy/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.privacyPolicy")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/terms-conditions/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.termsConditions")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-[#F8F1E11C] py-[25px] mt-[50px] md:mt-[80px] lg:mt-[140px]">
            <p className="text-[#F8F1E199]">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterThree;
