"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import user1 from "/public/images/user1.png";
import user2 from "/public/images/user2.png";
import user3 from "/public/images/user3.png";
import user4 from "/public/images/user4.png";
import user5 from "/public/images/user5.png";
import user6 from "/public/images/user6.png";

const FeedbackSliderThree: React.FC = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[140px] overflow-hidden">
        <div className="container mx-auto">
          <h1 className="text-[30px] sm:text-[60px] md:text-[70px] lg:text-[80px] sm:tracking-[-1.2px] leading-none mb-[30px] md:mb-[50px] lg:max-w-[727px] text-center mx-auto">
            Results, I helped my people
          </h1>
        </div>

        <div className="px-[15px] lg:px-[0]">
          <Swiper
            slidesPerView={1}
            spaceBetween={25}
            centeredSlides={true}
            grabCursor={true}
            pagination={pagination}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: true,
            }}
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
              1700: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="feedback-slider"
          >
            <SwiperSlide>
              <div className="bg-[#ffff] group border border-[#051F0D] p-[20px] md:p-[30px] lg:p-[50px] transition delay-100 duration-300 ease-in-out hover:bg-[#E6B325] hover:border-[#E6B325]">
                <div className="text-[#E6B325] text-[20px] mb-[15px] space-x-[5px] rtl:space-x-reverse group-hover:text-black">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>

                <p className="font-semibold text-[16px] transition delay-100 duration-300 ease-in-out group-hover:text-black">
                  Many stations repurpose their content in podcast episodes.
                  Offering a platform to listen to a down leas these podcast’s
                  can help reach a broader audience. Links to the station social
                  media profiles allow users to connect and interact in this
                  business website design.
                </p>

                <div className="flex items-center justify-between mt-[30px] md:mt-[40px] space-x-[15px] rtl:space-x-reverse">
                  <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
                    <Image
                      src={user1}
                      alt="user"
                      className="w-[58px] h-[58px] rounded-full"
                    />
                    <div>
                      <h3 className="text-[19px] leading-none transition delay-100 duration-300 ease-in-out group-hover:text-black">
                        Jekson Mendala
                      </h3>
                      <p className="text-[14px] transition delay-100 duration-300 ease-in-out group-hover:text-black">
                        Students
                      </p>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="45"
                      viewBox="0 0 46 45"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1_2643)">
                        <path
                          d="M0.853516 5.625V39.375L17.7546 22.5V5.625H0.853516Z"
                          fill="#051F0D"
                          className="group-hover:fill-[#23274A]"
                        />
                        <path
                          d="M29.022 5.625V39.375L45.923 22.5V5.625H29.022Z"
                          fill="#051F0D"
                          className="group-hover:fill-[#23274A]"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_2643">
                          <rect
                            width="45.0694"
                            height="45"
                            fill="white"
                            transform="translate(0.853516)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#ffff] group border border-[#051F0D] p-[20px] md:p-[30px] lg:p-[50px] transition delay-100 duration-300 ease-in-out hover:bg-[#E6B325] hover:border-[#E6B325]">
                <div className="text-[#E6B325] text-[20px] mb-[15px] space-x-[5px] rtl:space-x-reverse group-hover:text-black">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>

                <p className="font-semibold text-[16px] transition delay-100 duration-300 ease-in-out group-hover:text-black">
                  Many stations repurpose their content in podcast episodes.
                  Offering a platform to listen to a down leas these podcast’s
                  can help reach a broader audience. Links to the station social
                  media profiles allow users to connect and interact in this
                  business website design.
                </p>

                <div className="flex items-center justify-between mt-[30px] md:mt-[40px] space-x-[15px] rtl:space-x-reverse">
                  <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
                    <Image
                      src={user2}
                      alt="user"
                      className="w-[58px] h-[58px] rounded-full"
                    />
                    <div>
                      <h3 className="text-[19px] leading-none transition delay-100 duration-300 ease-in-out group-hover:text-black">
                        Mark Wookes
                      </h3>
                      <p className="text-[14px] transition delay-100 duration-300 ease-in-out group-hover:text-black">
                        Students
                      </p>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="45"
                      viewBox="0 0 46 45"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1_2643)">
                        <path
                          d="M0.853516 5.625V39.375L17.7546 22.5V5.625H0.853516Z"
                          fill="#051F0D"
                          className="group-hover:fill-[#23274A]"
                        />
                        <path
                          d="M29.022 5.625V39.375L45.923 22.5V5.625H29.022Z"
                          fill="#051F0D"
                          className="group-hover:fill-[#23274A]"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_2643">
                          <rect
                            width="45.0694"
                            height="45"
                            fill="white"
                            transform="translate(0.853516)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#ffff] group border border-[#051F0D] p-[20px] md:p-[30px] lg:p-[50px] transition delay-100 duration-300 ease-in-out hover:bg-[#E6B325] hover:border-[#E6B325]">
                <div className="text-[#E6B325] text-[20px] mb-[15px] space-x-[5px] rtl:space-x-reverse group-hover:text-black">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>

                <p className="font-semibold text-[16px] transition delay-100 duration-300 ease-in-out group-hover:text-black">
                  Many stations repurpose their content in podcast episodes.
                  Offering a platform to listen to a down leas these podcast’s
                  can help reach a broader audience. Links to the station social
                  media profiles allow users to connect and interact in this
                  business website design.
                </p>

                <div className="flex items-center justify-between mt-[30px] md:mt-[40px] space-x-[15px] rtl:space-x-reverse">
                  <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
                    <Image
                      src={user3}
                      alt="user"
                      className="w-[58px] h-[58px] rounded-full"
                    />
                    <div>
                      <h3 className="text-[19px] leading-none transition delay-100 duration-300 ease-in-out group-hover:text-black">
                        Samiul Azad
                      </h3>
                      <p className="text-[14px] transition delay-100 duration-300 ease-in-out group-hover:text-black">
                        Students
                      </p>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="45"
                      viewBox="0 0 46 45"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1_2643)">
                        <path
                          d="M0.853516 5.625V39.375L17.7546 22.5V5.625H0.853516Z"
                          fill="#051F0D"
                          className="group-hover:fill-[#23274A]"
                        />
                        <path
                          d="M29.022 5.625V39.375L45.923 22.5V5.625H29.022Z"
                          fill="#051F0D"
                          className="group-hover:fill-[#23274A]"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_2643">
                          <rect
                            width="45.0694"
                            height="45"
                            fill="white"
                            transform="translate(0.853516)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#ffff] group border border-[#051F0D] p-[20px] md:p-[30px] lg:p-[50px] transition delay-100 duration-300 ease-in-out hover:bg-[#E6B325] hover:border-[#E6B325]">
                <div className="text-[#E6B325] text-[20px] mb-[15px] space-x-[5px] rtl:space-x-reverse group-hover:text-black">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>

                <p className="font-semibold text-[16px] transition delay-100 duration-300 ease-in-out group-hover:text-black">
                  Many stations repurpose their content in podcast episodes.
                  Offering a platform to listen to a down leas these podcast’s
                  can help reach a broader audience. Links to the station social
                  media profiles allow users to connect and interact in this
                  business website design.
                </p>

                <div className="flex items-center justify-between mt-[30px] md:mt-[40px] space-x-[15px] rtl:space-x-reverse">
                  <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
                    <Image
                      src={user4}
                      alt="user"
                      className="w-[58px] h-[58px] rounded-full"
                    />
                    <div>
                      <h3 className="text-[19px] leading-none transition delay-100 duration-300 ease-in-out group-hover:text-black">
                        James
                      </h3>
                      <p className="text-[14px] transition delay-100 duration-300 ease-in-out group-hover:text-black">
                        Students
                      </p>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="45"
                      viewBox="0 0 46 45"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1_2643)">
                        <path
                          d="M0.853516 5.625V39.375L17.7546 22.5V5.625H0.853516Z"
                          fill="#051F0D"
                          className="group-hover:fill-[#23274A]"
                        />
                        <path
                          d="M29.022 5.625V39.375L45.923 22.5V5.625H29.022Z"
                          fill="#051F0D"
                          className="group-hover:fill-[#23274A]"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_2643">
                          <rect
                            width="45.0694"
                            height="45"
                            fill="white"
                            transform="translate(0.853516)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#ffff] group border border-[#051F0D] p-[20px] md:p-[30px] lg:p-[50px] transition delay-100 duration-300 ease-in-out hover:bg-[#E6B325] hover:border-[#E6B325]">
                <div className="text-[#E6B325] text-[20px] mb-[15px] space-x-[5px] rtl:space-x-reverse group-hover:text-black">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>

                <p className="font-semibold text-[16px] transition delay-100 duration-300 ease-in-out group-hover:text-black">
                  Many stations repurpose their content in podcast episodes.
                  Offering a platform to listen to a down leas these podcast’s
                  can help reach a broader audience. Links to the station social
                  media profiles allow users to connect and interact in this
                  business website design.
                </p>

                <div className="flex items-center justify-between mt-[30px] md:mt-[40px] space-x-[15px] rtl:space-x-reverse">
                  <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
                    <Image
                      src={user5}
                      alt="user"
                      className="w-[58px] h-[58px] rounded-full"
                    />
                    <div>
                      <h3 className="text-[19px] leading-none transition delay-100 duration-300 ease-in-out group-hover:text-black">
                        Thomas
                      </h3>
                      <p className="text-[14px] transition delay-100 duration-300 ease-in-out group-hover:text-black">
                        Students
                      </p>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="45"
                      viewBox="0 0 46 45"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1_2643)">
                        <path
                          d="M0.853516 5.625V39.375L17.7546 22.5V5.625H0.853516Z"
                          fill="#051F0D"
                          className="group-hover:fill-[#23274A]"
                        />
                        <path
                          d="M29.022 5.625V39.375L45.923 22.5V5.625H29.022Z"
                          fill="#051F0D"
                          className="group-hover:fill-[#23274A]"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_2643">
                          <rect
                            width="45.0694"
                            height="45"
                            fill="white"
                            transform="translate(0.853516)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#ffff] group border border-[#051F0D] p-[20px] md:p-[30px] lg:p-[50px] transition delay-100 duration-300 ease-in-out hover:bg-[#E6B325] hover:border-[#E6B325]">
                <div className="text-[#E6B325] text-[20px] mb-[15px] space-x-[5px] rtl:space-x-reverse group-hover:text-black">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>

                <p className="font-semibold text-[16px] transition delay-100 duration-300 ease-in-out group-hover:text-black">
                  Many stations repurpose their content in podcast episodes.
                  Offering a platform to listen to a down leas these podcast’s
                  can help reach a broader audience. Links to the station social
                  media profiles allow users to connect and interact in this
                  business website design.
                </p>

                <div className="flex items-center justify-between mt-[30px] md:mt-[40px] space-x-[15px] rtl:space-x-reverse">
                  <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
                    <Image
                      src={user6}
                      alt="user"
                      className="w-[58px] h-[58px] rounded-full"
                    />
                    <div>
                      <h3 className="text-[19px] leading-none transition delay-100 duration-300 ease-in-out group-hover:text-black">
                        William
                      </h3>
                      <p className="text-[14px] transition delay-100 duration-300 ease-in-out group-hover:text-black">
                        Students
                      </p>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="45"
                      viewBox="0 0 46 45"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1_2643)">
                        <path
                          d="M0.853516 5.625V39.375L17.7546 22.5V5.625H0.853516Z"
                          fill="#051F0D"
                          className="group-hover:fill-[#23274A]"
                        />
                        <path
                          d="M29.022 5.625V39.375L45.923 22.5V5.625H29.022Z"
                          fill="#051F0D"
                          className="group-hover:fill-[#23274A]"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_2643">
                          <rect
                            width="45.0694"
                            height="45"
                            fill="white"
                            transform="translate(0.853516)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
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

export default FeedbackSliderThree;
