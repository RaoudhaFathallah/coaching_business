"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import logo from "/public/images/logo-1.png";
import Profile from "./Profile";
import { useLanguage } from "@/providers/LanguageProvider";

const NavbarThree: React.FC = () => {
  const currentRoute = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const normalizedRoute = currentRoute.replace(/\/$/, "");
  const isHomePage = currentRoute === "/";
  const isAboutPage = normalizedRoute === "/about-me";
  const isProgramsPage = normalizedRoute === "/courses";
  const isHowItWorksPage = normalizedRoute === "/how-it-works";
  const isPricingPage = normalizedRoute === "/pricing";
  const isTestimonialsPage = normalizedRoute === "/feedbacks";
  const isFaqPage = normalizedRoute === "/faq";
  const isContactPage = normalizedRoute === "/contact-us";
  const isBookingPage = normalizedRoute === "/booking";
  const showLandingNavigation = [
    isHomePage,
    isAboutPage,
    isProgramsPage,
    isHowItWorksPage,
    isPricingPage,
    isTestimonialsPage,
    isFaqPage,
    isContactPage,
    isBookingPage,
  ].some(Boolean);

  // Sticky Navbar
  useEffect(() => {
    const elementId = document.getElementById("navbar");
    const handleScroll = () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("isSticky");
      } else {
        elementId?.classList.remove("isSticky");
      }
    };

    document.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle active class
  const [isActive, setActive] = useState<boolean>(false);
  const handleToggleSearchModal = () => {
    setActive((active) => !active);
  };

  return (
    <>
      <div
        id="navbar"
        className={`navbar-area navbar-style-two ${
          isAboutPage ? "bg-transparent" : "bg-[#ffff]"
        } relative z-[2] py-[20px] lg:py-[25px] xl:py-0`}
      >
        <div className="container mx-auto max-w-[1570px]">
          <nav
            className={`navbar relative flex flex-wrap ${
              isActive ? "active" : ""
            }`}
          >
            <div className="self-center">
              <Link href="/">
                <Image src={logo} className="inline" alt="logo" />
              </Link>
            </div>

            {/* Toggle button */}
            <button
              className="navbar-toggler absolute ml-auto right-0 rtl:right-auto rtl:left-0 top-[2px] xl:hidden"
              type="button"
              onClick={handleToggleSearchModal}
              aria-label={isActive ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isActive}
            >
              <span className="burger-menu text-black cursor-pointer leading-none text-[30px]">
                <i className="ri-menu-line"></i>
              </span>
            </button>

            <div className="navbar-collapse flex self-center grow basis-auto">
              <ul className="navbar-nav self-center flex-row ml-auto rtl:ml-0 rtl:mr-auto xl:pr-[50px] rtl:xl:pr-0 rtl:xl:pl-[50px] xl:flex">
                {showLandingNavigation ? (
                  <>
                    {[
                      [t("common.home"), "/"],
                      [t("nav.about"), "/about-me/"],
                      [t("nav.programs"), "/courses/"],
                      [t("common.howItWorks"), "/how-it-works/"],
                      [t("common.pricing"), "/pricing/"],
                      [t("nav.testimonials"), "/feedbacks/"],
                      [t("nav.faq"), "/faq/"],
                      [t("nav.contact"), "/contact-us/"],
                    ].map(([label, href]) => (
                      <li
                        key={href}
                        className="xl:mx-[8px] 2xl:mx-[12px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative"
                      >
                        <Link
                          href={href}
                          onClick={() => setActive(false)}
                          className="text-[15px] font-medium text-black transition-all hover:text-[#717FF8]"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                    <li className="xl:mx-[8px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative">
                      <Link
                        href="/booking/"
                        onClick={() => setActive(false)}
                        className="inline-flex items-center rounded bg-[#E6B325] px-4 py-2 text-sm font-semibold text-[#23274A] transition hover:bg-[#f0c84f]"
                      >
                        {t("common.bookFreeCall")}
                      </Link>
                    </li>
                    <li className="flex items-center gap-1 py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] xl:ml-2">
                      {(["fr", "en"] as const).map((option) => (
                        <button
                          key={option}
                          type="button"
                          lang={option}
                          aria-label={option === "fr" ? "Français" : "English"}
                          aria-pressed={language === option}
                          onClick={() => {
                            setLanguage(option);
                            setActive(false);
                          }}
                          className={`rounded px-2 py-1 text-sm font-semibold transition ${
                            language === option
                              ? "bg-[#112240] text-white"
                              : "text-[#23274A] hover:bg-[#F8F1E1]"
                          }`}
                        >
                          {option.toUpperCase()}
                        </button>
                      ))}
                    </li>
                  </>
                ) : (
                  <>
                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group last:mr-0 first:ml-0">
                  <Link
                    href="/"
                    className={`text-[16px] font-medium transition-all hover:text-[#717FF8] ${
                      currentRoute === "/"
                        ? "text-[#E6B325]"
                        : "text-black"
                    }`}
                  >
                    Home
                  </Link>

                </li>

                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group last:mr-0 first:ml-0">
                  <a
                    href="#"
                    className="text-black text-[16px] font-medium transition-all hover:text-[#717FF8] dropdown-toggle"
                    onClick={(e) => e.preventDefault()}
                  >
                    Pages
                  </a>

                  <ul className="absolute z-[999] bg-white border left-0 rtl:left-auto rtl:right-0 w-[270px] top-[100%] shadow-dropdown py-[15px] opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/about-us/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                          currentRoute === "/about-us/"
                            ? "text-[#717FF8]"
                            : "text-black"
                        }`}
                      >
                        About Us
                      </Link>
                    </li>

                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/about-me/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                          currentRoute === "/about-me/"
                            ? "text-[#717FF8]"
                            : "text-black"
                        }`}
                      >
                        About Me
                      </Link>
                    </li>

                    <li className="py-[7px] px-[22px] relative">
                      <Link
                        href="#"
                        className="block font-medium text-[15px] text-black transition-all hover:text-[#717FF8] dropdown-toggle"
                        onClick={(e) => e.preventDefault()}
                      >
                        Services
                      </Link>

                      <ul className="absolute z-[999] bg-white border left-full rtl:left-auto rtl:right-full w-[270px] top-0 shadow-dropdown py-[15px] opacity-0 invisible transition-all">
                        <li className="py-[7px] px-[22px]">
                          <Link
                            href="/services/"
                            className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                              currentRoute === "/services/"
                                ? "text-[#717FF8]"
                                : "text-black"
                            }`}
                          >
                            Services
                          </Link>
                        </li>

                        <li className="py-[7px] px-[22px]">
                          <Link
                            href="/services/service-details/"
                            className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                              currentRoute === "/services/service-details/"
                                ? "text-[#717FF8]"
                                : "text-black"
                            }`}
                          >
                            Service Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="py-[7px] px-[22px] relative">
                      <Link
                        href="#"
                        className="block font-medium text-[15px] text-black transition-all hover:text-[#717FF8] dropdown-toggle"
                        onClick={(e) => e.preventDefault()}
                      >
                        Courses
                      </Link>

                      <ul className="absolute z-[999] bg-white border left-full rtl:left-auto rtl:right-full w-[270px] top-0 shadow-dropdown py-[15px] opacity-0 invisible transition-all">
                        <li className="py-[7px] px-[22px]">
                          <Link
                            href="/courses/"
                            className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                              currentRoute === "/courses/"
                                ? "text-[#717FF8]"
                                : "text-black"
                            }`}
                          >
                            Careers
                          </Link>
                        </li>

                        <li className="py-[7px] px-[22px]">
                          <Link
                            href="/courses/course-details/"
                            className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                              currentRoute === "/courses/course-details/"
                                ? "text-[#717FF8]"
                                : "text-black"
                            }`}
                          >
                            Course Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="py-[7px] px-[22px] relative">
                      <Link
                        href="#"
                        className="block font-medium text-[15px] text-black transition-all hover:text-[#717FF8] dropdown-toggle"
                        onClick={(e) => e.preventDefault()}
                      >
                        Events
                      </Link>

                      <ul className="absolute z-[999] bg-white border left-full rtl:left-auto rtl:right-full w-[270px] top-0 shadow-dropdown py-[15px] opacity-0 invisible transition-all">
                        <li className="py-[7px] px-[22px]">
                          <Link
                            href="/events/"
                            className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                              currentRoute === "/events/"
                                ? "text-[#717FF8]"
                                : "text-black"
                            }`}
                          >
                            Events
                          </Link>
                        </li>

                        <li className="py-[7px] px-[22px]">
                          <Link
                            href="/events/event-details/"
                            className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                              currentRoute === "/events/event-details/"
                                ? "text-[#717FF8]"
                                : "text-black"
                            }`}
                          >
                            Event Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="py-[7px] px-[22px] relative">
                      <Link
                        href="#"
                        className="block font-medium text-[15px] text-black transition-all hover:text-[#717FF8] dropdown-toggle"
                        onClick={(e) => e.preventDefault()}
                      >
                        Blog
                      </Link>

                      <ul className="absolute z-[999] bg-white border left-full rtl:left-auto rtl:right-full w-[270px] top-0 shadow-dropdown py-[15px] opacity-0 invisible transition-all">
                        <li className="py-[7px] px-[22px]">
                          <Link
                            href="/blog/"
                            className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                              currentRoute === "/blog/"
                                ? "text-[#717FF8]"
                                : "text-black"
                            }`}
                          >
                            Blog
                          </Link>
                        </li>

                        <li className="py-[7px] px-[22px]">
                          <Link
                            href="/blog/blog-details/"
                            className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                              currentRoute === "/blog/blog-details/"
                                ? "text-[#717FF8]"
                                : "text-black"
                            }`}
                          >
                            Blog Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/login/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                          currentRoute === "/login/"
                            ? "text-[#717FF8]"
                            : "text-black"
                        }`}
                      >
                        Login
                      </Link>
                    </li>

                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/register/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                          currentRoute === "/register/"
                            ? "text-[#717FF8]"
                            : "text-black"
                        }`}
                      >
                        Register
                      </Link>
                    </li>

                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/team/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                          currentRoute === "/team/"
                            ? "text-[#717FF8]"
                            : "text-black"
                        }`}
                      >
                        Team
                      </Link>
                    </li>
 
                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/feedbacks/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                          currentRoute === "/feedbacks/"
                            ? "text-[#717FF8]"
                            : "text-black"
                        }`}
                      >
                        Feedbacks
                      </Link>
                    </li>

                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/faq/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                          currentRoute === "/faq/"
                            ? "text-[#717FF8]"
                            : "text-black"
                        }`}
                      >
                        FAQ
                      </Link>
                    </li>

                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/privacy-policy/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                          currentRoute === "/privacy-policy/"
                            ? "text-[#717FF8]"
                            : "text-black"
                        }`}
                      >
                        Privacy Policy
                      </Link>
                    </li>

                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/terms-conditions/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                          currentRoute === "/terms-conditions/"
                            ? "text-[#717FF8]"
                            : "text-black"
                        }`}
                      >
                        Terms & Conditions
                      </Link>
                    </li>

                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/404/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                          currentRoute === "/404/"
                            ? "text-[#717FF8]"
                            : "text-black"
                        }`}
                      >
                        404 Error Page
                      </Link>
                    </li>

                    <li className="py-[7px] px-[22px] relative">
                      <Link
                        href="#"
                        className="block font-medium text-[15px] text-black transition-all hover:text-[#717FF8] dropdown-toggle"
                        onClick={(e) => e.preventDefault()}
                      >
                        Multi Level Menu
                      </Link>

                      <ul className="absolute z-[999] bg-white border left-full rtl:left-auto rtl:right-full w-[270px] top-0 shadow-dropdown py-[15px] opacity-0 invisible transition-all">
                        <li className="py-[7px] px-[22px]">
                          <Link
                            href="#"
                            className="block font-medium text-[15px] text-black transition-all hover:text-[#717FF8]"
                          >
                            First
                          </Link>
                        </li>
                        <li className="py-[7px] px-[22px]">
                          <Link
                            href="#"
                            className="block font-medium text-[15px] text-black transition-all hover:text-[#717FF8]"
                          >
                            Second
                          </Link>
                        </li>

                        <li className="py-[7px] px-[22px] relative">
                          <Link
                            href="#"
                            className="block font-medium text-[15px] text-black transition-all hover:text-[#717FF8] dropdown-toggle"
                          >
                            Third
                          </Link>

                          <ul className="absolute z-[999] bg-white border -left-full rtl:left-auto rtl:-right-full w-[270px] top-0 shadow-dropdown py-[15px] opacity-0 invisible transition-all">
                            <li className="py-[7px] px-[22px]">
                              <Link
                                href="#"
                                className="block font-medium text-[15px] text-black transition-all hover:text-[#717FF8]"
                              >
                                Third 1
                              </Link>
                            </li>
                            <li className="py-[7px] px-[22px] relative">
                              <Link
                                href="#"
                                className="block font-medium text-[15px] text-black transition-all hover:text-[#717FF8]"
                              >
                                Third 2
                              </Link>
                            </li>
                            <li className="py-[7px] px-[22px]">
                              <Link
                                href="#"
                                className="block font-medium text-[15px] text-black transition-all hover:text-[#717FF8]"
                              >
                                Third 3
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group last:mr-0 first:ml-0">
                  <Link
                    href="/about-us/"
                    className={`text-[16px] font-medium transition-all hover:text-[#717FF8] ${
                      currentRoute === "/about-us/"
                        ? "text-[#E6B325]"
                        : "text-black"
                    }`}
                  >
                    About Us
                  </Link>
                </li>

                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group last:mr-0 first:ml-0">
                  <Link
                    href="#"
                    className="text-black text-[16px] font-medium transition-all hover:text-[#717FF8] dropdown-toggle"
                    onClick={(e) => e.preventDefault()}
                  >
                    Courses
                  </Link>

                  <ul className="absolute z-[999] bg-white border left-0 rtl:left-auto rtl:right-0 w-[270px] top-[100%] shadow-dropdown py-[15px] opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/courses/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                          currentRoute === "/courses/"
                            ? "text-[#717FF8]"
                            : "text-black"
                        }`}
                      >
                        Courses
                      </Link>
                    </li>

                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/courses/course-details/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                          currentRoute === "/courses/course-details/"
                            ? "text-[#717FF8]"
                            : "text-black"
                        }`}
                      >
                        Course Details
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group last:mr-0 first:ml-0">
                  <Link
                    href="#"
                    className="text-black text-[16px] font-medium transition-all hover:text-[#717FF8] dropdown-toggle"
                    onClick={(e) => e.preventDefault()}
                  >
                    Events
                  </Link>

                  <ul className="absolute z-[999] bg-white border left-0 rtl:left-auto rtl:right-0 w-[270px] top-[100%] shadow-dropdown py-[15px] opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/events/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                          currentRoute === "/events/"
                            ? "text-[#717FF8]"
                            : "text-black"
                        }`}
                      >
                        Events
                      </Link>
                    </li>

                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/events/event-details/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                          currentRoute === "/events/event-details/"
                            ? "text-[#717FF8]"
                            : "text-black"
                        }`}
                      >
                        Event Details
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group last:mr-0 first:ml-0">
                  <Link
                    href="#"
                    className="text-black text-[16px] font-medium transition-all hover:text-[#717FF8] dropdown-toggle"
                    onClick={(e) => e.preventDefault()}
                  >
                    Shop
                  </Link>

                  <ul className="absolute z-[999] bg-white border left-0 rtl:left-auto rtl:right-0 w-[270px] top-[100%] shadow-dropdown py-[15px] opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/shop/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                          currentRoute === "/shop/"
                            ? "text-[#717FF8]"
                            : "text-black"
                        }`}
                      >
                        Shop
                      </Link>
                    </li>

                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/shop/shop-details/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                          currentRoute === "/shop/shop-details/"
                            ? "text-[#717FF8]"
                            : "text-black"
                        }`}
                      >
                        Shop Details
                      </Link>
                    </li>

                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/cart/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                          currentRoute === "/cart/"
                            ? "text-[#717FF8]"
                            : "text-black"
                        }`}
                      >
                        Cart
                      </Link>
                    </li>

                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/checkout/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                          currentRoute === "/checkout/"
                            ? "text-[#717FF8]"
                            : "text-black"
                        }`}
                      >
                        Checkout
                      </Link>
                    </li>
                  </ul>
                </li>
 
                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group last:mr-0 first:ml-0">
                  <Link
                    href="/contact-us/"
                    className={`text-[16px] font-medium transition-all hover:text-[#717FF8] ${
                      currentRoute === "/contact-us/"
                        ? "text-[#E6B325]"
                        : "text-black"
                    }`}
                  >
                    Contact Us
                  </Link>
                </li>
                  </>
                )}
              </ul>

              {/* Other options */}
              <div className={`other-options self-center border border-[#051F0D] py-[5px] xl:py-[12px] px-[15px] xl:px-[20px] space-x-[15px] xl:space-x-[20px] rtl:space-x-reverse absolute xl:relative top-0 right-[50px] xl:right-[0] ${showLandingNavigation ? "hidden" : ""}`}>
                {/* Profile */}
                <Profile />
                
                <a
                  href="/cart/"
                  className="relative text-balck text-[16px] xl:text-[22px] inline-block"
                >
                  <i className="ri-shopping-bag-line"></i>

                  <span className="bg-[#051F0D] text-white text-[10px] w-[18px] h-[18px] leading-[18px] inline-block text-center rounded-full absolute top-[-5px] xl:top-[-3px] right-[-10px] xl:right-[-8px]">2</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavbarThree;
