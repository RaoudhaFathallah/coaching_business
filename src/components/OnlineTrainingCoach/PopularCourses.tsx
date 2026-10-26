"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import courseImg1 from "/public/images/online-training-coach/course-img1.jpg";
import courseImg2 from "/public/images/online-training-coach/course-img2.jpg";
import courseImg3 from "/public/images/online-training-coach/course-img3.jpg";
import courseImg4 from "/public/images/online-training-coach/course-img4.jpg";
import courseImg5 from "/public/images/online-training-coach/course-img5.jpg";
import courseImg6 from "/public/images/online-training-coach/course-img6.jpg";

const PopularCourses: React.FC = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[140px] overflow-hidden">
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
              <div className="bg-[#F8F1E1] relative group">
                <Link href="/courses/course-details">
                  <Image src={courseImg1} alt="course" />
                </Link>

                <div className="py-[25px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#051F0D] transition duration-500 ease-in-out group-hover:border-[#051F0D]">
                  <div className="text-[#E6B325] mb-[15px] space-x-1 rtl:space-x-reverse">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>

                  <h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[15px]">
                    <Link
                      href="/courses/course-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                    >
                      Nutrition: Build Your Perfect Diet And Meal Plan In Your
                      Life
                    </Link>
                  </h3>

                  <div className="flex items-center justify-between">
                    <ul className="space-x-[10px] lg:space-x-[20px] rtl:space-x-reverse">
                      <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                        <i className="ri-stack-fill text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                        Expert
                      </li>
                      <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                        <i className="ri-book-3-line text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                        27(Lessons)
                      </li>
                    </ul>

                    <div className="headingFontFamily primaryText font-semibold text-[16px] lg:text-[22px] leading-none">
                      <span className="discount-price line-through text-[13px] lg:text-[18px] mr-2 rtl:mr-0 rtl:ml-2">
                        $778
                      </span>{" "}
                      $678
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#F8F1E1] relative group">
                <Link href="/courses/course-details">
                  <Image src={courseImg2} alt="course" />
                </Link>

                <div className="py-[25px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#051F0D] transition duration-500 ease-in-out group-hover:border-[#051F0D]">
                  <div className="text-[#E6B325] mb-[15px] space-x-1 rtl:space-x-reverse">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>

                  <h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[15px]">
                    <Link
                      href="/courses/course-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                    >
                      Business: Grow Up Your Career To Learn Your Business Administrition.
                    </Link>
                  </h3>

                  <div className="flex items-center justify-between">
                    <ul className="space-x-[10px] lg:space-x-[20px] rtl:space-x-reverse">
                      <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                        <i className="ri-stack-fill text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                        Medium
                      </li>
                      <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                        <i className="ri-book-3-line text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                        38(Lessons)
                      </li>
                    </ul>

                    <div className="headingFontFamily primaryText font-semibold text-[16px] lg:text-[22px] leading-none">
                      $274
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#F8F1E1] relative group">
                <Link href="/courses/course-details">
                  <Image src={courseImg3} alt="course" />
                </Link>

                <div className="py-[25px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#051F0D] transition duration-500 ease-in-out group-hover:border-[#051F0D]">
                  <div className="text-[#E6B325] mb-[15px] space-x-1 rtl:space-x-reverse">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>

                  <h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[15px]">
                    <Link
                      href="/courses/course-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                    >
                      Marketing: The Digital Marketing Course For Your Next Generation Site
                    </Link>
                  </h3>

                  <div className="flex items-center justify-between">
                    <ul className="space-x-[10px] lg:space-x-[20px] rtl:space-x-reverse">
                      <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                        <i className="ri-stack-fill text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                        Beginner
                      </li>
                      <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                        <i className="ri-book-3-line text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                        33(Lessons)
                      </li>
                    </ul>

                    <div className="headingFontFamily primaryText font-semibold text-[16px] lg:text-[22px] leading-none">
                      $853
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#F8F1E1] relative group">
                <Link href="/courses/course-details">
                  <Image src={courseImg4} alt="course" />
                </Link>

                <div className="py-[25px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#051F0D] transition duration-500 ease-in-out group-hover:border-[#051F0D]">
                  <div className="text-[#E6B325] mb-[15px] space-x-1 rtl:space-x-reverse">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>

                  <h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[15px]">
                    <Link
                      href="/courses/course-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                    >
                      Design: The Design Career Life For Your Better Life In This Sector.
                    </Link>
                  </h3>

                  <div className="flex items-center justify-between">
                    <ul className="space-x-[10px] lg:space-x-[20px] rtl:space-x-reverse">
                      <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                        <i className="ri-stack-fill text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                        Beginner
                      </li>
                      <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                        <i className="ri-book-3-line text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                        28(Lessons)
                      </li>
                    </ul>

                    <div className="headingFontFamily primaryText font-semibold text-[16px] lg:text-[22px] leading-none">
                      $399
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#F8F1E1] relative group">
                <Link href="/courses/course-details">
                  <Image src={courseImg5} alt="course" />
                </Link>

                <div className="py-[25px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#051F0D] transition duration-500 ease-in-out group-hover:border-[#051F0D]">
                  <div className="text-[#E6B325] mb-[15px] space-x-1 rtl:space-x-reverse">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>

                  <h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[15px]">
                    <Link
                      href="/courses/course-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                    >
                      Business: Grow Up Your Career To Learn Your Business Administrition.
                    </Link>
                  </h3>

                  <div className="flex items-center justify-between">
                    <ul className="space-x-[10px] lg:space-x-[20px] rtl:space-x-reverse">
                      <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                        <i className="ri-stack-fill text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                        Medium
                      </li>
                      <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                        <i className="ri-book-3-line text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                        38(Lessons)
                      </li>
                    </ul>

                    <div className="headingFontFamily primaryText font-semibold text-[16px] lg:text-[22px] leading-none">
                      $274
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="bg-[#F8F1E1] relative group">
                <Link href="/courses/course-details">
                  <Image src={courseImg6} alt="course" />
                </Link>

                <div className="py-[25px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#051F0D] transition duration-500 ease-in-out group-hover:border-[#051F0D]">
                  <div className="text-[#E6B325] mb-[15px] space-x-1 rtl:space-x-reverse">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>

                  <h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[15px]">
                    <Link
                      href="/courses/course-details"
                      className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                    >
                      Nutrition: Build Your Perfect Diet And Meal Plan In Your
                      Life
                    </Link>
                  </h3>

                  <div className="flex items-center justify-between">
                    <ul className="space-x-[10px] lg:space-x-[20px] rtl:space-x-reverse">
                      <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                        <i className="ri-stack-fill text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                        Expert
                      </li>
                      <li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
                        <i className="ri-book-3-line text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
                        27(Lessons)
                      </li>
                    </ul>

                    <div className="headingFontFamily primaryText font-semibold text-[16px] lg:text-[22px] leading-none">
                      <span className="discount-price line-through text-[13px] lg:text-[18px] mr-2 rtl:mr-0 rtl:ml-2">
                        $778
                      </span>{" "}
                      $678
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
