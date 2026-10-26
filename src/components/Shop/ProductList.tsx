"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import product1 from "/public/images/product1.png";
import product2 from "/public/images/product2.png";
import product3 from "/public/images/product3.png";
import product4 from "/public/images/product4.png";
import product5 from "/public/images/product5.png";
import product6 from "/public/images/product6.png";
import product7 from "/public/images/product7.png";
import product8 from "/public/images/product8.png";
import product9 from "/public/images/product9.png";
import product10 from "/public/images/product10.png";
import product11 from "/public/images/product11.png";
import product12 from "/public/images/product12.png";

const ProductList: React.FC = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[140px]">
        <div className="container mx-auto">
          <div className="space-y-[10px] sm:space-y-[0] sm:flex items-center justify-between mb-[30px]">
            <p className="text-[14px] sm:text-[16px]">Showing 1–6 of 8 results</p>

            <div>
              <select
                id="shoring"
                className="bg-transparent text-black text-[14px] sm:text-[15px] block"
              >
                <option defaultValue="0" className="text-[13px]">Default Shoring</option>
                <option defaultValue="1" className="text-[13px]">Short by latest</option>
                <option defaultValue="2" className="text-[13px]">Short by price: low to high</option>
                <option defaultValue="3" className="text-[13px]">Short by price: high to low</option>
              </select>
            </div>
          </div>

          <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
            <div className="group">
              <div className="relative overflow-hidden border border-[#051F0D] p-[30px] lg:p-[40px]">
                <Link href="/shop/shop-details">
                  <Image src={product1} alt="product" />
                </Link>

                <div className="border border-[#23274A] text-black rounded-full text-[14px] font-medium leading-none py-[10px] px-[20px] absolute top-[15px] left-[15px] rtl:left-auto rtl:right-[15px]">
                  -10%
                </div>

                <div className="space-x-[10px] rtl:space-x-reverse absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0">
                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-shopping-bag-line"></i>
                  </button>

                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-heart-line"></i>
                  </button>
                </div>
              </div>

              <div className="pt-[25px]">
                <div className="text-[#E6B325] space-x-[3px] rtl:space-x-reverse mb-[10px]">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>

                <h3 className="font-bold text-[20px] lg:text-[22px] leading-[1.2] mb-[10px]">
                  <Link
                    href="/shop/shop-details"
                    className="transition duration-500 ease-in-out hover:text-[#717FF8]"
                  >
                    Yoga Roller State
                  </Link>
                </h3>

                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#717FF8] text-[18px] leading-none">
                    <span className="text-[#696969] text-[15px] mr-[10px] line-through">
                      $50.99
                    </span>
                    $45.99
                  </h3>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden border border-[#051F0D] p-[30px] lg:p-[40px]">
                <Link href="/shop/shop-details">
                  <Image src={product2} alt="product" />
                </Link>

                <div className="border border-[#23274A] text-black rounded-full text-[14px] font-medium leading-none py-[10px] px-[20px] absolute top-[15px] left-[15px] rtl:left-auto rtl:right-[15px]">
                  -64%
                </div>

                <div className="space-x-[10px] rtl:space-x-reverse absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0">
                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-shopping-bag-line"></i>
                  </button>

                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-heart-line"></i>
                  </button>
                </div>
              </div>

              <div className="pt-[25px]">
                <div className="text-[#E6B325] space-x-[3px] rtl:space-x-reverse mb-[10px]">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                  <i className="ri-star-line"></i>
                </div>

                <h3 className="font-bold text-[20px] lg:text-[22px] leading-[1.2] mb-[10px]">
                  <Link
                    href="/shop/shop-details"
                    className="transition duration-500 ease-in-out hover:text-[#717FF8]"
                  >
                    Mate Yoga Setup
                  </Link>
                </h3>

                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#717FF8] text-[18px] leading-none">
                    <span className="text-[#696969] text-[15px] mr-[10px] line-through">
                      $64
                    </span>
                    $36
                  </h3>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden border border-[#051F0D] p-[30px] lg:p-[40px]">
                <Link href="/shop/shop-details">
                  <Image src={product3} alt="product" />
                </Link>

                <div className="space-x-[10px] rtl:space-x-reverse absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0">
                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-shopping-bag-line"></i>
                  </button>

                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-heart-line"></i>
                  </button>
                </div>
              </div>

              <div className="pt-[25px]">
                <div className="text-[#E6B325] space-x-[3px] rtl:space-x-reverse mb-[10px]">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>

                <h3 className="font-bold text-[20px] lg:text-[22px] leading-[1.2] mb-[10px]">
                  <Link
                    href="/shop/shop-details"
                    className="transition duration-500 ease-in-out hover:text-[#717FF8]"
                  >
                    Abstract Roll Gloves
                  </Link>
                </h3>

                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#717FF8] text-[18px] leading-none">
                    $45.99
                  </h3>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden border border-[#051F0D] p-[30px] lg:p-[40px]">
                <Link href="/shop/shop-details">
                  <Image src={product4} alt="product" />
                </Link>

                <div className="space-x-[10px] rtl:space-x-reverse absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0">
                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-shopping-bag-line"></i>
                  </button>

                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-heart-line"></i>
                  </button>
                </div>
              </div>

              <div className="pt-[25px]">
                <div className="text-[#E6B325] space-x-[3px] rtl:space-x-reverse mb-[10px]">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>

                <h3 className="font-bold text-[20px] lg:text-[22px] leading-[1.2] mb-[10px]">
                  <Link
                    href="/shop/shop-details"
                    className="transition duration-500 ease-in-out hover:text-[#717FF8]"
                  >
                    Coaching Hybrid Solution
                  </Link>
                </h3>

                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#717FF8] text-[18px] leading-none">
                    $18.99
                  </h3>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden border border-[#051F0D] p-[30px] lg:p-[40px]">
                <Link href="/shop/shop-details">
                  <Image src={product5} alt="product" />
                </Link>

                <div className="space-x-[10px] rtl:space-x-reverse absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0">
                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-shopping-bag-line"></i>
                  </button>

                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-heart-line"></i>
                  </button>
                </div>
              </div>

              <div className="pt-[25px]">
                <div className="text-[#E6B325] space-x-[3px] rtl:space-x-reverse mb-[10px]">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>

                <h3 className="font-bold text-[20px] lg:text-[22px] leading-[1.2] mb-[10px]">
                  <Link
                    href="/shop/shop-details"
                    className="transition duration-500 ease-in-out hover:text-[#717FF8]"
                  >
                    Caring Your Health
                  </Link>
                </h3>

                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#717FF8] text-[18px] leading-none">
                    $27.99
                  </h3>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden border border-[#051F0D] p-[30px] lg:p-[40px]">
                <Link href="/shop/shop-details">
                  <Image src={product6} alt="product" />
                </Link>

                <div className="space-x-[10px] rtl:space-x-reverse absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0">
                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-shopping-bag-line"></i>
                  </button>

                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-heart-line"></i>
                  </button>
                </div>
              </div>

              <div className="pt-[25px]">
                <div className="text-[#E6B325] space-x-[3px] rtl:space-x-reverse mb-[10px]">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>

                <h3 className="font-bold text-[20px] lg:text-[22px] leading-[1.2] mb-[10px]">
                  <Link
                    href="/shop/shop-details"
                    className="transition duration-500 ease-in-out hover:text-[#717FF8]"
                  >
                    Coaching Natural Book
                  </Link>
                </h3>

                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#717FF8] text-[18px] leading-none">
                    $77.99
                  </h3>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden border border-[#051F0D] p-[30px] lg:p-[40px]">
                <Link href="/shop/shop-details">
                  <Image src={product7} alt="product" />
                </Link>

                <div className="space-x-[10px] rtl:space-x-reverse absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0">
                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-shopping-bag-line"></i>
                  </button>

                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-heart-line"></i>
                  </button>
                </div>
              </div>

              <div className="pt-[25px]">
                <div className="text-[#E6B325] space-x-[3px] rtl:space-x-reverse mb-[10px]">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>

                <h3 className="font-bold text-[20px] lg:text-[22px] leading-[1.2] mb-[10px]">
                  <Link
                    href="/shop/shop-details"
                    className="transition duration-500 ease-in-out hover:text-[#717FF8]"
                  >
                    Genius Yoga Starting
                  </Link>
                </h3>

                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#717FF8] text-[18px] leading-none">
                    $29.99
                  </h3>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden border border-[#051F0D] p-[30px] lg:p-[40px]">
                <Link href="/shop/shop-details">
                  <Image src={product8} alt="product" />
                </Link>

                <div className="space-x-[10px] rtl:space-x-reverse absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0">
                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-shopping-bag-line"></i>
                  </button>

                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-heart-line"></i>
                  </button>
                </div>
              </div>

              <div className="pt-[25px]">
                <div className="text-[#E6B325] space-x-[3px] rtl:space-x-reverse mb-[10px]">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>

                <h3 className="font-bold text-[20px] lg:text-[22px] leading-[1.2] mb-[10px]">
                  <Link
                    href="/shop/shop-details"
                    className="transition duration-500 ease-in-out hover:text-[#717FF8]"
                  >
                    3D Yoga Roller Box
                  </Link>
                </h3>

                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#717FF8] text-[18px] leading-none">
                    $78.99
                  </h3>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden border border-[#051F0D] p-[30px] lg:p-[40px]">
                <Link href="/shop/shop-details">
                  <Image src={product9} alt="product" />
                </Link>

                <div className="space-x-[10px] rtl:space-x-reverse absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0">
                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-shopping-bag-line"></i>
                  </button>

                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-heart-line"></i>
                  </button>
                </div>
              </div>

              <div className="pt-[25px]">
                <div className="text-[#E6B325] space-x-[3px] rtl:space-x-reverse mb-[10px]">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>

                <h3 className="font-bold text-[20px] lg:text-[22px] leading-[1.2] mb-[10px]">
                  <Link
                    href="/shop/shop-details"
                    className="transition duration-500 ease-in-out hover:text-[#717FF8]"
                  >
                    Yoga Roller State
                  </Link>
                </h3>

                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#717FF8] text-[18px] leading-none">
                    $92.99
                  </h3>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden border border-[#051F0D] p-[30px] lg:p-[40px]">
                <Link href="/shop/shop-details">
                  <Image src={product10} alt="product" />
                </Link>

                <div className="space-x-[10px] rtl:space-x-reverse absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0">
                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-shopping-bag-line"></i>
                  </button>

                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-heart-line"></i>
                  </button>
                </div>
              </div>

              <div className="pt-[25px]">
                <div className="text-[#E6B325] space-x-[3px] rtl:space-x-reverse mb-[10px]">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>

                <h3 className="font-bold text-[20px] lg:text-[22px] leading-[1.2] mb-[10px]">
                  <Link
                    href="/shop/shop-details"
                    className="transition duration-500 ease-in-out hover:text-[#717FF8]"
                  >
                    Kodak Panging Teck
                  </Link>
                </h3>

                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#717FF8] text-[18px] leading-none">
                    $65.99
                  </h3>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden border border-[#051F0D] p-[30px] lg:p-[40px]">
                <Link href="/shop/shop-details">
                  <Image src={product11} alt="product" />
                </Link>

                <div className="space-x-[10px] rtl:space-x-reverse absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0">
                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-shopping-bag-line"></i>
                  </button>

                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-heart-line"></i>
                  </button>
                </div>
              </div>

              <div className="pt-[25px]">
                <div className="text-[#E6B325] space-x-[3px] rtl:space-x-reverse mb-[10px]">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>

                <h3 className="font-bold text-[20px] lg:text-[22px] leading-[1.2] mb-[10px]">
                  <Link
                    href="/shop/shop-details"
                    className="transition duration-500 ease-in-out hover:text-[#717FF8]"
                  >
                    Brand Malish Creak
                  </Link>
                </h3>

                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#717FF8] text-[18px] leading-none">
                    $45.99
                  </h3>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden border border-[#051F0D] p-[30px] lg:p-[40px]">
                <Link href="/shop/shop-details">
                  <Image src={product12} alt="product" />
                </Link>

                <div className="space-x-[10px] rtl:space-x-reverse absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0">
                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-shopping-bag-line"></i>
                  </button>

                  <button
                    type="button"
                    className="bg-[#ace3b8] text-black text-[18px] font-semibold inline-block w-[45px] h-[45px] leading-[45px] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:text-[#fff]"
                  >
                    <i className="ri-heart-line"></i>
                  </button>
                </div>
              </div>

              <div className="pt-[25px]">
                <div className="text-[#E6B325] space-x-[3px] rtl:space-x-reverse mb-[10px]">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>

                <h3 className="font-bold text-[20px] lg:text-[22px] leading-[1.2] mb-[10px]">
                  <Link
                    href="/shop/shop-details"
                    className="transition duration-500 ease-in-out hover:text-[#717FF8]"
                  >
                    Branding Cream Hand
                  </Link>
                </h3>

                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#717FF8] text-[18px] leading-none">
                    $75.99
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <nav aria-label="Page navigation example">
            <ul className="text-center space-x-[5px] rtl:space-x-reverse mt-[30px] md:mt-[50px]">
              <li className="inline-block">
                <a
                  href="#"
                  className="flex items-center justify-center text-[14px] md:text-[16px] border border-[#051F0D] h-[36px] w-[40px] md:w-[55px] leading-tight rounded-[30px] font-semibold text-[##051F0D] hover:bg-[#717FF8] hover:border-[#717FF8] hover:text-[#fff]"
                >
                  <i className="ri-arrow-left-line"></i>
                </a>
              </li>

              <li className="inline-block">
                <a
                  href="#"
                  className="flex items-center justify-center text-[14px] md:text-[16px] border border-[#051F0D] h-[36px] w-[40px] md:w-[55px] leading-tight rounded-[30px] font-semibold text-[##051F0D] hover:bg-[#717FF8] hover:border-[#717FF8] hover:text-[#fff]"
                >
                  1
                </a>
              </li>

              <li className="inline-block">
                <a
                  href="#"
                  className="flex items-center justify-center text-[14px] md:text-[16px] border border-[#051F0D] h-[36px] w-[40px] md:w-[55px] leading-tight rounded-[30px] font-semibold text-[##051F0D] hover:bg-[#717FF8] hover:border-[#717FF8] hover:text-[#fff]"
                >
                  2
                </a>
              </li>

              <li className="inline-block">
                <a
                  href="#"
                  className="flex items-center justify-center text-[14px] md:text-[16px] border border-[#051F0D] h-[36px] w-[40px] md:w-[55px] leading-tight rounded-[30px] font-semibold text-[##051F0D] hover:bg-[#717FF8] hover:border-[#717FF8] hover:text-[#fff]"
                >
                  3
                </a>
              </li>

              <li className="inline-block">
                <a
                  href="#"
                  className="flex items-center justify-center text-[14px] md:text-[16px] border border-[#051F0D] h-[36px] w-[40px] md:w-[55px] leading-tight rounded-[30px] font-semibold text-[##051F0D] hover:bg-[#717FF8] hover:border-[#717FF8] hover:text-[#fff]"
                >
                  <i className="ri-arrow-right-line"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ProductList;
