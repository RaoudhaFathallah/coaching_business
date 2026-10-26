"use client";

import React from "react";
import Image from "next/image";

import aboutMe from "/public/images/life-coach/about-me.jpg";
import aboutMe2 from "/public/images/life-coach/about-me2.jpg";

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[140px]">
        <div className="container mx-auto">
          <div className="grid gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            <div
              className="2xl:max-w-[550px] relative z-10 lg:mt-[50px]"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800" data-aos-once="true"
            >
              <h2 className="text-[30px] md:text-[35px] lg:text-[50px] xl:text-[80px] md:tracking-[-1.2px] leading-none mb-[15px] text-black">
                About me
              </h2>

              <p className="mb-[20px]">
                Learn about how them you went down prying the wedding ring off
                his cold, dead finger. I don’t know what you did, Fry, but once
                again, you screwed up! Now all the planets are gonna start
                cracking wise about our mamas.
              </p>

              <p className="mb-[20px]">
                Our personalized one-on-one coaching sessions provide you that
                dedicated time and attention to explore your goals.
              </p>

              <div className="relative mt-[30px] md:mt-[40px] lg:mt-[50px] xl:mt-[70px]">
                <div>
                  <h2 className="text-[#E6B325] font-bold text-[30px] md:text-[40px] lg:text-[50px] xl:text-[80px] leading-none">
                    2930+
                  </h2>
                  <p>My Customer Satisfied</p>
                </div>
              </div>
            </div>

            <div
              className="relative z-0 space-y-[20px] md:space-y-[40px]"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800" data-aos-once="true"
            >
              <Image src={aboutMe} alt="aboutMe" />

              <Image
                src={aboutMe2}
                alt="aboutMe"
                className="lg:absolute left-[-350px] rtl:left-0 rtl:right-[-350px] bottom-[-50px] lg:left-[-50px] rtl:lg:left-0 rtl:lg:right-[-50px] lg:bottom-[-50px] xl:left-[-350px] rtl:xl:left-0 rtl:xl:right-[-350px] xl:bottom-[-50px]"
              />

              <div className="relative bg-[#112240] px-[30px] py-[25px] font-semibold text-white text-[16px] xl:text-[20px] lg:max-w-[600px] ml-auto">
                “Learn about how them you went down prying the ring off his
                cold, his dead finger. I don’t know what you a did, Fry, but
                once again, you screwed up!”
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
