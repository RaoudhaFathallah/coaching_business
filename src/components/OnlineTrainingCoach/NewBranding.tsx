"use client";

import React from "react";
import Image from "next/image";

import newBranding from "/public/images/online-training-coach/new-branding.jpg";

const NewBranding: React.FC = () => {
  return (
    <>
      <div className="container 2xl:p-0 2xl:max-w-[1920px] mx-auto overflow-hidden">
        <div className="relative 2xl:pt-[100px] 2xl:pl-[100px] rtl:2xl:pl-0 rtl:2xl:pr-[100px] 2xl:before:content-[''] 2xl:before:bg-[#051F0D] 2xl:before:absolute 2xl:before:top-0 2xl:before:left-0 rtl:2xl:before:left-auto rtl:2xl:before:right-0 2xl:before:w-[40%] 2xl:before:h-full">
          <div className="grid gap-[30px] md:gap-[40px] lg:gap-[30px] xl:gap-[60px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800" data-aos-once="true"
              className="relative"
            >
              <Image src={newBranding} alt="aboutMe" />
            </div>

            <div
              className="2xl:max-w-[580px] 2xl:pt-[50px]"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800" data-aos-once="true"
            >
              <h2 className="text-[30px] md:text-[40px] lg:text-[35px] xl:text-[50px] 2xl:text-[60px] md:tracking-[-1.2px] leading-none mb-[15px] text-black">
                New branding & technique that studied
              </h2>

              <p className="mb-[20px] text-[15px]">
                Our online courses cover a wide range of topics, from personal
                development and wellness to professional skills like
                leadership,
              </p>

              <p className="mb-[20px] text-[15px]">
                Our online courses cover a wide range of topics, from personal
                development and wellness to professional skills like
                leadership, communication, and for the entrepreneurship.
                Whatever your interests, we have a course for you.
              </p>

              <ul className="space-y-[10px]">
                <li className="headingFontFamily text-black font-bold text-[18px] xl:text-[22px]">
                  <span className="sm:mr-[10px]">01.</span> Comprehensive
                  Courses
                </li>

                <li className="headingFontFamily text-black font-bold text-[18px] xl:text-[22px]">
                  <span className="sm:mr-[10px]">02.</span> Expert Coaches And
                  Tailored Guidance
                </li>

                <li className="headingFontFamily text-black font-bold text-[18px] xl:text-[22px]">
                  <span className="sm:mr-[10px]">03.</span> Supportive
                  Community
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewBranding;
