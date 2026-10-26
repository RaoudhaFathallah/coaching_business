"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import courseImg1 from "/public/images/life-coach/course-img1.jpg";
import courseImg2 from "/public/images/life-coach/course-img2.jpg";
import courseImg3 from "/public/images/life-coach/course-img3.jpg";
import courseImg4 from "/public/images/life-coach/course-img4.jpg";

import user1 from "/public/images/user1.png";
import user2 from "/public/images/user2.png";
import user3 from "/public/images/user3.png";
import user4 from "/public/images/user4.png";
import user5 from "/public/images/user5.png";
import user6 from "/public/images/user6.png";

const PopularCourses: React.FC = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <div className="pt-[50px] md:pt-[60px] lg:pt-[140px] overflow-hidden">
        <div className="px-[15px] 2xl:px-[0] relative overflow-hidden content-right-overflow">
          <h1 className="text-[30px] md:text-[50px] lg:text-[80px] sm:tracking-[-1.2px] leading-none mb-[30px] md:mb-[50px]">
            View my popular courses
          </h1>

          <Swiper
            slidesPerView={1}
            spaceBetween={25}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: true,
            }}
            pagination={pagination}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
              1650: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="popular-courses"
          >
            <SwiperSlide>
              <div className="bg-[#ffff] relative group">
                <div className="relative">
                  <Link href="/courses/course-details">
                    <Image src={courseImg1} alt="course" />
                  </Link>

                  <div className="headingFontFamily absolute bottom-[20px] left-[20px] z-1 bg-[#E6B325] text-[#051F0D] font-semibold text-[16px] lg:text-[22px] pt-[14px] pb-[10px] px-[16px] leading-none">
                    <span className="discount-price line-through text-[13px] lg:text-[18px] mr-2 rtl:mr-0 rtl:ml-2">
                      $778.00
                    </span>{" "}
                    $678.00
                  </div>
                </div>

                <div className="bg-[#ffff] py-[30px] sm:py-[35px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#717FF8] transition duration-500 ease-in-out group-hover:border-[#717FF8]">
                  <h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[15px]">
                    <Link
                      href="/courses/course-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                    >
                      Nutrition: Build Your Perfect Diet And Meal Plan In Your
                      Life
                    </Link>
                  </h3>

                  <ul className="mb-[20px] space-x-[10px] lg:space-x-[20px] rtl:space-x-reverse">
                    <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-star-fill text-[#E6B325] text-[17px] lg:text-[22px] mr-[5px]"></i>{" "}
                      4.5
                    </li>
                    <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-stack-fill text-black text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                      Medium
                    </li>
                    <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-book-3-line text-black text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                      53(Lessons)
                    </li>
                  </ul>

                  <div className="flex items-center space-x-[15px] rtl:space-x-reverse border-t border-[#051F0D] transition duration-500 ease-in-out group-hover:border-[#ffff1C] pt-[25px]">
                    <Image
                      src={user1}
                      alt="user"
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <div>
                      <h3 className="text-[17px] lg:text-[19px]">
                        <Link
                          href="/instructor/"
                          className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                        >
                          Samuel Jonson
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#ffff] relative group">
                <div className="relative">
                  <Link href="/courses/course-details">
                    <Image src={courseImg2} alt="course" />
                  </Link>

                  <div className="headingFontFamily absolute bottom-[20px] left-[20px] z-1 bg-[#E6B325] text-[#051F0D] font-semibold text-[16px] lg:text-[22px] pt-[14px] pb-[10px] px-[16px] leading-none">
                    $678.00
                  </div>
                </div>

                <div className="bg-[#ffff] py-[30px] sm:py-[35px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#717FF8] transition duration-500 ease-in-out group-hover:border-[#717FF8]">
                  <h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[15px]">
                    <Link
                      href="/courses/course-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                    >
                      Sale: Career Business According People Towards For An
                      Personal Group
                    </Link>
                  </h3>

                  <ul className="mb-[20px] space-x-[10px] lg:space-x-[20px] rtl:space-x-reverse">
                    <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-star-fill text-[#E6B325] text-[17px] lg:text-[22px] mr-[5px]"></i>{" "}
                      4.5
                    </li>
                    <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-stack-fill text-black text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                      Medium
                    </li>
                    <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-book-3-line text-black text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                      50(Lessons)
                    </li>
                  </ul>

                  <div className="flex items-center space-x-[15px] rtl:space-x-reverse border-t border-[#051F0D] transition duration-500 ease-in-out group-hover:border-[#ffff1C] pt-[25px]">
                    <Image
                      src={user2}
                      alt="user"
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <div>
                      <h3 className="text-[17px] lg:text-[19px]">
                        <Link
                          href="/instructor/"
                          className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                        >
                          James Thomas
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#ffff] relative group">
                <div className="relative">
                  <Link href="/courses/course-details">
                    <Image src={courseImg3} alt="course" />
                  </Link>

                  <div className="headingFontFamily absolute bottom-[20px] left-[20px] z-1 bg-[#E6B325] text-[#051F0D] font-semibold text-[16px] lg:text-[22px] pt-[14px] pb-[10px] px-[16px] leading-none">
                    $242.00
                  </div>
                </div>

                <div className="bg-[#ffff] py-[30px] sm:py-[35px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#717FF8] transition duration-500 ease-in-out group-hover:border-[#717FF8]">
                  <h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[15px]">
                    <Link
                      href="/courses/course-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                    >
                      Mentality: Those People Has Mantality Problem, I Provide
                      Them Best.
                    </Link>
                  </h3>

                  <ul className="mb-[20px] space-x-[10px] lg:space-x-[20px] rtl:space-x-reverse">
                    <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-star-fill text-[#E6B325] text-[17px] lg:text-[22px] mr-[5px]"></i>{" "}
                      5.0
                    </li>
                    <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-stack-fill text-black text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                      Medium
                    </li>
                    <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-book-3-line text-black text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                      22(Lessons)
                    </li>
                  </ul>

                  <div className="flex items-center space-x-[15px] rtl:space-x-reverse border-t border-[#051F0D] transition duration-500 ease-in-out group-hover:border-[#ffff1C] pt-[25px]">
                    <Image
                      src={user3}
                      alt="user"
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <div>
                      <h3 className="text-[17px] lg:text-[19px]">
                        <Link
                          href="/instructor/"
                          className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                        >
                          Oliver Daniel
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#ffff] relative group">
                <div className="relative">
                  <Link href="/courses/course-details">
                    <Image src={courseImg4} alt="course" />
                  </Link>

                  <div className="headingFontFamily absolute bottom-[20px] left-[20px] z-1 bg-[#E6B325] text-[#051F0D] font-semibold text-[16px] lg:text-[22px] pt-[14px] pb-[10px] px-[16px] leading-none">
                    $778.00
                  </div>
                </div>

                <div className="bg-[#ffff] py-[30px] sm:py-[35px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#717FF8] transition duration-500 ease-in-out group-hover:border-[#717FF8]">
                  <h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[15px]">
                    <Link
                      href="/courses/course-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                    >
                      Education: Grow Your Perfect Diet And Meal Plan In Your
                      Life
                    </Link>
                  </h3>

                  <ul className="mb-[20px] space-x-[10px] lg:space-x-[20px] rtl:space-x-reverse">
                    <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-star-fill text-[#E6B325] text-[17px] lg:text-[22px] mr-[5px]"></i>{" "}
                      5.0
                    </li>
                    <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-stack-fill text-black text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                      Medium
                    </li>
                    <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-book-3-line text-black text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                      22(Lessons)
                    </li>
                  </ul>

                  <div className="flex items-center space-x-[15px] rtl:space-x-reverse border-t border-[#051F0D] transition duration-500 ease-in-out group-hover:border-[#ffff1C] pt-[25px]">
                    <Image
                      src={user4}
                      alt="user"
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <div>
                      <h3 className="text-[17px] lg:text-[19px]">
                        <Link
                          href="/instructor/"
                          className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                        >
                          Michael James
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#ffff] relative group">
                <div className="relative">
                  <Link href="/courses/course-details">
                    <Image src={courseImg2} alt="course" />
                  </Link>

                  <div className="headingFontFamily absolute bottom-[20px] left-[20px] z-1 bg-[#E6B325] text-[#051F0D] font-semibold text-[16px] lg:text-[22px] pt-[14px] pb-[10px] px-[16px] leading-none">
                    $678.00
                  </div>
                </div>

                <div className="bg-[#ffff] py-[30px] sm:py-[35px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#717FF8] transition duration-500 ease-in-out group-hover:border-[#717FF8]">
                  <h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[15px]">
                    <Link
                      href="/courses/course-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                    >
                      Sale: Career Business According People Towards For An
                      Personal Group
                    </Link>
                  </h3>

                  <ul className="mb-[20px] space-x-[10px] lg:space-x-[20px] rtl:space-x-reverse">
                    <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-star-fill text-[#E6B325] text-[17px] lg:text-[22px] mr-[5px]"></i>{" "}
                      4.5
                    </li>
                    <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-stack-fill text-black text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                      Medium
                    </li>
                    <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-book-3-line text-black text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                      50(Lessons)
                    </li>
                  </ul>

                  <div className="flex items-center space-x-[15px] rtl:space-x-reverse border-t border-[#051F0D] transition duration-500 ease-in-out group-hover:border-[#ffff1C] pt-[25px]">
                    <Image
                      src={user5}
                      alt="user"
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <div>
                      <h3 className="text-[17px] lg:text-[19px]">
                        <Link
                          href="/instructor/"
                          className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                        >
                          Charles Thomas
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#ffff] relative group">
                <div className="relative">
                  <Link href="/courses/course-details">
                    <Image src={courseImg4} alt="course" />
                  </Link>

                  <div className="headingFontFamily absolute bottom-[20px] left-[20px] z-1 bg-[#E6B325] text-[#051F0D] font-semibold text-[16px] lg:text-[22px] pt-[14px] pb-[10px] px-[16px] leading-none">
                    $778.00
                  </div>
                </div>

                <div className="bg-[#ffff] py-[30px] sm:py-[35px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#717FF8] transition duration-500 ease-in-out group-hover:border-[#717FF8]">
                  <h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[15px]">
                    <Link
                      href="/courses/course-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                    >
                      Education: Grow Your Perfect Diet And Meal Plan In Your
                      Life
                    </Link>
                  </h3>

                  <ul className="mb-[20px] space-x-[10px] lg:space-x-[20px] rtl:space-x-reverse">
                    <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-star-fill text-[#E6B325] text-[17px] lg:text-[22px] mr-[5px]"></i>{" "}
                      5.0
                    </li>
                    <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-stack-fill text-black text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                      Medium
                    </li>
                    <li className="inline-block text-[13px] lg:text-[16px] transition duration-500 ease-in-out group-hover:text-white">
                      <i className="ri-book-3-line text-black text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                      22(Lessons)
                    </li>
                  </ul>

                  <div className="flex items-center space-x-[15px] rtl:space-x-reverse border-t border-[#051F0D] transition duration-500 ease-in-out group-hover:border-[#ffff1C] pt-[25px]">
                    <Image
                      src={user6}
                      alt="user"
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <div>
                      <h3 className="text-[17px] lg:text-[19px]">
                        <Link
                          href="/instructor/"
                          className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                        >
                          David Joseph
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default PopularCourses;
