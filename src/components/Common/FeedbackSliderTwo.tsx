"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCards } from "swiper/modules";
import Image from "next/image";

import user1 from "/public/images/user1.png";
import user2 from "/public/images/user2.png";
import user3 from "/public/images/user3.png";
import user4 from "/public/images/user4.png";
import user5 from "/public/images/user5.png";

const FeedbackSliderTwo: React.FC = () => {
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
          <div className="grid items-center gap-[30px] lg:gap-[50px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            <div>
              <h1 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] sm:tracking-[-1.2px] leading-none mb-[20px] md:mb-[40px]">
                I helped my students
              </h1>

              <p>
                Embark on a journey of growth and transformation with Coaching &
                Online Courses. Discover your true potential, overcome
                challenges, and reach new heights. Your success starts with.
              </p>

              <div className="flex item-center space-x-[20px] rtl:space-x-reverse mt-[30px] md:mt-[60px]">
                <div className="flex -space-x-2 rtl:space-x-reverse overflow-hidden">
                  <Image
                    src={user1}
                    alt="user"
                    className="inline-block h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] rounded-full ring-2 ring-white"
                  />
                  <Image
                    src={user2}
                    alt="user"
                    className="inline-block h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] rounded-full ring-2 ring-white"
                  />
                  <Image
                    src={user3}
                    alt="user"
                    className="inline-block h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] rounded-full ring-2 ring-white"
                  />
                  <Image
                    src={user4}
                    alt="user"
                    className="inline-block h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] rounded-full ring-2 ring-white"
                  />
                </div>

                <div>
                  <div className="text-[#051F0D] text-[20px] md:text-[26px] font-bold leading-none">
                    90859+
                  </div>
                  <p className="text-[15px]">
                    <i className="ri-star-fill text-[#E6B325] text-[18px]"></i>{" "}
                    5 Star Reviews
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Swiper
                effect={"cards"}
                slidesPerView={1}
                centeredSlides={true}
                grabCursor={true}
                pagination={pagination}
                autoplay={{
                  delay: 5000,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: true,
                }}
                modules={[Pagination, Autoplay, EffectCards]}
                className="feedback-slider"
              >
                <SwiperSlide>
                  <div className="bg-[#E9CB30] p-[30px] sm:p-[50px] md:p-[40px] lg:p-[50px]">
                    <div className="space-x-[3px] rtl:space-x-reverse mb-[20px]">
                      <i className="ri-star-fill text-black text-[20px]"></i>
                      <i className="ri-star-fill text-black text-[20px]"></i>
                      <i className="ri-star-fill text-black text-[20px]"></i>
                      <i className="ri-star-fill text-black text-[20px]"></i>
                      <i className="ri-star-fill text-black text-[20px]"></i>
                    </div>

                    <p className="font-semibold text-black">
                      Many stations repurpose their content in podcast episodes.
                      Offering a platform to listen to a down leas these
                      podcast’s can help reach a broader audience. Links to the
                      station social media profiles allow users to connect and
                      interact in this business website design.
                    </p>

                    <div className="flex items-center justify-between mt-[30px] md:mt-[40px] space-x-[15px] rtl:space-x-reverse">
                      <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
                        <Image
                          src={user1}
                          alt="user"
                          className="w-[58px] h-[58px] rounded-full"
                        />
                        <div>
                          <h3 className="text-[19px] leading-none">
                            John Smith
                          </h3>
                          <p className="text-[14px]">Digital Marketer</p>
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
                            />
                            <path
                              d="M29.022 5.625V39.375L45.923 22.5V5.625H29.022Z"
                              fill="#051F0D"
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
                  <div className="bg-[#E9CB30] p-[30px] sm:p-[50px] md:p-[40px] lg:p-[50px]">
                    <div className="space-x-[3px] rtl:space-x-reverse mb-[20px]">
                      <i className="ri-star-fill text-black text-[20px]"></i>
                      <i className="ri-star-fill text-black text-[20px]"></i>
                      <i className="ri-star-fill text-black text-[20px]"></i>
                      <i className="ri-star-fill text-black text-[20px]"></i>
                      <i className="ri-star-fill text-black text-[20px]"></i>
                    </div>

                    <p className="font-semibold text-black">
                      Many stations repurpose their content in podcast episodes.
                      Offering a platform to listen to a down leas these
                      podcast’s can help reach a broader audience. Links to the
                      station social media profiles allow users to connect and
                      interact in this business website design.
                    </p>

                    <div className="flex items-center justify-between mt-[30px] md:mt-[40px] space-x-[15px] rtl:space-x-reverse">
                      <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
                        <Image
                          src={user2}
                          alt="user"
                          className="w-[58px] h-[58px] rounded-full"
                        />
                        <div>
                          <h3 className="text-[19px] leading-none">James</h3>
                          <p className="text-[14px]">React Developer</p>
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
                            />
                            <path
                              d="M29.022 5.625V39.375L45.923 22.5V5.625H29.022Z"
                              fill="#051F0D"
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
                  <div className="bg-[#E9CB30] p-[30px] sm:p-[50px] md:p-[40px] lg:p-[50px]">
                    <div className="space-x-[3px] rtl:space-x-reverse mb-[20px]">
                      <i className="ri-star-fill text-black text-[20px]"></i>
                      <i className="ri-star-fill text-black text-[20px]"></i>
                      <i className="ri-star-fill text-black text-[20px]"></i>
                      <i className="ri-star-fill text-black text-[20px]"></i>
                      <i className="ri-star-fill text-black text-[20px]"></i>
                    </div>

                    <p className="font-semibold text-black">
                      Many stations repurpose their content in podcast episodes.
                      Offering a platform to listen to a down leas these
                      podcast’s can help reach a broader audience. Links to the
                      station social media profiles allow users to connect and
                      interact in this business website design.
                    </p>

                    <div className="flex items-center justify-between mt-[30px] md:mt-[40px] space-x-[15px] rtl:space-x-reverse">
                      <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
                        <Image
                          src={user3}
                          alt="user"
                          className="w-[58px] h-[58px] rounded-full"
                        />
                        <div>
                          <h3 className="text-[19px] leading-none">
                            John Oliver
                          </h3>
                          <p className="text-[14px]">Angular Developer</p>
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
                            />
                            <path
                              d="M29.022 5.625V39.375L45.923 22.5V5.625H29.022Z"
                              fill="#051F0D"
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
                  <div className="bg-[#E9CB30] p-[30px] sm:p-[50px] md:p-[40px] lg:p-[50px]">
                    <div className="space-x-[3px] rtl:space-x-reverse mb-[20px]">
                      <i className="ri-star-fill text-black text-[20px]"></i>
                      <i className="ri-star-fill text-black text-[20px]"></i>
                      <i className="ri-star-fill text-black text-[20px]"></i>
                      <i className="ri-star-fill text-black text-[20px]"></i>
                      <i className="ri-star-fill text-black text-[20px]"></i>
                    </div>

                    <p className="font-semibold text-black">
                      Many stations repurpose their content in podcast episodes.
                      Offering a platform to listen to a down leas these
                      podcast’s can help reach a broader audience. Links to the
                      station social media profiles allow users to connect and
                      interact in this business website design.
                    </p>

                    <div className="flex items-center justify-between mt-[30px] md:mt-[40px] space-x-[15px] rtl:space-x-reverse">
                      <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
                        <Image
                          src={user4}
                          alt="user"
                          className="w-[58px] h-[58px] rounded-full"
                        />
                        <div>
                          <h3 className="text-[19px] leading-none">
                            Thomas Smith
                          </h3>
                          <p className="text-[14px]">Web Developer</p>
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
                            />
                            <path
                              d="M29.022 5.625V39.375L45.923 22.5V5.625H29.022Z"
                              fill="#051F0D"
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
                  <div className="bg-[#E9CB30] p-[30px] sm:p-[50px] md:p-[40px] lg:p-[50px]">
                    <div className="space-x-[3px] rtl:space-x-reverse mb-[20px]">
                      <i className="ri-star-fill text-black text-[20px]"></i>
                      <i className="ri-star-fill text-black text-[20px]"></i>
                      <i className="ri-star-fill text-black text-[20px]"></i>
                      <i className="ri-star-fill text-black text-[20px]"></i>
                      <i className="ri-star-fill text-black text-[20px]"></i>
                    </div>

                    <p className="font-semibold text-black">
                      Many stations repurpose their content in podcast episodes.
                      Offering a platform to listen to a down leas these
                      podcast’s can help reach a broader audience. Links to the
                      station social media profiles allow users to connect and
                      interact in this business website design.
                    </p>

                    <div className="flex items-center justify-between mt-[30px] md:mt-[40px] space-x-[15px] rtl:space-x-reverse">
                      <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
                        <Image
                          src={user5}
                          alt="user"
                          className="w-[58px] h-[58px] rounded-full"
                        />
                        <div>
                          <h3 className="text-[19px] leading-none">
                            William Smith
                          </h3>
                          <p className="text-[14px]">QA Specialist</p>
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
                            />
                            <path
                              d="M29.022 5.625V39.375L45.923 22.5V5.625H29.022Z"
                              fill="#051F0D"
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
        </div>
      </div>
    </>
  );
};

export default FeedbackSliderTwo;
