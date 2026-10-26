"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import courseImg1 from "/public/images/course-img1.jpg";
import courseImg2 from "/public/images/course-img2.jpg";
import courseImg3 from "/public/images/course-img3.jpg";

import user1 from "/public/images/user1.png";
import user2 from "/public/images/user2.png";
import user3 from "/public/images/user3.png";

const RelatedCourses: React.FC = () => {
  return (
    <>
      <div className="pb-[50px] md:pb-[60px] lg:pb-[140px]">
        <div className="container mx-auto">
          <h2 className="text-black text-[25px] md:text-[30px] lg:text-[40px] xl:text-[42px] mb-[30px] leading-none">Related Courses</h2>

          <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
            <div className="relative group">
              <Link href="#">
                <Image src={courseImg1} alt="course" />
              </Link>

              <div className="headingFontFamily absolute top-[20px] left-[20px] z-1 primaryBg text-white font-semibold text-[16px] lg:text-[22px] pt-[14px] pb-[10px] px-[16px] leading-none">
                <span className="discount-price line-through text-[13px] lg:text-[18px] mr-2 rtl:mr-0 rtl:ml-2">
                  $778.00
                </span>{" "}
                $678.00
              </div>

              <div className="bg-[#ffff] py-[30px] sm:py-[35px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#717FF8] transition duration-500 ease-in-out group-hover:border-[#717FF8]">
                <ul className="mb-[20px] space-x-[10px] lg:space-x-[20px] rtl:space-x-reverse">
                  <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                    <i className="ri-star-fill text-[#E6B325] text-[17px] lg:text-[22px] mr-[5px]"></i>{" "}
                    4.5
                  </li>
                  <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                    <i className="ri-stack-fill primaryText text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                    Medium
                  </li>
                  <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                    <i className="ri-book-3-line primaryText text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                    53(Lessons)
                  </li>
                </ul>

                <h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[20px]">
                  <Link
                    href="#"
                    className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                  >
                    Hand Shape: career business according people towards For an
                    this
                  </Link>
                </h3>

                <div className="flex items-center space-x-[15px] rtl:space-x-reverse border-t border-[#051F0D] pt-[25px]">
                  <Image
                    src={user1}
                    alt="user"
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div>
                    <h3 className="text-[17px] lg:text-[19px]">
                      <Link
                        href="#"
                        className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                      >
                        Samuel Jonson
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Link href="#">
                <Image src={courseImg2} alt="course" />
              </Link>

              <div className="headingFontFamily absolute top-[20px] left-[20px] z-1 primaryBg text-white font-semibold text-[16px] lg:text-[22px] pt-[14px] pb-[10px] px-[16px] leading-none">
                $500.00
              </div>

              <div className="bg-[#ffff] py-[30px] sm:py-[35px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#717FF8] transition duration-500 ease-in-out group-hover:border-[#717FF8]">
                <ul className="mb-[20px] space-x-[10px] lg:space-x-[20px] rtl:space-x-reverse">
                  <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                    <i className="ri-star-fill text-[#E6B325] text-[17px] lg:text-[22px] mr-[5px]"></i>{" "}
                    4.0
                  </li>
                  <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                    <i className="ri-stack-fill primaryText text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                    Medium
                  </li>
                  <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                    <i className="ri-book-3-line primaryText text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                    50(Lessons)
                  </li>
                </ul>

                <h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[20px]">
                  <Link
                    href="#"
                    className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                  >
                    Health Education We provide you with the knowledge and
                    resources to make.
                  </Link>
                </h3>

                <div className="flex items-center space-x-[15px] rtl:space-x-reverse border-t border-[#051F0D] pt-[25px]">
                  <Image
                    src={user2}
                    alt="user"
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div>
                    <h3 className="text-[17px] lg:text-[19px]">
                      <Link
                        href="#"
                        className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                      >
                        William Jenson
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Link href="#">
                <Image src={courseImg3} alt="course" />
              </Link>

              <div className="headingFontFamily absolute top-[20px] left-[20px] z-1 primaryBg text-white font-semibold text-[16px] lg:text-[22px] pt-[14px] pb-[10px] px-[16px] leading-none">
                $399.00
              </div>

              <div className="bg-[#ffff] py-[30px] sm:py-[35px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#717FF8] transition duration-500 ease-in-out group-hover:border-[#717FF8]">
                <ul className="mb-[20px] space-x-[10px] lg:space-x-[20px] rtl:space-x-reverse">
                  <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                    <i className="ri-star-fill text-[#E6B325] text-[17px] lg:text-[22px] mr-[5px]"></i>{" "}
                    4.9
                  </li>
                  <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                    <i className="ri-stack-fill primaryText text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                    Medium
                  </li>
                  <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                    <i className="ri-book-3-line primaryText text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                    65(Lessons)
                  </li>
                </ul>

                <h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[20px]">
                  <Link
                    href="#"
                    className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                  >
                    Nutrition Plans: Our experienced nutritionists will create
                    personalized.
                  </Link>
                </h3>

                <div className="flex items-center space-x-[15px] rtl:space-x-reverse border-t border-[#051F0D] pt-[25px]">
                  <Image
                    src={user3}
                    alt="user"
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div>
                    <h3 className="text-[17px] lg:text-[19px]">
                      <Link
                        href="#"
                        className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                      >
                        Daimul Samiul
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedCourses;
