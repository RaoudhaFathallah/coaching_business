"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import serviceImg1 from "/public/images/online-training-coach/service1.jpg";
import serviceLogo from "/public/images/online-training-coach/service-logo.png";
import shapeImg from "/public/images/online-training-coach/shape.png";

const Services: React.FC = () => {
  return (
    <>
      <div className="pb-[50px] md:pb-[60px] lg:pb-[140px]">
        <div className="container mx-auto">
          <div className="grid items-center gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mb-[30px] md:mb-[50px] text-center lg:text-left rtl:text-right">
            <div className="lg:col-span-2">
              <h1 className="text-[30px] md:text-[50px] lg:text-[60px] xl:text-[80px] leading-none">
                Proficient services for education
              </h1>
            </div>

            <div className="lg:text-end">
              <Link
                href="/services"
                className="text-black text-[16px] font-semibold inline-block py-[15px] sm:py-[18px] px-[20px] sm:px-[35px] leading-none border border-[#23274A] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:border-[#717FF8] hover:text-[#fff]"
              >
                All Services <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>
          </div>

          <div className="grid items-center gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative px-[25px] md:px-[40px] lg:px-[30px] xl:px-[40px] pt-[25px] md:pt-[40px] before:content[''] before:absolute before:bg-[#717FF8] before:left-0 before:top-0 before:w-full before:h-[75%]">
              <div className="relative">
                <h3 className="text-white font-semibold text-[20px] md:text-[25px] lg:text-[25px] xl:text-[30px] leading-[1.2] mb-[20px] md:mb-[30px]">
                  Digital Education Coaching Center And Mentoring
                </h3>

                <Image
                  src={serviceImg1}
                  alt="service"
                  className="mb-[30px] md:mb-[40px]"
                />

                <div className="rtl:text-right">
                  <Link
                    href="/services/service-details"
                    className="text-black text-[14px] font-medium inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#23274A] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:border-[#717FF8] hover:text-[#fff]"
                  >
                    Learn More <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[458px] lg:h-[435px] xl:h-[526px] bg-[#717FF8] px-[25px] md:px-[40px] lg:px-[30px] xl:px-[40px] py-[25px] md:py-[40px]">
              <Image
                src={serviceLogo}
                alt="serviceLogo"
                className="mb-[30px] md:mb-[40px] lg:mb-[50px]"
              />

              <h3 className="text-white font-semibold text-[20px] md:text-[25px] lg:text-[25px] xl:text-[30px] leading-[1.2] ">
                Business Solution For Your Busines Problem In This Sector
              </h3>

              <div className="rtl:text-right">
                <Link
                  href="/services/service-details"
                  className="text-white text-[14px] font-medium inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#fff] absolute left-[40px] rtl:left-auto rtl:right-[40px]  bottom-[40px] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
                >
                  Learn More <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>

              <Image
                src={shapeImg}
                alt="shape"
                className="absolute right-[46px] bottom-[100px]"
              />
            </div>

            <div
              className="relative h-[400px] md:h-[458px] lg:h-[435px] xl:h-[526px] px-[25px] md:px-[40px] lg:px-[30px] xl:px-[40px] py-[25px] md:py-[40px] bg-cover bg-center before:content[''] before:absolute before:bg-[#051F0DBF] before:top-0 before:left-0 before:w-full before:h-full"
              style={{
                backgroundImage: `url(/images/online-training-coach/service2.jpg)`,
              }}
            >
              <h3 className="relative text-white font-semibold text-[20px] md:text-[25px] lg:text-[25px] xl:text-[30px] leading-[1.2] ">
                Ask The Expert About Business Startups And Ideas
              </h3>
               
              <Link
                href="/services/service-details"
                className="text-white text-[14px] font-medium inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#fff] absolute left-[40px] rtl:left-auto rtl:right-[40px] bottom-[40px] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
              >
                Learn More <i className="ri-arrow-right-up-line"></i>
              </Link> 

              <Image
                src={shapeImg}
                alt="shape"
                className="absolute right-[46px] bottom-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
