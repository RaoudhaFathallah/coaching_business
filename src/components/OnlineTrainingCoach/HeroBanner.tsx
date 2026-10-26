"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

import videoThumb from "/public/images/online-training-coach/video-thumb.jpg";
import playIcon from "/public/images/online-training-coach/play-icon.png";

const HeroBanner: React.FC = () => {
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
      
      <div
        className="pt-[50px] md:pt-[60px] lg:pt-[90px] bg-cover bg-bottom"
        style={{ backgroundImage: `url(/images/online-training-coach/banner-bg.png)` }}
      >
        <div className="container mx-auto max-w-[1570px]">
          <div className="md:flex items-center justify-between text-center md:text-left rtl:text-right space-y-[30px] md:space-y-[0] md:space-x-[50px] xl:space-x-[100px] rtl:space-x-reverse mb-[30px] md:mb-[40px] lg:mb-[70px]">
            <h1 
              className="text-[#F8F1E1] text-[35px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[104px] 2xl:tracking-[-5.6px] font-bold leading-[1.2] lg:leading-none"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800" data-aos-once="true"
            >
              Build Your Career With Coaching & Online Course
            </h1>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800" data-aos-once="true"
            >
              <Link
                href="/courses"
                className="bg-[#717FF8] text-[13px] md:text-[16px] h-[130px] md:h-[180px] w-[130px] md:w-[180px] pt-[45px] md:pt-[60px] rounded-full inline-block text-center text-white font-semibold transition duration-500 ease-in-out hover:bg-[#000]"
              >
                <i className="ri-arrow-right-up-line block"></i>
                View Courses
              </Link>
            </div>
          </div>

          <div 
            className="container mx-auto relative md:pl-[70px] rtl:md:pl-0 rtl:md:pr-[70px]"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800" data-aos-once="true"
          >
            <Image src={videoThumb} alt="videoThumb" className="inline-block" />

            <div
              className="cursor-pointer absolute left-0 rtl:left-auto rtl:right-0 bottom-[30px]"
              onClick={() => setToggler(!toggler)}
            >
              <Image src={playIcon} alt="playIcon" className="w-[60px] md:w-[140px] h-[60px] md:h-[140px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
