"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

import about from "/public/images/life-coach/about1.jpg";
import about2 from "/public/images/life-coach/about2.jpg";
import playIcon from "/public/images/play-icon2.png";

const NewBranding: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState<boolean>(false);

  return (
    <>
      {/* Use here youtube Embed video link */}
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/c_-b_isI4vg?si=tB7KwQ64Vfa-_pF7",
        ]}
      />

      <div className="pt-[50px] md:pt-[60px] lg:pt-[140px]">
        <div className="container mx-auto">
          <div className="grid gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            <div 
              className="2xl:max-w-[550px] relative z-10" 
            >
              <h2 className="text-[30px] md:text-[35px] lg:text-[50px] xl:text-[68px] md:tracking-[-1.2px] leading-none mb-[20px] md:mb-[30px] lg:mb-[50px] text-black">
                New branding & tactics that studied to a growing sales
              </h2>

              <p className="mb-[25px] md:mb-[30px] lg:mb-[50px]">
                Our online courses cover a wide range of topics, from personal
                development and wellness to professional skills like leadership,
                communication, and for the entrepreneurship
              </p>

              <div className="relative flex items-center space-x-[20px] md:space-x-[30px] lg:space-x-[70px] rtl:space-x-reverse mb-[30px] md:mb-[30px] lg:mb-[50px]">
                <div>
                  <h2 className="text-black font-bold text-[30px] md:text-[40px] lg:text-[50px] xl:text-[80px] leading-none">
                    23+
                  </h2>
                  <p className="text-[13px] lg:text-[16px]">Years Experience</p>
                </div>

                <div>
                  <h2 className="text-black font-bold text-[30px] md:text-[40px] lg:text-[50px] xl:text-[80px] leading-none">
                    2930+
                  </h2>
                  <p className="text-[13px] lg:text-[16px]">
                    My Customer Satisfied
                  </p>
                </div>
              </div>

              <Link
                href="/about-us"
                className="bg-[#E6B325] text-black text-[14px] font-semibold inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#E6B325] transition duration-500 ease-in-out hover:bg-[#E6B325] hover:border-[#E6B325] hover:text-[#fff]"
              >
                More About Us <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>

            <div 
              className="relative z-0 space-y-[20px] md:space-y-[30px] lg:space-y-[40px] lg:pl-[50px] xl:pl-[100px]"
            >
              <ul className="lg:pl-[50px] space-y-[10px]">
                <li className="headingFontFamily text-black font-bold text-[18px] xl:text-[22px]">
                  <span className="sm:mr-[10px]">01.</span> Comprehensive
                  Courses
                </li>

                <li className="headingFontFamily text-black font-bold text-[18px] xl:text-[22px]">
                  <span className="sm:mr-[10px]">02.</span> Expert Coaches And
                  Tailored Guidance
                </li>

                <li className="headingFontFamily text-black font-bold text-[18px] xl:text-[22px]">
                  <span className="sm:mr-[10px]">03.</span> Supportive Community
                </li>
              </ul>

              <div className="relative">
                <Image src={about} alt="about" />

                <div
                  className="absolute top-[15px] lg:top-[30px] left-[15px] rtl:left-0 rtl:right-[15px] lg:left-[-60px] rtl:lg:left-0 rtl:lg:right-[-60px] cursor-pointer max-w-[80px] lg:max-w-[126px] z-10"
                  onClick={() => setToggler(!toggler)}
                >
                  <Image src={playIcon} alt="playIcon" />
                </div>

                <Image
                  src={about2}
                  alt="about"
                  className="md:absolute left-[-80px] rtl:left-0 rtl:right-[-80px] lg:left-[-120px] rtl:lg:left-0 rtl:lg:right-[-120px] xl:left-[-250px] rtl:xl:left-0 rtl:xl:right-[-250px] 2xl:left-[-300px] rtl:2xl:left-0 rtl:2xl:right-[-300px] bottom-[45px] md:bottom-[-20px] lg:bottom-[30px] xl:bottom-[45px] md:max-w-[250px] lg:max-w-[300px] xl:max-w-[350px] 2xl:max-w-[434px] z-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewBranding;
