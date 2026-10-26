"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const CurriculumContent: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState<boolean>(false);

  return (
    <>
      {/* Use here youtube Embed video link */}
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/dJlFmxiL11s?si=jWErMyFyMqBp0T7K",
        ]}
      />

      <div className="pt-[30px] space-y-[30px]">
        <div className="space-y-[15px]">
          <h2 className="font-bold text-[22px] md:text-[25px] leading-none">
            Curriculum
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="bg-[#E5FFEF] p-[20px] sm:p-[30px] space-y-[15px]">
          <div className="flex item-center justify-between border-b border-[#e3e3e3] pb-[10px] mb-[30px]">
            <h3 className="font-bold text-[22px] md:text-[25px] leading-none">
              Day 1
            </h3>
            <div className="font-bold text-[22px] md:text-[25px] leading-none">
              6
            </div>
          </div>

          <h4 className="font-semibold text-[20px] leading-[1.\2]">
            Health And Wellness Coaching
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <ul>
            <li className="sm:flex items-center justify-between border-b border-[#e3e3e3] pb-[10px] mb-[10px] last:pb-0 last:border-none last:mb-0 space-y-[10px] sm:space-y-[0]">
              <div className="font-medium text-[14px] md:text-[15px]">
                <i className="ri-video-line text-[20px] mr-1"></i> Introduction
              </div>

              <div className="flex items-center justify-between space-x-[15px] rtl:space-x-reverse">
                <div
                  className="bg-[#717FF8] text-[#fff] leading-none px-[15px] py-[5px] rounded-full text-[12px] md:text-[13px] cursor-pointer hover:bg-black"
                  onClick={() => setToggler(!toggler)}
                >
                  Preview
                </div>
                <p className="text-[12px] md:text-[14px]">2 Minutes</p>
              </div>
            </li>

            <li className="sm:flex items-center justify-between border-b border-[#e3e3e3] pb-[10px] mb-[10px] last:pb-0 last:border-none last:mb-0 space-y-[10px] sm:space-y-[0]">
              <div className="font-medium text-[14px] md:text-[15px]">
                <i className="ri-video-line text-[20px] mr-1"></i> Join The
                Discussion
              </div>

              <div className="flex items-center justify-between space-x-[15px] rtl:space-x-reverse">
                <div
                  className="bg-[#717FF8] text-[#fff] leading-none px-[15px] py-[5px] rounded-full text-[12px] md:text-[13px] cursor-pointer hover:bg-black"
                  onClick={() => setToggler(!toggler)}
                >
                  Preview
                </div>
                <p className="text-[12px] md:text-[14px]">1 Minute</p>
              </div>
            </li>

            <li className="sm:flex items-center justify-between border-b border-[#e3e3e3] pb-[10px] mb-[10px] last:pb-0 last:border-none last:mb-0 space-y-[10px] sm:space-y-[0]">
              <div className="font-medium text-[14px] md:text-[15px]">
                <i className="ri-video-line text-[20px] mr-1"></i> How To Get
                Your Certificate
              </div>

              <div className="flex items-center justify-between space-x-[15px] rtl:space-x-reverse">
                <div
                  className="bg-[#717FF8] text-[#fff] leading-none px-[15px] py-[5px] rounded-full text-[12px] md:text-[13px] cursor-pointer hover:bg-black"
                  onClick={() => setToggler(!toggler)}
                >
                  Preview
                </div>
                <p className="text-[12px] md:text-[14px]">1.5 Minutes</p>
              </div>
            </li>

            <li className="sm:flex items-center justify-between border-b border-[#e3e3e3] pb-[10px] mb-[10px] last:pb-0 last:border-none last:mb-0 space-y-[10px] sm:space-y-[0]">
              <div className="font-medium text-[14px] md:text-[15px]">
                <i className="ri-video-line text-[20px] mr-1"></i> Course FAQ
                (please read)
              </div>

              <div className="flex items-center justify-between space-x-[15px] rtl:space-x-reverse">
                <div
                  className="bg-[#cdc9c9] text-[#000] leading-none px-[5px] py-[5px] rounded-full text-[12px] md:text-[13px]"
                  onClick={() => setToggler(!toggler)}
                >
                  <i className="ri-lock-line"></i>
                </div>
                <p className="text-[12px] md:text-[14px]">5 Minutes</p>
              </div>
            </li>

            <li className="sm:flex items-center justify-between border-b border-[#e3e3e3] pb-[10px] mb-[10px] last:pb-0 last:border-none last:mb-0 space-y-[10px] sm:space-y-[0]">
              <div className="font-medium text-[14px] md:text-[15px]">
                <i className="ri-video-line text-[20px] mr-1"></i> Downloadable
                Resources
              </div>

              <div className="flex items-center justify-between space-x-[15px] rtl:space-x-reverse">
                <div
                  className="bg-[#cdc9c9] text-[#000] leading-none px-[5px] py-[5px] rounded-full text-[12px] md:text-[13px]"
                  onClick={() => setToggler(!toggler)}
                >
                  <i className="ri-lock-line"></i>
                </div>
                <p className="text-[12px] md:text-[14px]">1 Minute</p>
              </div>
            </li>

            <li className="sm:flex items-center justify-between border-b border-[#e3e3e3] pb-[10px] mb-[10px] last:pb-0 last:border-none last:mb-0 space-y-[10px] sm:space-y-[0]">
              <div className="font-medium text-[14px] md:text-[15px]">
                <i className="ri-video-line text-[20px] mr-1"></i> What does it
                mean to be healthy?
              </div>

              <div className="flex items-center justify-between space-x-[15px] rtl:space-x-reverse">
                <div
                  className="bg-[#cdc9c9] text-[#000] leading-none px-[5px] py-[5px] rounded-full text-[12px] md:text-[13px]"
                  onClick={() => setToggler(!toggler)}
                >
                  <i className="ri-lock-line"></i>
                </div>
                <p className="text-[12px] md:text-[14px]">12 Minutes</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-[#E5FFEF] p-[20px] sm:p-[30px] space-y-[15px]">
          <div className="flex item-center justify-between border-b border-[#e3e3e3] pb-[10px] mb-[30px]">
            <h3 className="font-bold text-[22px] md:text-[25px] leading-none">
              Day 2
            </h3>
            <div className="font-bold text-[22px] md:text-[25px] leading-none">
              6
            </div>
          </div>

          <h4 className="font-semibold text-[20px] leading-[1.\2]">
            Health And Wellness Coaching
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <ul>
            <li className="sm:flex items-center justify-between border-b border-[#e3e3e3] pb-[10px] mb-[10px] last:pb-0 last:border-none last:mb-0 space-y-[10px] sm:space-y-[0]">
              <div className="font-medium text-[14px] md:text-[15px]">
                <i className="ri-video-line text-[20px] mr-1"></i> Introduction
              </div>

              <div className="flex items-center justify-between space-x-[15px] rtl:space-x-reverse">
                <div
                  className="bg-[#717FF8] text-[#fff] leading-none px-[15px] py-[5px] rounded-full text-[12px] md:text-[13px] cursor-pointer hover:bg-black"
                  onClick={() => setToggler(!toggler)}
                >
                  Preview
                </div>
                <p className="text-[12px] md:text-[14px]">2 Minutes</p>
              </div>
            </li>

            <li className="sm:flex items-center justify-between border-b border-[#e3e3e3] pb-[10px] mb-[10px] last:pb-0 last:border-none last:mb-0 space-y-[10px] sm:space-y-[0]">
              <div className="font-medium text-[14px] md:text-[15px]">
                <i className="ri-video-line text-[20px] mr-1"></i> Join The
                Discussion
              </div>

              <div className="flex items-center justify-between space-x-[15px] rtl:space-x-reverse">
                <div
                  className="bg-[#717FF8] text-[#fff] leading-none px-[15px] py-[5px] rounded-full text-[12px] md:text-[13px] cursor-pointer hover:bg-black"
                  onClick={() => setToggler(!toggler)}
                >
                  Preview
                </div>
                <p className="text-[12px] md:text-[14px]">1 Minute</p>
              </div>
            </li>

            <li className="sm:flex items-center justify-between border-b border-[#e3e3e3] pb-[10px] mb-[10px] last:pb-0 last:border-none last:mb-0 space-y-[10px] sm:space-y-[0]">
              <div className="font-medium text-[14px] md:text-[15px]">
                <i className="ri-video-line text-[20px] mr-1"></i> How To Get
                Your Certificate
              </div>

              <div className="flex items-center justify-between space-x-[15px] rtl:space-x-reverse">
                <div
                  className="bg-[#717FF8] text-[#fff] leading-none px-[15px] py-[5px] rounded-full text-[12px] md:text-[13px] cursor-pointer hover:bg-black"
                  onClick={() => setToggler(!toggler)}
                >
                  Preview
                </div>
                <p className="text-[12px] md:text-[14px]">1.5 Minutes</p>
              </div>
            </li>

            <li className="sm:flex items-center justify-between border-b border-[#e3e3e3] pb-[10px] mb-[10px] last:pb-0 last:border-none last:mb-0 space-y-[10px] sm:space-y-[0]">
              <div className="font-medium text-[14px] md:text-[15px]">
                <i className="ri-video-line text-[20px] mr-1"></i> Course FAQ
                (please read)
              </div>

              <div className="flex items-center justify-between space-x-[15px] rtl:space-x-reverse">
                <div
                  className="bg-[#cdc9c9] text-[#000] leading-none px-[5px] py-[5px] rounded-full text-[12px] md:text-[13px]"
                  onClick={() => setToggler(!toggler)}
                >
                  <i className="ri-lock-line"></i>
                </div>
                <p className="text-[12px] md:text-[14px]">5 Minutes</p>
              </div>
            </li>

            <li className="sm:flex items-center justify-between border-b border-[#e3e3e3] pb-[10px] mb-[10px] last:pb-0 last:border-none last:mb-0 space-y-[10px] sm:space-y-[0]">
              <div className="font-medium text-[14px] md:text-[15px]">
                <i className="ri-video-line text-[20px] mr-1"></i> Downloadable
                Resources
              </div>

              <div className="flex items-center justify-between space-x-[15px] rtl:space-x-reverse">
                <div
                  className="bg-[#cdc9c9] text-[#000] leading-none px-[5px] py-[5px] rounded-full text-[12px] md:text-[13px]"
                  onClick={() => setToggler(!toggler)}
                >
                  <i className="ri-lock-line"></i>
                </div>
                <p className="text-[12px] md:text-[14px]">1 Minute</p>
              </div>
            </li>

            <li className="sm:flex items-center justify-between border-b border-[#e3e3e3] pb-[10px] mb-[10px] last:pb-0 last:border-none last:mb-0 space-y-[10px] sm:space-y-[0]">
              <div className="font-medium text-[14px] md:text-[15px]">
                <i className="ri-video-line text-[20px] mr-1"></i> What does it
                mean to be healthy?
              </div>

              <div className="flex items-center justify-between space-x-[15px] rtl:space-x-reverse">
                <div
                  className="bg-[#cdc9c9] text-[#000] leading-none px-[5px] py-[5px] rounded-full text-[12px] md:text-[13px]"
                  onClick={() => setToggler(!toggler)}
                >
                  <i className="ri-lock-line"></i>
                </div>
                <p className="text-[12px] md:text-[14px]">12 Minutes</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CurriculumContent;
