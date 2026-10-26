"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import book from "/public/images/life-coach/book.png";

const Cta: React.FC = () => {
  return (
    <>
      <div className="bg-[#112240] py-[50px] md:py-[60px] lg:py-[140px]">
        <div className="container mx-auto">
          <div className="grid items-center gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <div 
              className="text-[#ffff]"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <h1 className="text-[30px] text-[#ffff] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[75px] sm:tracking-[-1.2px] leading-none mb-[20px] md:mb-[30px] lg:mb-[40px]">
                You can get self development course
              </h1>

              <p className="mb-[30px] md:mb-[40px] lg:mb-[50px]">
                Our online courses cover a wide range of topics, from personal
                development and wellness to professional skills like leadership,
                communication, and for the entrepreneurship
              </p>

              <Link
                href="/contact-us"
                className="bg-[#E6B325] text-black text-[14px] font-semibold inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#E6B325] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
              >
                Get Instant Access Now{" "}
                <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>

            <div 
              className="xl:pl-[50px] 2xl:pl-[100px]"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <Image src={book} alt="book" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
