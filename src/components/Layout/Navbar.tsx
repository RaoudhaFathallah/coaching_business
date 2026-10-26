"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import logo from "/public/images/logo-1.png";
import Profile from "./Profile";

const Navbar: React.FC = () => {
  const currentRoute = usePathname();

  // Sticky Navbar
  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("isSticky");
      } else {
        elementId?.classList.remove("isSticky");
      }
    });

    return () => {
      document.removeEventListener("scroll", () => {
        if (window.scrollY > 170) {
          elementId?.classList.add("isSticky");
        } else {
          elementId?.classList.remove("isSticky");
        }
      });
    };
  }, []);

  // Toggle active class
  const [isActive, setActive] = useState<boolean>(false);
  const handleToggleSearchModal = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div
        id="navbar"
        className="navbar-area bg-[#717FF8] relative z-[2] py-[20px] lg:py-[25px] xl:py-0"
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
            >
              <span className="burger-menu text-white cursor-pointer leading-none text-[30px]">
                <i className="ri-menu-line"></i>
              </span>
            </button>

            <div className="navbar-collapse flex self-center grow basis-auto">
              <ul className="navbar-nav self-center flex-row mx-auto xl:flex">
                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group last:mr-0 first:ml-0">
                  <Link
                    href="#"
                    className="text-white text-[16px] font-medium transition-all hover:text-[#E6B325] dropdown-toggle"
                    onClick={(e) => e.preventDefault()}
                  >
                    Home
                  </Link>

                  <ul className="absolute z-[999] bg-white border left-0 rtl:left-auto rtl:right-0 w-[270px] top-[100%] shadow-dropdown py-[15px] opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                          currentRoute === "/" ? "text-[#717FF8]" : "text-black"
                        }`}
                      >
                        Health Coach
                      </Link>
                    </li>

                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/online-training-coach/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                          currentRoute === "/online-training-coach/"
                            ? "text-[#717FF8]"
                            : "text-black"
                        }`}
                      >
                        Online Training Coach
                      </Link>
                    </li>

                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/life-coach/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#717FF8] ${
                          currentRoute === "/life-coach/"
                            ? "text-[#717FF8]"
                            : "text-black"
                        }`}
                      >
                        Life Coach
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group last:mr-0 first:ml-0">
                  <a
                    href="#"
                    className="text-white text-[16px] font-medium transition-all hover:text-[#E6B325] dropdown-toggle"
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
                    className={`text-[16px] font-medium transition-all hover:text-[#E6B325] ${
                      currentRoute === "/about-us/"
                        ? "text-[#E6B325]"
                        : "text-white"
                    }`}
                  >
                    About Us
                  </Link>
                </li>

                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group last:mr-0 first:ml-0">
                  <Link
                    href="#"
                    className="text-white text-[16px] font-medium transition-all hover:text-[#E6B325] dropdown-toggle"
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
                    className="text-white text-[16px] font-medium transition-all hover:text-[#E6B325] dropdown-toggle"
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
                    className="text-white text-[16px] font-medium transition-all hover:text-[#E6B325] dropdown-toggle"
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
                    className={`text-[16px] font-medium transition-all hover:text-[#E6B325] ${
                      currentRoute === "/contact-us/"
                        ? "text-[#E6B325]"
                        : "text-white"
                    }`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>

              {/* Other options */}
              <div className="other-options self-center border border-[#fff] py-[5px] xl:py-[12px] px-[15px] xl:px-[20px] space-x-[15px] xl:space-x-[20px] rtl:space-x-reverse absolute xl:relative top-0 right-[50px] rtl:right-auto rtl:left-[40px] xl:right-[0] rtl:xl:right-auto rtl:xl:left-[0]">
                {/* Profile */}
                <Profile />
                
                <a
                  href="/cart/"
                  className="relative text-white text-[16px] xl:text-[22px] inline-block"
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

export default Navbar;
