"use client";

import React, { useState } from "react";
import ProductDescription from "./ProductDescription";
import Reviews from "./Reviews";
import Image from "next/image";

import product1 from "/public/images/product3.png";

const ShopDetailsContent: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Tab
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[140px]">
        <div className="container mx-auto">
          <div className="grid items-center gap-[30px] lg:gap-[40px] xl:gap-[30px] 2xl:gap-[100px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2">
            <div className="bg-[#E5FFEF] p-[30px] lg:p-[50px]">
              <Image src={product1} alt="product" />
            </div>

            <div className="space-y-[15px]">
              <div className="flex items-center space-x-[10px] rtl:space-x-reverse">
                <div className="text-[#E6B325] text-[18px] space-x-[3px] rtl:space-x-reverse">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <div>
                  <p className="text-[14px]">02 Reviews</p>
                </div>
              </div>

              <h2 className="text-black text-[26px] md:text-[35px] lg:text-[35px] xl:text-[48px] leading-[1.1]">
                Abstract Roll Gloves
              </h2>

              <p>
                Our online courses cover a wide range of topics, from personal
                development and wellness to professional skills like leadership,
                communication, and for the entrepreneurship Our online courses
              </p>

              <p>
                This story, dazzling in its powerful simplicity and
                soul-stirring wisdom, is about an Andalusian shepherd boy named
                Santiago who travels.
              </p>

              <ul className="space-y-[10px]">
                <li>
                  <span className="font-semibold inline-block w-[150px]">
                    SKU:
                  </span>{" "}
                  3938PU
                </li>
                <li>
                  <span className="font-semibold inline-block w-[150px]">
                    CATEGORY:
                  </span>{" "}
                  Gloves
                </li>
                <li>
                  <span className="font-semibold inline-block w-[150px]">
                    TAG:
                  </span>{" "}
                  Business
                </li>
                <li>
                  <span className="font-semibold inline-block w-[150px]">
                    Product ID:
                  </span>{" "}
                  6221
                </li>
              </ul>

              <div className="flex items-center space-x-[10px] rtl:space-x-reverse pt-[10px]">
                <button
                  type="button"
                  className="bg-[#717FF8] text-white text-[14px] font-medium inline-block h-[48px] sm:h-auto py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                >
                  <i className="ri-shopping-cart-line"></i>{" "}
                  <span className="hidden sm:inline-block">Add To Cart</span>
                </button>

                <div className="flex items-center space-x-[10px] rtl:space-x-reverse border border-[#23274A] w-[130px] h-[48px] px-[15px]">
                  <button onClick={handleDecrement} className="text-[25px]">
                    -
                  </button>

                  <input
                    type="text"
                    value={count}
                    readOnly
                    className="w-full bg-transparent text-center"
                  />

                  <button onClick={handleIncrement} className="text-[22px]">
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="text-black text-[22px] inline-block leading-none w-[48px] h-[48px] border border-[#23274A] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:border-[#717FF8] hover:text-[#fff]"
                >
                  <i className="ri-heart-line"></i>
                  {/* <i className="ri-heart-fill"></i> */}
                </button>
              </div>
            </div>
          </div>

          {/* Tab */}
          <div className="max-w-[870px] mx-auto mt-[30px] md:mt-[50px] lg:mt-[80px]">
            {/* Tab menu */}
            <ul className="space-y-[10px] space-x-[20px] sm:space-x-[30px] md:space-x-[40px] lg:space-x-[45px] xl:space-x-[50px] 2xl:space-x-[65px] rtl:space-x-reverse mb-[30px] text-center">
              <li
                onClick={() => handleTabClick(0)}
                className={`inline-block cursor-pointer font-bold text-[18px] md:text-[22px] hover:text-[#051F0D] ${
                  activeTab === 0
                    ? "text-[#051F0D] border-b border-[#051F0D]"
                    : "text-[#859D8B]"
                }`}
              >
                Description
              </li>
              <li
                onClick={() => handleTabClick(1)}
                className={`inline-block cursor-pointer font-bold text-[18px] md:text-[22px] hover:text-[#051F0D] ${
                  activeTab === 1
                    ? "text-[#051F0D] border-b border-[#051F0D]"
                    : "text-[#859D8B]"
                }`}
              >
                Reviews
              </li>
            </ul>

            {/* Tab content */}
            <div>
              {activeTab === 0 && <ProductDescription />}
              {activeTab === 1 && <Reviews /> }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDetailsContent;
