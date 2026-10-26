"use client";

import React from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Image from "next/image";

import blogImg1 from "/public/images/blog-img4.jpg";
import blogImg2 from "/public/images/blog-img5.jpg";
import blogImg3 from "/public/images/blog-img6.jpg";
import blogImg4 from "/public/images/blog-img7.jpg";
import blogImg5 from "/public/images/blog-img8.jpg";
import blogImg6 from "/public/images/blog-img9.jpg";
import blogImg7 from "/public/images/blog-img10.jpg";
import blogImg8 from "/public/images/blog-img11.jpg";

const BlogList2Column: React.FC = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[140px]">
        <div className="container mx-auto">
          <div className="grid gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-[30px] lg:space-y-[50px]">
              <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div>
                  <Link href="/blog/blog-details" className="mb-[25px] block">
                    <Image src={blogImg1} alt="blog" />
                  </Link>

                  <h3 className="text-[20px] md:text-[22px] mb-[15px] leading-[1.2]">
                    <Link
                      href="/blog/blog-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8]"
                    >
                      Man Wearing Black Pullover Hoodie To Smoke Light In
                    </Link>
                  </h3>

                  <ul className="flex items-center space-x-[15px] sm:space-x-[20px] rtl:space-x-reverse">
                    <li className="text-[13px] sm:text-[15px] flex items-center">
                      <i className="ri-user-line text-[#717FF8] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
                      <Link href="#" className="hover:text-[#717FF8]">
                        William Smith
                      </Link>
                    </li>
                    <li className="text-[13px] sm:text-[15px] flex items-center">
                      <i className="ri-calendar-2-line text-[#717FF8] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
                      08 April 2023
                    </li>
                  </ul>
                </div>

                <div>
                  <Link href="/blog/blog-details" className="mb-[25px] block">
                    <Image src={blogImg2} alt="blog" />
                  </Link>

                  <h3 className="text-[20px] md:text-[22px] mb-[15px] leading-[1.2]">
                    <Link
                      href="/blog/blog-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8]"
                    >
                      How can you get best security in Citybank in American
                      experess
                    </Link>
                  </h3>

                  <ul className="flex items-center space-x-[15px] sm:space-x-[20px] rtl:space-x-reverse">
                    <li className="text-[13px] sm:text-[15px] flex items-center">
                      <i className="ri-user-line text-[#717FF8] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
                      <Link href="#" className="hover:text-[#717FF8]">
                        William Smith
                      </Link>
                    </li>
                    <li className="text-[13px] sm:text-[15px] flex items-center">
                      <i className="ri-calendar-2-line text-[#717FF8] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
                      09 April 2023
                    </li>
                  </ul>
                </div>

                <div>
                  <Link href="/blog/blog-details" className="mb-[25px] block">
                    <Image src={blogImg3} alt="blog" />
                  </Link>

                  <h3 className="text-[20px] md:text-[22px] mb-[15px] leading-[1.2]">
                    <Link
                      href="/blog/blog-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8]"
                    >
                      Top 12 best website for copywriting any site in the latest
                      version.
                    </Link>
                  </h3>

                  <ul className="flex items-center space-x-[15px] sm:space-x-[20px] rtl:space-x-reverse">
                    <li className="text-[13px] sm:text-[15px] flex items-center">
                      <i className="ri-user-line text-[#717FF8] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
                      <Link href="#" className="hover:text-[#717FF8]">
                        William Smith
                      </Link>
                    </li>
                    <li className="text-[13px] sm:text-[15px] flex items-center">
                      <i className="ri-calendar-2-line text-[#717FF8] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
                      10 April 2023
                    </li>
                  </ul>
                </div>

                <div>
                  <Link href="/blog/blog-details" className="mb-[25px] block">
                    <Image src={blogImg4} alt="blog" />
                  </Link>

                  <h3 className="text-[20px] md:text-[22px] mb-[15px] leading-[1.2]">
                    <Link
                      href="/blog/blog-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8]"
                    >
                      Ten Benefits Of Rentals That May Change Your Perspective
                      System Now.
                    </Link>
                  </h3>

                  <ul className="flex items-center space-x-[15px] sm:space-x-[20px] rtl:space-x-reverse">
                    <li className="text-[13px] sm:text-[15px] flex items-center">
                      <i className="ri-user-line text-[#717FF8] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
                      <Link href="#" className="hover:text-[#717FF8]">
                        William Smith
                      </Link>
                    </li>
                    <li className="text-[13px] sm:text-[15px] flex items-center">
                      <i className="ri-calendar-2-line text-[#717FF8] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
                      11 April 2023
                    </li>
                  </ul>
                </div>

                <div>
                  <Link href="/blog/blog-details" className="mb-[25px] block">
                    <Image src={blogImg5} alt="blog" />
                  </Link>

                  <h3 className="text-[20px] md:text-[22px] mb-[15px] leading-[1.2]">
                    <Link
                      href="/blog/blog-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8]"
                    >
                      Ten Benefits Of Rentals That May Change Your Perspective
                      System Now.
                    </Link>
                  </h3>

                  <ul className="flex items-center space-x-[15px] sm:space-x-[20px] rtl:space-x-reverse">
                    <li className="text-[13px] sm:text-[15px] flex items-center">
                      <i className="ri-user-line text-[#717FF8] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
                      <Link href="#" className="hover:text-[#717FF8]">
                        William Smith
                      </Link>
                    </li>
                    <li className="text-[13px] sm:text-[15px] flex items-center">
                      <i className="ri-calendar-2-line text-[#717FF8] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
                      12 April 2023
                    </li>
                  </ul>
                </div>

                <div>
                  <Link href="/blog/blog-details" className="mb-[25px] block">
                    <Image src={blogImg6} alt="blog" />
                  </Link>

                  <h3 className="text-[20px] md:text-[22px] mb-[15px] leading-[1.2]">
                    <Link
                      href="/blog/blog-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8]"
                    >
                      The template is developer-friendly, fast, lightweight,
                      clean, and contains W3 valid.
                    </Link>
                  </h3>

                  <ul className="flex items-center space-x-[15px] sm:space-x-[20px] rtl:space-x-reverse">
                    <li className="text-[13px] sm:text-[15px] flex items-center">
                      <i className="ri-user-line text-[#717FF8] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
                      <Link href="#" className="hover:text-[#717FF8]">
                        William Smith
                      </Link>
                    </li>
                    <li className="text-[13px] sm:text-[15px] flex items-center">
                      <i className="ri-calendar-2-line text-[#717FF8] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
                      13 April 2023
                    </li>
                  </ul>
                </div>

                <div>
                  <Link href="/blog/blog-details" className="mb-[25px] block">
                    <Image src={blogImg7} alt="blog" />
                  </Link>

                  <h3 className="text-[20px] md:text-[22px] mb-[15px] leading-[1.2]">
                    <Link
                      href="/blog/blog-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8]"
                    >
                      How can you get best security in Citybank in American
                      experess
                    </Link>
                  </h3>

                  <ul className="flex items-center space-x-[15px] sm:space-x-[20px] rtl:space-x-reverse">
                    <li className="text-[13px] sm:text-[15px] flex items-center">
                      <i className="ri-user-line text-[#717FF8] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
                      <Link href="#" className="hover:text-[#717FF8]">
                        William Smith
                      </Link>
                    </li>
                    <li className="text-[13px] sm:text-[15px] flex items-center">
                      <i className="ri-calendar-2-line text-[#717FF8] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
                      14 April 2023
                    </li>
                  </ul>
                </div>

                <div>
                  <Link href="/blog/blog-details" className="mb-[25px] block">
                    <Image src={blogImg8} alt="blog" />
                  </Link>

                  <h3 className="text-[20px] md:text-[22px] mb-[15px] leading-[1.2]">
                    <Link
                      href="/blog/blog-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8]"
                    >
                      Ten Benefits Of Rentals That May Change Your Perspective
                      System Now.
                    </Link>
                  </h3>

                  <ul className="flex items-center space-x-[15px] sm:space-x-[20px] rtl:space-x-reverse">
                    <li className="text-[13px] sm:text-[15px] flex items-center">
                      <i className="ri-user-line text-[#717FF8] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
                      <Link href="#" className="hover:text-[#717FF8]">
                        William Smith
                      </Link>
                    </li>
                    <li className="text-[13px] sm:text-[15px] flex items-center">
                      <i className="ri-calendar-2-line text-[#717FF8] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
                      15 April 2023
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pagination */}
              <nav aria-label="Page navigation example">
                <ul className="space-x-[5px] rtl:space-x-reverse">
                  <li className="inline-block">
                    <a
                      href="#"
                      className="flex items-center justify-center text-[14px] md:text-[16px] border border-[#051F0D] h-[36px] w-[40px] md:w-[55px] leading-tight rounded-[30px] font-semibold text-[##051F0D] hover:bg-[#717FF8] hover:border-[#717FF8] hover:text-[#fff]"
                    >
                      <i className="ri-arrow-left-line"></i>
                    </a>
                  </li>

                  <li className="inline-block">
                    <a
                      href="#"
                      className="flex items-center justify-center text-[14px] md:text-[16px] border border-[#051F0D] h-[36px] w-[40px] md:w-[55px] leading-tight rounded-[30px] font-semibold text-[##051F0D] hover:bg-[#717FF8] hover:border-[#717FF8] hover:text-[#fff]"
                    >
                      1
                    </a>
                  </li>

                  <li className="inline-block">
                    <a
                      href="#"
                      className="flex items-center justify-center text-[14px] md:text-[16px] border border-[#051F0D] h-[36px] w-[40px] md:w-[55px] leading-tight rounded-[30px] font-semibold text-[##051F0D] hover:bg-[#717FF8] hover:border-[#717FF8] hover:text-[#fff]"
                    >
                      2
                    </a>
                  </li>

                  <li className="inline-block">
                    <a
                      href="#"
                      className="flex items-center justify-center text-[14px] md:text-[16px] border border-[#051F0D] h-[36px] w-[40px] md:w-[55px] leading-tight rounded-[30px] font-semibold text-[##051F0D] hover:bg-[#717FF8] hover:border-[#717FF8] hover:text-[#fff]"
                    >
                      3
                    </a>
                  </li>

                  <li className="inline-block">
                    <a
                      href="#"
                      className="flex items-center justify-center text-[14px] md:text-[16px] border border-[#051F0D] h-[36px] w-[40px] md:w-[55px] leading-tight rounded-[30px] font-semibold text-[##051F0D] hover:bg-[#717FF8] hover:border-[#717FF8] hover:text-[#fff]"
                    >
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              {/* Sidebar */}
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList2Column;
