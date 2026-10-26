"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "/public/images/logo-1.png";

const FooterTwo: React.FC = () => {
  return (
    <>
      <footer className="bg-[#051F0D] pt-[50px] md:pt-[60px] lg:pt-[140px] lg:rounded-t-[300px]">
        <div className="container mx-auto">
          <div className="grid items-center gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <div 
              className="lg:flex items-center space-y-[30px] lg:space-y-[0] lg:space-x-[50px] rtl:space-x-reverse"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800" data-aos-once="true"
            >
              <Link href="/">
                <Image src={logo} alt="logo" />
              </Link>

              <div className="flex items-center space-x-[10px] rtl:space-x-reverse">
                <p className="text-[#F8F1E199] text-[16px] lg:text-[20px]">Follow On:</p>

                <ul className="space-x-[10px] rtl:space-x-reverse">
                  <li className="inline-block">
                    <a
                      href="https://www.facebook.com/"
                      target="_black"
                      className="bg-[#F8F1E114] text-[#F8F1E1] inline-block w-[32px] h-[32px] leading-[32px] text-center rounded-full transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#051F0D]"
                    >
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>

                  <li className="inline-block">
                    <a
                      href="https://www.twitter.com/"
                      target="_black"
                      className="bg-[#F8F1E114] text-[#F8F1E1] inline-block w-[32px] h-[32px] leading-[32px] text-center rounded-full transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#051F0D]"
                    >
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>

                  <li className="inline-block">
                    <a
                      href="https://www.linkedin.com/"
                      target="_black"
                      className="bg-[#F8F1E114] text-[#F8F1E1] inline-block w-[32px] h-[32px] leading-[32px] text-center rounded-full transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#051F0D]"
                    >
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>

                  <li className="inline-block">
                    <a
                      href="https://www.instagram.com/"
                      target="_black"
                      className="bg-[#F8F1E114] text-[#F8F1E1] inline-block w-[32px] h-[32px] leading-[32px] text-center rounded-full transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#051F0D]"
                    >
                      <i className="ri-instagram-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div 
              className="md:text-end"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800" data-aos-once="true"
            >
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
                Explore More
              </h3>

              <ul className="space-y-[14px]">
                <li>
                  <Link
                    href="/privacy-policy/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="/terms-conditions/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    Terms & Condition
                  </Link>
                </li>

                <li>
                  <Link
                    href="/instructor/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    Become Online Teacher
                  </Link>
                </li>

                <li>
                  <Link
                    href="/student/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    Student Profile
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about-me/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    About Me
                  </Link>
                </li>

                <li>
                  <Link
                    href="/student/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    My account
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#F8F1E1] text-[20px] mb-[30px] leading-none">
                Online Courses
              </h3>

              <ul className="space-y-[14px]">
                <li>
                  <Link
                    href="/courses/course-details/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    Languages Classes
                  </Link>
                </li>

                <li>
                  <Link
                    href="/courses/course-details/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    Photography Online
                  </Link>
                </li>

                <li>
                  <Link
                    href="/courses/course-details/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    Communication Skills
                  </Link>
                </li>

                <li>
                  <Link
                    href="/courses/course-details/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    Design Skills
                  </Link>
                </li>

                <li>
                  <Link
                    href="/courses/course-details/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    Business Marketing
                  </Link>
                </li>

                <li>
                  <Link
                    href="/courses/course-details/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    Product Design
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#F8F1E1] text-[20px] mb-[30px] leading-none">
                Quick Links
              </h3>

              <ul className="space-y-[14px]">
                <li>
                  <Link
                    href="/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    Home Page
                  </Link>
                </li>

                <li>
                  <Link
                    href="/courses"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    All Courses
                  </Link>
                </li>

                <li>
                  <Link
                    href="/events/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    Events
                  </Link>
                </li>

                <li>
                  <Link
                    href="/team/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    Team Member
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact-us/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about-us/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#F8F1E1] text-[20px] mb-[30px] leading-none">
                Help & support
              </h3>

              <ul className="space-y-[14px]">
                <li>
                  <Link
                    href="/register/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    Register
                  </Link>
                </li>

                <li>
                  <Link
                    href="/login/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    Login
                  </Link>
                </li>

                <li>
                  <Link
                    href="/faq/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    FAQ’s Page
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact-us/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    Online Support
                  </Link>
                </li>

                <li>
                  <Link
                    href="/events/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    Events
                  </Link>
                </li>

                <li>
                  <Link
                    href="/blog/"
                    className="text-[#F8F1E199] transition duration-500 ease-in-out hover:text-[#fff]"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-[#F8F1E11C] py-[25px] mt-[50px] md:mt-[80px] lg:mt-[140px]">
            <p className="text-[#F8F1E199]">
              © coaching. All Rights Reserved by{" "}
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

export default FooterTwo;
