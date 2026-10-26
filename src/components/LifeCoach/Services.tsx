"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import service1 from "/public/images/life-coach/service1.jpg";
import service2 from "/public/images/life-coach/service2.jpg";
import service3 from "/public/images/life-coach/service3.jpg";
import service4 from "/public/images/life-coach/service4.jpg";

const Services: React.FC = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <div className="pb-[50px] md:pb-[60px] lg:pb-[140px] overflow-hidden">
        <div className="px-[15px] 2xl:px-[0] relative overflow-hidden content-right-overflow">
          <h1 className="text-[30px] md:text-[50px] lg:text-[80px] sm:tracking-[-1.2px] leading-none mb-[30px] md:mb-[50px]">
            What I provide for people
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
            className="services-slider"
          >
            <SwiperSlide>
              <div className="relative group">
                <div className="relative pt-[20px] pl-[20px] before:content-[''] before:absolute before:left-0 before:top-0 before:bg-[#051F0D] before:w-[95%] before:h-[95%] group-hover:before:bg-[#E6B325]">
                  <Link href="/services/service-details" className="relative">
                    <Image src={service1} alt="service" />
                  </Link>
                </div>

                <div className="pl-[25px] pt-[25px]">
                  <h3 className="text-[20px] lg:text-[26px] leading-[1.3] mb-[10px]">
                    <Link
                      href="/services/service-details"
                      className="transition duration-500 ease-in-out hover:text-[#E6B325]"
                    >
                      Executive Coaching Sessions
                    </Link>
                  </h3>

                  <p className="mb-[25px]">
                    I want to come with you to Alderaan. There nothing for me
                    here now. I want to learn the ways of the Force.
                  </p>

                  <Link
                    href="/services/service-details"
                    className="text-black text-[14px] font-medium inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#23274A] transition duration-500 ease-in-out hover:bg-[#E6B325] hover:border-[#E6B325] hover:text-[#fff]"
                  >
                    More Details <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative group">
                <div className="relative pt-[20px] pl-[20px] before:content-[''] before:absolute before:left-0 before:top-0 before:bg-[#051F0D] before:w-[95%] before:h-[95%] group-hover:before:bg-[#E6B325]">
                  <Link href="/services/service-details" className="relative">
                    <Image src={service2} alt="service" />
                  </Link>
                </div>

                <div className="pl-[25px] pt-[25px]">
                  <h3 className="text-[20px] lg:text-[26px] leading-[1.3] mb-[10px]">
                    <Link
                      href="/services/service-details"
                      className="transition duration-500 ease-in-out hover:text-[#E6B325]"
                    >
                      Business Education In This Sector
                    </Link>
                  </h3>

                  <p className="mb-[25px]">
                    I want to come with you to Alderaan. There nothing for me
                    here now. I want to learn the ways of the Force.
                  </p>

                  <Link
                    href="/services/service-details"
                    className="text-black text-[14px] font-medium inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#23274A] transition duration-500 ease-in-out hover:bg-[#E6B325] hover:border-[#E6B325] hover:text-[#fff]"
                  >
                    More Details <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative group">
                <div className="relative pt-[20px] pl-[20px] before:content-[''] before:absolute before:left-0 before:top-0 before:bg-[#051F0D] before:w-[95%] before:h-[95%] group-hover:before:bg-[#E6B325]">
                  <Link href="/services/service-details" className="relative">
                    <Image src={service3} alt="service" />
                  </Link>
                </div>

                <div className="pl-[25px] pt-[25px]">
                  <h3 className="text-[20px] lg:text-[26px] leading-[1.3] mb-[10px]">
                    <Link
                      href="/services/service-details"
                      className="transition duration-500 ease-in-out hover:text-[#E6B325]"
                    >
                      Learn Sychologycal Science Sector
                    </Link>
                  </h3>

                  <p className="mb-[25px]">
                    I want to come with you to Alderaan. There nothing for me
                    here now. I want to learn the ways of the Force.
                  </p>

                  <Link
                    href="/services/service-details"
                    className="text-black text-[14px] font-medium inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#23274A] transition duration-500 ease-in-out hover:bg-[#E6B325] hover:border-[#E6B325] hover:text-[#fff]"
                  >
                    More Details <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative group">
                <div className="relative pt-[20px] pl-[20px] before:content-[''] before:absolute before:left-0 before:top-0 before:bg-[#051F0D] before:w-[95%] before:h-[95%] group-hover:before:bg-[#E6B325]">
                  <Link href="/services/service-details" className="relative">
                    <Image src={service4} alt="service" />
                  </Link>
                </div>

                <div className="pl-[25px] pt-[25px]">
                  <h3 className="text-[20px] lg:text-[26px] leading-[1.3] mb-[10px]">
                    <Link
                      href="/services/service-details"
                      className="transition duration-500 ease-in-out hover:text-[#E6B325]"
                    >
                      Learn Business Orientaton
                    </Link>
                  </h3>

                  <p className="mb-[25px]">
                    I want to come with you to Alderaan. There nothing for me
                    here now. I want to learn the ways of the Force.
                  </p>

                  <Link
                    href="/services/service-details"
                    className="text-black text-[14px] font-medium inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#23274A] transition duration-500 ease-in-out hover:bg-[#E6B325] hover:border-[#E6B325] hover:text-[#fff]"
                  >
                    More Details <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative group">
                <div className="relative pt-[20px] pl-[20px] before:content-[''] before:absolute before:left-0 before:top-0 before:bg-[#051F0D] before:w-[95%] before:h-[95%] group-hover:before:bg-[#E6B325]">
                  <Link href="/services/service-details" className="relative">
                    <Image src={service2} alt="service" />
                  </Link>
                </div>

                <div className="pl-[25px] pt-[25px]">
                  <h3 className="text-[20px] lg:text-[26px] leading-[1.3] mb-[10px]">
                    <Link
                      href="/services/service-details"
                      className="transition duration-500 ease-in-out hover:text-[#E6B325]"
                    >
                      Business Education In This Sector
                    </Link>
                  </h3>

                  <p className="mb-[25px]">
                    I want to come with you to Alderaan. There nothing for me
                    here now. I want to learn the ways of the Force.
                  </p>

                  <Link
                    href="/services/service-details"
                    className="text-black text-[14px] font-medium inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#23274A] transition duration-500 ease-in-out hover:bg-[#E6B325] hover:border-[#E6B325] hover:text-[#fff]"
                  >
                    More Details <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Services;
