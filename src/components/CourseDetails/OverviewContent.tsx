"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import user1 from "/public/images/user3.png";
import PromoVideo from "./PromoVideo";

const OverviewContent: React.FC = () => {
  return (
    <>
      <div className="pt-[30px] space-y-[30px]">
        {/* Header */}
        <div>
          <ul className="mb-[20px] space-x-[10px] lg:space-x-[35px] rtl:space-x-reverse">
            <li className="inline-block text-[13px] lg:text-[17px] transition duration-500 ease-in-out group-hover:text-white">
              <div className="flex items-center space-x-[5px] rtl:space-x-reverse">
                <div className="text-[#E6B325] text-[15px] sm:text-[20px] space-x-[1px] rtl:space-x-reverse">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>
                <p className="relative top-[1px]">4.9 Reviews</p>
              </div>
            </li>
            <li className="inline-block text-[13px] lg:text-[17px] font-medium transition duration-500 ease-in-out group-hover:text-white">
              <i className="ri-stack-fill primaryText text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
              Medium
            </li>
            <li className="inline-block text-[13px] lg:text-[17px] font-medium transition duration-500 ease-in-out group-hover:text-white">
              <i className="ri-book-3-line primaryText text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
              65 Lessons
            </li>
            <li className="inline-block text-[13px] lg:text-[17px] font-medium transition duration-500 ease-in-out group-hover:text-white">
              <i className="ri-graduation-cap-line primaryText text-[17px] lg:text-[22px] mr-[5px] group-hover:text-white"></i>{" "}
              23 Students
            </li>
          </ul>

          <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
            <Image
              src={user1}
              alt="user"
              className="w-[40px] h-[40px] rounded-full"
            />
            <div>
              <h3 className="text-[17px] lg:text-[19px]">
                <Link
                  href="#"
                  className="transition duration-500 ease-in-out hover:text-[#717FF8] group-hover:text-white"
                >
                  Daimul Samiul
                </Link>
              </h3>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="details-content space-y-[20px]">
          <h1>
            Nutrition Plans: Our experienced nutritionists will create
            personalized.
          </h1>

          <p>
            Our online courses cover a wide range of topics, from personal
            development and wellness to professional skills like leadership,
            communication, and for the entrepreneurship Our online courses cover
            a wide range of topics, from person and wellness to professional
            skills like leadership.
          </p>

          <p>
            The goal of this course is to take you, you beautiful front end
            developer you, from someone with very little or no jQuery or
            JavaScript knowledge and up you to someone who is quite comfortable.
          </p>

          {/* PromoVideo */}
          <div className="py-[15px]">
            <PromoVideo />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt.
          </p>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>

        <div className="sm:flex items-center justify-between space-y-[20px] sm:space-y-[0]">
          <div>
            <button
              type="submit"
              className="bg-[#717FF8] text-[#fff] text-[16px] font-semibold inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[35px] leading-none border border-[#717FF8] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
            >
              Now Buy Course <i className="ri-arrow-right-up-line"></i>
            </button>
          </div>

          <div className="flex items-center space-x-[10px] rtl:space-x-reverse">
            <p className="text-black text-[16px] lg:text-[20px]">Share On:</p>

            <ul className="space-x-[10px] rtl:space-x-reverse">
              <li className="inline-block">
                <a
                  href="https://www.facebook.com/"
                  target="_black"
                  className="bg-[#051F0D1A] text-[#051F0D] inline-block w-[32px] h-[32px] leading-[32px] text-center rounded-full transition duration-500 ease-in-out hover:bg-[#051F0D] hover:text-[#fff]"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
              </li>

              <li className="inline-block">
                <a
                  href="https://www.twitter.com/"
                  target="_black"
                  className="bg-[#051F0D1A] text-[#051F0D] inline-block w-[32px] h-[32px] leading-[32px] text-center rounded-full transition duration-500 ease-in-out hover:bg-[#051F0D] hover:text-[#fff]"
                >
                  <i className="ri-twitter-fill"></i>
                </a>
              </li>

              <li className="inline-block">
                <a
                  href="https://www.linkedin.com/"
                  target="_black"
                  className="bg-[#051F0D1A] text-[#051F0D] inline-block w-[32px] h-[32px] leading-[32px] text-center rounded-full transition duration-500 ease-in-out hover:bg-[#051F0D] hover:text-[#fff]"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
              </li>

              <li className="inline-block">
                <a
                  href="https://www.instagram.com/"
                  target="_black"
                  className="bg-[#051F0D1A] text-[#051F0D] inline-block w-[32px] h-[32px] leading-[32px] text-center rounded-full transition duration-500 ease-in-out hover:bg-[#051F0D] hover:text-[#fff]"
                >
                  <i className="ri-instagram-fill"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewContent;
