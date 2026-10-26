"use client";

import React from "react";;
import Image from "next/image";

import user1 from "/public/images/user1.png";
import user2 from "/public/images/user2.png";
import user3 from "/public/images/user3.png";
import user4 from "/public/images/user4.png";
import user5 from "/public/images/user5.png";
import user6 from "/public/images/user6.png";

const FeedbackList: React.FC = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[140px]">
        <div className="container mx-auto">
          <div className="grid gap-[30px] lg:gap-[40px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            <div className="bg-[#ffff] group border border-[#051F0D] p-[20px] md:p-[30px] lg:p-[50px] transition delay-100 duration-300 ease-in-out hover:bg-[#717FF8] hover:border-[#717FF8]">
              <div className="text-[#E6B325] text-[20px] mb-[15px] space-x-[5px] rtl:space-x-reverse">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>

              <p className="font-semibold text-[15px] lg:text-[16px] transition delay-100 duration-300 ease-in-out group-hover:text-white">
                Many stations repurpose their content in podcast episodes.
                Offering a platform to listen to a down leas these podcast’s
                can help reach a broader audience. Links to the station social
                media profiles allow users to connect and interact in this
                business website design.
              </p>

              <div className="flex items-center justify-between mt-[30px] md:mt-[40px] space-x-[15px] rtl:space-x-reverse">
                <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
                  <Image
                    src={user1}
                    alt="user"
                    className="w-[58px] h-[58px] rounded-full"
                  />
                  <div>
                    <h3 className="text-[19px] leading-none transition delay-100 duration-300 ease-in-out group-hover:text-white">
                      Jekson Mendala
                    </h3>
                    <p className="text-[14px] transition delay-100 duration-300 ease-in-out group-hover:text-white">
                      Students
                    </p>
                  </div>
                </div>

                {/* Quote Icon */}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="45"
                    viewBox="0 0 46 45"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_2643)">
                      <path
                        d="M0.853516 5.625V39.375L17.7546 22.5V5.625H0.853516Z"
                        fill="#051F0D"
                        className="group-hover:fill-[#fff]"
                      />
                      <path
                        d="M29.022 5.625V39.375L45.923 22.5V5.625H29.022Z"
                        fill="#051F0D"
                        className="group-hover:fill-[#fff]"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2643">
                        <rect
                          width="45.0694"
                          height="45"
                          fill="white"
                          transform="translate(0.853516)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
        
            <div className="bg-[#ffff] group border border-[#051F0D] p-[20px] md:p-[30px] lg:p-[50px] transition delay-100 duration-300 ease-in-out hover:bg-[#717FF8] hover:border-[#717FF8]">
              <div className="text-[#E6B325] text-[20px] mb-[15px] space-x-[5px] rtl:space-x-reverse">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>

              <p className="font-semibold text-[15px] lg:text-[16px] transition delay-100 duration-300 ease-in-out group-hover:text-white">
                Many stations repurpose their content in podcast episodes.
                Offering a platform to listen to a down leas these podcast’s
                can help reach a broader audience. Links to the station social
                media profiles allow users to connect and interact in this
                business website design.
              </p>

              <div className="flex items-center justify-between mt-[30px] md:mt-[40px] space-x-[15px] rtl:space-x-reverse">
                <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
                  <Image
                    src={user2}
                    alt="user"
                    className="w-[58px] h-[58px] rounded-full"
                  />
                  <div>
                    <h3 className="text-[19px] leading-none transition delay-100 duration-300 ease-in-out group-hover:text-white">
                      Mark Wookes
                    </h3>
                    <p className="text-[14px] transition delay-100 duration-300 ease-in-out group-hover:text-white">
                      Students
                    </p>
                  </div>
                </div>

                {/* Quote Icon */}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="45"
                    viewBox="0 0 46 45"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_2643)">
                      <path
                        d="M0.853516 5.625V39.375L17.7546 22.5V5.625H0.853516Z"
                        fill="#051F0D"
                        className="group-hover:fill-[#fff]"
                      />
                      <path
                        d="M29.022 5.625V39.375L45.923 22.5V5.625H29.022Z"
                        fill="#051F0D"
                        className="group-hover:fill-[#fff]"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2643">
                        <rect
                          width="45.0694"
                          height="45"
                          fill="white"
                          transform="translate(0.853516)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
        
            <div className="bg-[#ffff] group border border-[#051F0D] p-[20px] md:p-[30px] lg:p-[50px] transition delay-100 duration-300 ease-in-out hover:bg-[#717FF8] hover:border-[#717FF8]">
              <div className="text-[#E6B325] text-[20px] mb-[15px] space-x-[5px] rtl:space-x-reverse">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>

              <p className="font-semibold text-[15px] lg:text-[16px] transition delay-100 duration-300 ease-in-out group-hover:text-white">
                Many stations repurpose their content in podcast episodes.
                Offering a platform to listen to a down leas these podcast’s
                can help reach a broader audience. Links to the station social
                media profiles allow users to connect and interact in this
                business website design.
              </p>

              <div className="flex items-center justify-between mt-[30px] md:mt-[40px] space-x-[15px] rtl:space-x-reverse">
                <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
                  <Image
                    src={user3}
                    alt="user"
                    className="w-[58px] h-[58px] rounded-full"
                  />
                  <div>
                    <h3 className="text-[19px] leading-none transition delay-100 duration-300 ease-in-out group-hover:text-white">
                      Samiul Azad
                    </h3>
                    <p className="text-[14px] transition delay-100 duration-300 ease-in-out group-hover:text-white">
                      Students
                    </p>
                  </div>
                </div>

                {/* Quote Icon */}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="45"
                    viewBox="0 0 46 45"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_2643)">
                      <path
                        d="M0.853516 5.625V39.375L17.7546 22.5V5.625H0.853516Z"
                        fill="#051F0D"
                        className="group-hover:fill-[#fff]"
                      />
                      <path
                        d="M29.022 5.625V39.375L45.923 22.5V5.625H29.022Z"
                        fill="#051F0D"
                        className="group-hover:fill-[#fff]"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2643">
                        <rect
                          width="45.0694"
                          height="45"
                          fill="white"
                          transform="translate(0.853516)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
        
            <div className="bg-[#ffff] group border border-[#051F0D] p-[20px] md:p-[30px] lg:p-[50px] transition delay-100 duration-300 ease-in-out hover:bg-[#717FF8] hover:border-[#717FF8]">
              <div className="text-[#E6B325] text-[20px] mb-[15px] space-x-[5px] rtl:space-x-reverse">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>

              <p className="font-semibold text-[15px] lg:text-[16px] transition delay-100 duration-300 ease-in-out group-hover:text-white">
                Many stations repurpose their content in podcast episodes.
                Offering a platform to listen to a down leas these podcast’s
                can help reach a broader audience. Links to the station social
                media profiles allow users to connect and interact in this
                business website design.
              </p>

              <div className="flex items-center justify-between mt-[30px] md:mt-[40px] space-x-[15px] rtl:space-x-reverse">
                <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
                  <Image
                    src={user4}
                    alt="user"
                    className="w-[58px] h-[58px] rounded-full"
                  />
                  <div>
                    <h3 className="text-[19px] leading-none transition delay-100 duration-300 ease-in-out group-hover:text-white">
                      James
                    </h3>
                    <p className="text-[14px] transition delay-100 duration-300 ease-in-out group-hover:text-white">
                      Students
                    </p>
                  </div>
                </div>

                {/* Quote Icon */}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="45"
                    viewBox="0 0 46 45"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_2643)">
                      <path
                        d="M0.853516 5.625V39.375L17.7546 22.5V5.625H0.853516Z"
                        fill="#051F0D"
                        className="group-hover:fill-[#fff]"
                      />
                      <path
                        d="M29.022 5.625V39.375L45.923 22.5V5.625H29.022Z"
                        fill="#051F0D"
                        className="group-hover:fill-[#fff]"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2643">
                        <rect
                          width="45.0694"
                          height="45"
                          fill="white"
                          transform="translate(0.853516)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
      
            <div className="bg-[#ffff] group border border-[#051F0D] p-[20px] md:p-[30px] lg:p-[50px] transition delay-100 duration-300 ease-in-out hover:bg-[#717FF8] hover:border-[#717FF8]">
              <div className="text-[#E6B325] text-[20px] mb-[15px] space-x-[5px] rtl:space-x-reverse">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>

              <p className="font-semibold text-[15px] lg:text-[16px] transition delay-100 duration-300 ease-in-out group-hover:text-white">
                Many stations repurpose their content in podcast episodes.
                Offering a platform to listen to a down leas these podcast’s
                can help reach a broader audience. Links to the station social
                media profiles allow users to connect and interact in this
                business website design.
              </p>

              <div className="flex items-center justify-between mt-[30px] md:mt-[40px] space-x-[15px] rtl:space-x-reverse">
                <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
                  <Image
                    src={user5}
                    alt="user"
                    className="w-[58px] h-[58px] rounded-full"
                  />
                  <div>
                    <h3 className="text-[19px] leading-none transition delay-100 duration-300 ease-in-out group-hover:text-white">
                      Thomas
                    </h3>
                    <p className="text-[14px] transition delay-100 duration-300 ease-in-out group-hover:text-white">
                      Students
                    </p>
                  </div>
                </div>

                {/* Quote Icon */}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="45"
                    viewBox="0 0 46 45"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_2643)">
                      <path
                        d="M0.853516 5.625V39.375L17.7546 22.5V5.625H0.853516Z"
                        fill="#051F0D"
                        className="group-hover:fill-[#fff]"
                      />
                      <path
                        d="M29.022 5.625V39.375L45.923 22.5V5.625H29.022Z"
                        fill="#051F0D"
                        className="group-hover:fill-[#fff]"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2643">
                        <rect
                          width="45.0694"
                          height="45"
                          fill="white"
                          transform="translate(0.853516)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
      
            <div className="bg-[#ffff] group border border-[#051F0D] p-[20px] md:p-[30px] lg:p-[50px] transition delay-100 duration-300 ease-in-out hover:bg-[#717FF8] hover:border-[#717FF8]">
              <div className="text-[#E6B325] text-[20px] mb-[15px] space-x-[5px] rtl:space-x-reverse">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>

              <p className="font-semibold text-[15px] lg:text-[16px] transition delay-100 duration-300 ease-in-out group-hover:text-white">
                Many stations repurpose their content in podcast episodes.
                Offering a platform to listen to a down leas these podcast’s
                can help reach a broader audience. Links to the station social
                media profiles allow users to connect and interact in this
                business website design.
              </p>

              <div className="flex items-center justify-between mt-[30px] md:mt-[40px] space-x-[15px] rtl:space-x-reverse">
                <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
                  <Image
                    src={user6}
                    alt="user"
                    className="w-[58px] h-[58px] rounded-full"
                  />
                  <div>
                    <h3 className="text-[19px] leading-none transition delay-100 duration-300 ease-in-out group-hover:text-white">
                      William
                    </h3>
                    <p className="text-[14px] transition delay-100 duration-300 ease-in-out group-hover:text-white">
                      Students
                    </p>
                  </div>
                </div>

                {/* Quote Icon */}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="45"
                    viewBox="0 0 46 45"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_2643)">
                      <path
                        d="M0.853516 5.625V39.375L17.7546 22.5V5.625H0.853516Z"
                        fill="#051F0D"
                        className="group-hover:fill-[#fff]"
                      />
                      <path
                        d="M29.022 5.625V39.375L45.923 22.5V5.625H29.022Z"
                        fill="#051F0D"
                        className="group-hover:fill-[#fff]"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2643">
                        <rect
                          width="45.0694"
                          height="45"
                          fill="white"
                          transform="translate(0.853516)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackList;
