"use client";

import { withBasePath } from "@/lib/basePath";
import React from "react";
import Link from "next/link";
import Partner from "./Partner";
import Image from "next/image";

import heroImg from "/public/images/life-coach/hero-img.png";

const HeroBanner: React.FC = () => {
  return (
    <>
      <div
        className="pt-[50px] pb-[50px] md:pb-[0] bg-cover md:bg-bottom"
        style={{
          backgroundImage: `url(${withBasePath("/images/life-coach/hero-banner-bg.png")})`,
        }}
      >
        <div className="container mx-auto max-w-[1550px]">
          <div className="grid items-end gap-[30px] lg:gap-[50px] 2xl:gap-[0] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            {/* Hero Image */}
            <div className="relative md:pb-[50px]">
              <h1 
                className="text-stroke text-[30px] md:text-[30px] lg:text-[30px] xl:text-[30px] 2xl:text-[138px] text-white rotate-[-90deg] leading-none tracking-[-2.76px] absolute left-[-243px] rtl:left-auto rtl:right-[-243px] bottom-[300px] hidden 2xl:block"
              >
                Life Coach
              </h1>

              <div className="2xl:pl-[125px] rtl:2xl:pl-0 rtl:2xl:pr-[125px]">
                <Image
                  src={heroImg}
                  alt="Hero Image"
                  className="inline-block"
                  data-aos="fade-in"
                  data-aos-delay="100"
                  data-aos-duration="800" data-aos-once="true"
                />
              </div>
            </div>

            <div className="text-center md:text-start xl:pl-[30px] rtl:xl:pl-0 rtl:xl:pr-[30px] 2xl:pl-[100px] rtl:2xl:pl-0 rtl:2xl:pr-[100px]">
              <div className="md:mb-[70px] lg:mb-[100px] xl:mb-[150px]">
                <h4 
                  className="text-[#EDFFF5] text-[16px] border border-[#EDFFF547] inline-block font-semibold leading-none mb-[25px] px-[15px] pt-[14px] pb-[10px]"
                  data-aos="fade-in"
                  data-aos-delay="150"
                  data-aos-duration="800" data-aos-once="true"
                >
                  Don’t worry!! I am a Life Coach.
                </h4>

                <h1 
                  className="lc-hero-title text-[#EDFFF5] text-[35px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[120px] font-bold leading-[1.1] mb-[25px] mb:md-[40px] lg:mb-[40px]"
                  data-aos="fade-in"
                  data-aos-delay="200"
                  data-aos-duration="800" data-aos-once="true"
                >
                  Struggling In Your Life?
                </h1>

                <Link
                  href="/contact-us/"
                  className="bg-[#E6B325] text-black text-[16px] font-semibold inline-block py-[18px] px-[35px] leading-none transition duration-500 ease-in-out hover:bg-[#000] hover:text-[#fff]"
                  data-aos="fade-in"
                  data-aos-delay="250"
                  data-aos-duration="800" data-aos-once="true"
                >
                  Start For Free <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>

              {/* Partner */}
              <Partner />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
