"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import user1 from "/public/images/user1.png";
import user2 from "/public/images/user2.png";
import user3 from "/public/images/user3.png";

const ReviewsList: React.FC = () => {
  return (
    <>
      <div className="mb-[30px] md:mb-[40px] lg:mb-[70px]">
        <h2 className="text-black font-bold text-[20px] md:text-[22px] lg:text-[25px] mb-[20px] md:mb-[30px]">
          02 Reviews
        </h2>
        <ul className="space-y-[20px] md:space-y-[30px]">
          <li className="relative md:pl-[100px]">
            <Image
              src={user1}
              className="mb-[20px] md:mb-0 md:absolute md:left-0 w-[80px] h-[80px] md:top-0 rounded-full"
              alt="user"
            />
            <div className="relative space-y-[15px]">
              <h4 className="text-black font-bold text-[20px] leading-none">
                Jonathon Ronan
              </h4>
              <p className="text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                elementum tellus odio at enim arcu eget tristique sed. Tellus
                tellus ac orci id est faucibus mattis ultrices gravida.
              </p>
              <Link
                href="#"
                className="uppercase inline-block font-bold ease-in duration-300 text-[14px] hover:text-[#EF4335]"
              >
                Reply
              </Link>

              <div className="text-[#E6B325] text-[18px] space-x-[3px] rtl:space-x-reverse absolute top-[-15px] right-0 leading-none">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>

            <ul className="mt-[20px] md:mt-[30px] space-y-[20px] md:space-y-[30px]">
              <li className="relative ml-[20px] md:ml-0 md:pl-[100px]">
                <Image
                  src={user2}
                  className="mb-[20px] md:mb-0 md:absolute md:left-0 w-[80px] h-[80px] md:top-0 rounded-full"
                  alt="user"
                />
                <div className="relative space-y-[15px]">
                  <h4 className="text-black font-bold text-[20px] leading-none">
                    James Andy
                  </h4>
                  <p className="text-[15px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra elementum tellus odio at enim arcu eget tristique
                    sed. Tellus tellus ac orci id est faucibus mattis ultrices
                    gravida.
                  </p>
                  <Link
                    href="#"
                    className="uppercase inline-block font-bold ease-in duration-300 text-[14px] hover:text-[#EF4335]"
                  >
                    Reply
                  </Link>
                </div>
              </li>
            </ul>
          </li>

          <li className="relative md:pl-[100px]">
            <Image
              src={user3}
              className="mb-[20px] md:mb-0 md:absolute md:left-0 w-[80px] h-[80px] md:top-0 rounded-full"
              alt="user"
            />
            <div className="relative space-y-[15px]">
              <h4 className="text-black font-bold text-[20px] leading-none">
                Angela Carter
              </h4>
              <p className="text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                elementum tellus odio at enim arcu eget tristique sed. Tellus
                tellus ac orci id est faucibus mattis ultrices gravida.
              </p>
              <Link
                href="#"
                className="uppercase inline-block font-bold ease-in duration-300 text-[14px] hover:text-[#EF4335]"
              >
                Reply
              </Link>

              <div className="text-[#E6B325] text-[18px] space-x-[3px] rtl:space-x-reverse absolute top-[-15px] right-0 leading-none">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-line"></i>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ReviewsList;
