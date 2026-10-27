"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/providers/LanguageProvider";
import { getTranslations } from "@/locales";
import { isTranslatedRoute } from "@/locales/routes";

import logo from "/public/images/logo-1.png";

const FooterThree: React.FC = () => {
  const pathname = usePathname();
  const { language } = useLanguage();
  // Only the coaching landing pages are translated; other routes stay in English.
  const { t } = getTranslations(isTranslatedRoute(pathname) ? language : "en");

  return (
    <>
      <footer className="bg-[#112240] pt-[50px] md:pt-[60px] lg:pt-[140px]">
        <div className="container mx-auto">
          <div className="grid items-center gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <div className="lg:flex items-center space-y-[30px] lg:space-y-[0] lg:space-x-[50px] rtl:space-x-reverse">
              <Link href="/">
                <Image src={logo} alt="logo" />
              </Link>

              <div className="flex items-center space-x-[10px] rtl:space-x-reverse">
                <p className="text-[#F8F1E199] text-[16px] lg:text-[20px]">{t("footer.followOn")}</p>

                <ul className="space-x-[10px] rtl:space-x-reverse">
                  <li className="inline-block">
                    <a
                      href="https://www.facebook.com/"
                      target="_black"
                      className="bg-[#F8F1E114] text-[#F8F1E1] inline-block w-[32px] h-[32px] leading-[32px] text-center rounded-full transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#112240]"
                    >
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>

                  <li className="inline-block">
                    <a
                      href="https://www.twitter.com/"
                      target="_black"
                      className="bg-[#F8F1E114] text-[#F8F1E1] inline-block w-[32px] h-[32px] leading-[32px] text-center rounded-full transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#112240]"
                    >
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>

                  <li className="inline-block">
                    <a
                      href="https://www.linkedin.com/"
                      target="_black"
                      className="bg-[#F8F1E114] text-[#F8F1E1] inline-block w-[32px] h-[32px] leading-[32px] text-center rounded-full transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#112240]"
                    >
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>

                  <li className="inline-block">
                    <a
                      href="https://www.instagram.com/"
                      target="_black"
                      className="bg-[#F8F1E114] text-[#F8F1E1] inline-block w-[32px] h-[32px] leading-[32px] text-center rounded-full transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#112240]"
                    >
                      <i className="ri-instagram-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:text-end">
              <a
                href="mailto:coaching@gmail.com"
                className="primaryText font-semibold text-[20px] lg:text-[30px] transition duration-500 ease-in-out hover:text-[#fff]"
              >
                coaching@gmail.com
              </a>{" "}
              <br />
              <a
                href="tel:+838 9838 93909"
                className="primaryText font-semibold text-[20px] lg:text-[30px] transition duration-500 ease-in-out hover:text-[#fff]"
              >
                +838 9838 93909
              </a>
            </div>
          </div>

          <hr className="border-[#F8F1E11C] my-[50px] md:my-[60px] lg:my-[70px]" />

          <div className="grid gap-[30px] grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            <div>
              <h3 className="text-[#F8F1E1] text-[20px] mb-[30px] leading-none">
                {t("footer.exploreMore")}
              </h3>

              <ul className="space-y-[14px]">
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

                <li>
                  <Link
                    href="/instructor/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.becomeOnlineTeacher")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/student/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.studentProfile")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about-me/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("common.aboutMe")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/student/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.myAccount")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#F8F1E1] text-[20px] mb-[30px] leading-none">
                {t("footer.onlineCourses")}
              </h3>

              <ul className="space-y-[14px]">
                <li>
                  <Link
                    href="/courses/course-details/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.languagesClasses")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/courses/course-details/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.photographyOnline")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/courses/course-details/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.communicationSkills")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/courses/course-details/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.designSkills")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/courses/course-details/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.businessMarketing")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/courses/course-details/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.productDesign")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#F8F1E1] text-[20px] mb-[30px] leading-none">
                {t("footer.quickLinks")}
              </h3>

              <ul className="space-y-[14px]">
                <li>
                  <Link
                    href="/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.homePage")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/courses/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.allCourses")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/events/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.events")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/team/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.teamMember")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact-us/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.contactUs")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about-us/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.aboutUs")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#F8F1E1] text-[20px] mb-[30px] leading-none">
                {t("footer.helpSupport")}
              </h3>

              <ul className="space-y-[14px]">
                <li>
                  <Link
                    href="/register/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.register")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/login/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.login")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/faq/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.faqPage")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact-us/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.onlineSupport")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/events/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.events")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/blog/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    {t("footer.blog")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-[#F8F1E11C] py-[25px] mt-[50px] md:mt-[80px] lg:mt-[140px]">
            <p className="text-[#F8F1E199]">
              {t("footer.copyright")}
              <a
                href="https://hibootstrap.com/"
                target="_blank"
                className="text-[#717FF8]"
              >
                HiBootstrap
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterThree;
