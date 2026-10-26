"use client";
  
import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import Image from "next/image";

import courseImg1 from "/public/images/course-img1.jpg";
import courseImg2 from "/public/images/course-img2.jpg";
import courseImg3 from "/public/images/course-img3.jpg";
import courseImg4 from "/public/images/course-img4.jpg";
import courseImg5 from "/public/images/course-img5.jpg";
import courseImg6 from "/public/images/course-img6.jpg";

import user1 from "/public/images/user8.png";

const Courses: React.FC = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[140px]">
        <div className="container mx-auto lg:max-w-[1150px]">
          {/* Nav */}
          <Nav />
 
          <div className="grid gap-[30px] lg:gap-[40px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            <div>
              <div className="bg-[#ffff] relative group">
                <Link href="/courses/course-details">
                  <Image src={courseImg1} alt="course" />
                </Link>

                <div className="headingFontFamily absolute top-[20px] left-[20px] z-1 primaryBg text-white font-semibold text-[16px] lg:text-[22px] pt-[14px] pb-[10px] px-[16px] leading-none">
                  <span className="discount-price line-through text-[13px] lg:text-[18px] mr-2 rtl:mr-0 rtl:ml-2">
                    $778.00
                  </span>{" "}
                  $678.00
                </div>

                <div className="bg-[#ffff] py-[30px] sm:py-[35px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#717FF8] transition duration-500 ease-in-out group-hover:border-[#717FF8]">
                  <ul className="mb-[20px] space-x-[10px] lg:space-x-[15px] rtl:space-x-reverse">
                    <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-star-fill text-[#E6B325] text-[18px] mr-[3px]"></i>{" "}
                      4.5
                    </li>
                    <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-stack-fill primaryText text-[18px] mr-[3px] group-hover:text-white"></i>{" "}
                      Medium
                    </li>
                    <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-book-3-line primaryText text-[18px] mr-[3px] group-hover:text-white"></i>{" "}
                      53(Lessons)
                    </li>
                  </ul>

                  <h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[20px]">
                    <Link
                      href="/courses/course-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                    >
                      Health Education: We provide you with the knowledge and
                      resources to make.
                    </Link>
                  </h3>

                  <div className="space-y-[15px] sm:space-y-[0] sm:flex items-center justify-between border-t border-[#051F0D] pt-[25px]">
                    <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
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
                            James John
                          </Link>
                        </h3>
                      </div>
                    </div>

                    <div className="space-x-[15px] rtl:space-x-reverse">
                      <button type="button" className="bg-[#54b4d3] text-white text-[13px] py-[5px] px-[15px] rounded-[5px] hover:bg-[#3790ad]">
                        Update
                      </button>
                      <button type="button" className="bg-[#dc4c64] text-white text-[13px] py-[5px] px-[15px] rounded-[5px] hover:bg-[#d1485f]">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#ffff] relative group">
                <Link href="/courses/course-details">
                  <Image src={courseImg2} alt="course" />
                </Link>

                <div className="headingFontFamily absolute top-[20px] left-[20px] z-1 primaryBg text-white font-semibold text-[16px] lg:text-[22px] pt-[14px] pb-[10px] px-[16px] leading-none">
                  $500.00
                </div>

                <div className="bg-[#ffff] py-[30px] sm:py-[35px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#717FF8] transition duration-500 ease-in-out group-hover:border-[#717FF8]">
                  <ul className="mb-[20px] space-x-[10px] lg:space-x-[15px] rtl:space-x-reverse">
                    <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-star-fill text-[#E6B325] text-[18px] mr-[3px]"></i>{" "}
                      4.5
                    </li>
                    <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-stack-fill primaryText text-[18px] mr-[3px] group-hover:text-white"></i>{" "}
                      Medium
                    </li>
                    <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-book-3-line primaryText text-[18px] mr-[3px] group-hover:text-white"></i>{" "}
                      53(Lessons)
                    </li>
                  </ul>

                  <h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[20px]">
                    <Link
                      href="/courses/course-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                    >
                      Health Education: We provide you with the knowledge and resources to make.
                    </Link>
                  </h3>

                  <div className="space-y-[15px] sm:space-y-[0] sm:flex items-center justify-between border-t border-[#051F0D] pt-[25px]">
                    <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
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
                            James John
                          </Link>
                        </h3>
                      </div>
                    </div>

                    <div className="space-x-[15px] rtl:space-x-reverse">
                      <button type="button" className="bg-[#54b4d3] text-white text-[13px] py-[5px] px-[15px] rounded-[5px] hover:bg-[#3790ad]">
                        Update
                      </button>
                      <button type="button" className="bg-[#dc4c64] text-white text-[13px] py-[5px] px-[15px] rounded-[5px] hover:bg-[#d1485f]">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#ffff] relative group">
                <Link href="/courses/course-details">
                  <Image src={courseImg3} alt="course" />
                </Link>

                <div className="headingFontFamily absolute top-[20px] left-[20px] z-1 primaryBg text-white font-semibold text-[16px] lg:text-[22px] pt-[14px] pb-[10px] px-[16px] leading-none">
                  $399.00
                </div>

                <div className="bg-[#ffff] py-[30px] sm:py-[35px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#717FF8] transition duration-500 ease-in-out group-hover:border-[#717FF8]">
                  <ul className="mb-[20px] space-x-[10px] lg:space-x-[15px] rtl:space-x-reverse">
                    <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-star-fill text-[#E6B325] text-[18px] mr-[3px]"></i>{" "}
                      4.5
                    </li>
                    <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-stack-fill primaryText text-[18px] mr-[3px] group-hover:text-white"></i>{" "}
                      Medium
                    </li>
                    <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-book-3-line primaryText text-[18px] mr-[3px] group-hover:text-white"></i>{" "}
                      53(Lessons)
                    </li>
                  </ul>

                  <h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[20px]">
                    <Link
                      href="/courses/course-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                    >
                      Nutrition Plans: Our experienced nutritionists will create personalized.
                    </Link>
                  </h3>

                  <div className="space-y-[15px] sm:space-y-[0] sm:flex items-center justify-between border-t border-[#051F0D] pt-[25px]">
                    <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
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
                            James John
                          </Link>
                        </h3>
                      </div>
                    </div>

                    <div className="space-x-[15px] rtl:space-x-reverse">
                      <button type="button" className="bg-[#54b4d3] text-white text-[13px] py-[5px] px-[15px] rounded-[5px] hover:bg-[#3790ad]">
                        Update
                      </button>
                      <button type="button" className="bg-[#dc4c64] text-white text-[13px] py-[5px] px-[15px] rounded-[5px] hover:bg-[#d1485f]">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#ffff] relative group">
                <Link href="/courses/course-details">
                  <Image src={courseImg4} alt="course" />
                </Link>

                <div className="headingFontFamily absolute top-[20px] left-[20px] z-1 primaryBg text-white font-semibold text-[16px] lg:text-[22px] pt-[14px] pb-[10px] px-[16px] leading-none">
                  $199.00
                </div>

                <div className="bg-[#ffff] py-[30px] sm:py-[35px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#717FF8] transition duration-500 ease-in-out group-hover:border-[#717FF8]">
                  <ul className="mb-[20px] space-x-[10px] lg:space-x-[15px] rtl:space-x-reverse">
                    <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-star-fill text-[#E6B325] text-[18px] mr-[3px]"></i>{" "}
                      4.5
                    </li>
                    <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-stack-fill primaryText text-[18px] mr-[3px] group-hover:text-white"></i>{" "}
                      Medium
                    </li>
                    <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-book-3-line primaryText text-[18px] mr-[3px] group-hover:text-white"></i>{" "}
                      53(Lessons)
                    </li>
                  </ul>

                  <h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[20px]">
                    <Link
                      href="/courses/course-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                    >
                      Health Assessments: We begin by conducting a comprehensive .
                    </Link>
                  </h3>

                  <div className="space-y-[15px] sm:space-y-[0] sm:flex items-center justify-between border-t border-[#051F0D] pt-[25px]">
                    <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
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
                            James John
                          </Link>
                        </h3>
                      </div>
                    </div>

                    <div className="space-x-[15px] rtl:space-x-reverse">
                      <button type="button" className="bg-[#54b4d3] text-white text-[13px] py-[5px] px-[15px] rounded-[5px] hover:bg-[#3790ad]">
                        Update
                      </button>
                      <button type="button" className="bg-[#dc4c64] text-white text-[13px] py-[5px] px-[15px] rounded-[5px] hover:bg-[#d1485f]">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#ffff] relative group">
                <Link href="/courses/course-details">
                  <Image src={courseImg5} alt="course" />
                </Link>

                <div className="headingFontFamily absolute top-[20px] left-[20px] z-1 primaryBg text-white font-semibold text-[16px] lg:text-[22px] pt-[14px] pb-[10px] px-[16px] leading-none">
                  $159.00
                </div>

                <div className="bg-[#ffff] py-[30px] sm:py-[35px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#717FF8] transition duration-500 ease-in-out group-hover:border-[#717FF8]">
                  <ul className="mb-[20px] space-x-[10px] lg:space-x-[15px] rtl:space-x-reverse">
                    <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-star-fill text-[#E6B325] text-[18px] mr-[3px]"></i>{" "}
                      4.5
                    </li>
                    <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-stack-fill primaryText text-[18px] mr-[3px] group-hover:text-white"></i>{" "}
                      Medium
                    </li>
                    <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-book-3-line primaryText text-[18px] mr-[3px] group-hover:text-white"></i>{" "}
                      53(Lessons)
                    </li>
                  </ul>

                  <h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[20px]">
                    <Link
                      href="/courses/course-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                    >
                      Hand Shape: career business according people towards For an this
                    </Link>
                  </h3>

                  <div className="space-y-[15px] sm:space-y-[0] sm:flex items-center justify-between border-t border-[#051F0D] pt-[25px]">
                    <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
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
                            James John
                          </Link>
                        </h3>
                      </div>
                    </div>

                    <div className="space-x-[15px] rtl:space-x-reverse">
                      <button type="button" className="bg-[#54b4d3] text-white text-[13px] py-[5px] px-[15px] rounded-[5px] hover:bg-[#3790ad]">
                        Update
                      </button>
                      <button type="button" className="bg-[#dc4c64] text-white text-[13px] py-[5px] px-[15px] rounded-[5px] hover:bg-[#d1485f]">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#ffff] relative group">
                <Link href="/courses/course-details">
                  <Image src={courseImg6} alt="course" />
                </Link>

                <div className="headingFontFamily absolute top-[20px] left-[20px] z-1 primaryBg text-white font-semibold text-[16px] lg:text-[22px] pt-[14px] pb-[10px] px-[16px] leading-none">
                  $159.00
                </div>

                <div className="bg-[#ffff] py-[30px] sm:py-[35px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#717FF8] transition duration-500 ease-in-out group-hover:border-[#717FF8]">
                  <ul className="mb-[20px] space-x-[10px] lg:space-x-[15px] rtl:space-x-reverse">
                    <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-star-fill text-[#E6B325] text-[18px] mr-[3px]"></i>{" "}
                      4.5
                    </li>
                    <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-stack-fill primaryText text-[18px] mr-[3px] group-hover:text-white"></i>{" "}
                      Medium
                    </li>
                    <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-book-3-line primaryText text-[18px] mr-[3px] group-hover:text-white"></i>{" "}
                      53(Lessons)
                    </li>
                  </ul>

                  <h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[20px]">
                    <Link
                      href="/courses/course-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                    >
                      Health Education: We provide you with the knowledge and resources to make.
                    </Link>
                  </h3>

                  <div className="space-y-[15px] sm:space-y-[0] sm:flex items-center justify-between border-t border-[#051F0D] pt-[25px]">
                    <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
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
                            James John
                          </Link>
                        </h3>
                      </div>
                    </div>

                    <div className="space-x-[15px] rtl:space-x-reverse">
                      <button type="button" className="bg-[#54b4d3] text-white text-[13px] py-[5px] px-[15px] rounded-[5px] hover:bg-[#3790ad]">
                        Update
                      </button>
                      <button type="button" className="bg-[#dc4c64] text-white text-[13px] py-[5px] px-[15px] rounded-[5px] hover:bg-[#d1485f]">
                        Delete
                      </button>
                    </div>
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

export default Courses;