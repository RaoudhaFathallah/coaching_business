"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import product1 from "/public/images/product1.png";
import product2 from "/public/images/product2.png";
import product3 from "/public/images/product3.png";

const CartTable: React.FC = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[140px]">
        <div className="container mx-auto">
          <div className="relative overflow-x-auto">
            <table className="w-[850px] lg:w-full text-left rtl:text-right">
              <thead className="text-[14px] md:text-[16px] text-[#051F0D] bg-[#E5FFEF]">
                <tr>
                  <th scope="col" className="px-6 py-5">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-5 text-center">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-5 text-center">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-5 text-center">
                    Subtotal
                  </th>
                  <th scope="col" className="px-6 py-5 text-end">
                    Remove
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-[#051F0D]">
                  <td className="px-4 py-6 font-medium text-black">
                    <div className="flex items-center space-x-[20px] rtl:space-x-reverse">
                      <div className="bg-[#CBE2D0]">
                        <Image
                          src={product1}
                          alt="product"
                          className="w-[100px]"
                        />
                      </div>
                      <Link
                        href="/shop/shop-details"
                        className="hover:text-[#717FF8]"
                      >
                        Yoga Roller State
                      </Link>
                    </div>
                  </td>

                  <td className="px-4 py-4 font-medium text-black text-center">
                    $12.99
                  </td>

                  <td className="px-4 py-4 font-medium text-black text-center">
                    <div className="flex items-center space-x-[10px] rtl:space-x-reverse border border-[#23274A] w-[130px] h-[48px] px-[15px] mx-auto">
                      <button className="text-[25px]">-</button>

                      <input
                        type="text"
                        defaultValue={0}
                        className="w-full bg-transparent text-center"
                      />

                      <button className="text-[22px]">+</button>
                    </div>
                  </td>

                  <td className="px-4 py-4 font-medium text-black text-center">
                    $12.99
                  </td>

                  <td className="px-4 py-4 font-medium text-black text-end">
                    <button className="text-[25px] mr-[20px] hover:text-[#E6B325]">
                      <i className="ri-close-line"></i>
                    </button>
                  </td>
                </tr>

                <tr className="border-b border-[#051F0D]">
                  <td className="px-4 py-6 font-medium text-black">
                    <div className="flex items-center space-x-[20px] rtl:space-x-reverse">
                      <div className="bg-[#CBE2D0]">
                        <Image
                          src={product2}
                          alt="product"
                          className="w-[100px]"
                        />
                      </div>
                      <Link
                        href="/shop/shop-details"
                        className="hover:text-[#717FF8]"
                      >
                        Yoga Mate State
                      </Link>
                    </div>
                  </td>

                  <td className="px-4 py-4 font-medium text-black text-center">
                    $36.99
                  </td>

                  <td className="px-4 py-4 font-medium text-black text-center">
                    <div className="flex items-center space-x-[10px] rtl:space-x-reverse border border-[#23274A] w-[130px] h-[48px] px-[15px] mx-auto">
                      <button className="text-[25px]">-</button>

                      <input
                        type="text"
                        defaultValue={0}
                        className="w-full bg-transparent text-center"
                      />

                      <button className="text-[22px]">+</button>
                    </div>
                  </td>

                  <td className="px-4 py-4 font-medium text-black text-center">
                    $36.99
                  </td>

                  <td className="px-4 py-4 font-medium text-black text-end">
                    <button className="text-[25px] mr-[20px] hover:text-[#E6B325]">
                      <i className="ri-close-line"></i>
                    </button>
                  </td>
                </tr>

                <tr className="border-b border-[#051F0D]">
                  <td className="px-4 py-6 font-medium text-black">
                    <div className="flex items-center space-x-[20px] rtl:space-x-reverse">
                      <div className="bg-[#CBE2D0]">
                        <Image
                          src={product3}
                          alt="product"
                          className="w-[100px]"
                        />
                      </div>
                      <Link
                        href="/shop/shop-details"
                        className="hover:text-[#717FF8]"
                      >
                        Best Hand Gloves
                      </Link>
                    </div>
                  </td>

                  <td className="px-4 py-4 font-medium text-black text-center">
                    $24.99
                  </td>

                  <td className="px-4 py-4 font-medium text-black text-center">
                    <div className="flex items-center space-x-[10px] rtl:space-x-reverse border border-[#23274A] w-[130px] h-[48px] px-[15px] mx-auto">
                      <button className="text-[25px]">-</button>

                      <input
                        type="text"
                        defaultValue={0}
                        className="w-full bg-transparent text-center"
                      />

                      <button className="text-[22px]">+</button>
                    </div>
                  </td>

                  <td className="px-4 py-4 font-medium text-black text-center">
                    $24.99
                  </td>

                  <td className="px-4 py-4 font-medium text-black text-end">
                    <button className="text-[25px] mr-[20px] hover:text-[#E6B325]">
                      <i className="ri-close-line"></i>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td colSpan={4} className="pt-[30px]">
                    <form className="flex items-center space-x-[20px] rtl:space-x-reverse">
                      <div className="w-[230px] lg:w-[400px]">
                        <input
                          type="text"
                          placeholder="Coupon code"
                          className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[53px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
                        />
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="bg-[#717FF8] text-[#fff] text-[14px] font-semibold block w-full py-[19px] px-[21px] sm:px-[30px] leading-none border border-[#717FF8] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
                        >
                          Apply Coupon{" "}
                          <i className="ri-arrow-right-up-line"></i>
                        </button>
                      </div>
                    </form>
                  </td>

                  <td className="text-end pt-[30px]">
                    <button
                      type="submit"
                      className=" text-[#717FF8] text-[14px] font-semibold inline-block py-[19px] px-[21px] sm:px-[30px] leading-none border border-[#717FF8] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
                    >
                      Update Cart <i className="ri-arrow-right-up-line"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="bg-[#E5FFEF] p-[30px] lg:p-[50px] max-w-[530px] ml-auto mt-[50px] lg:mt-[80px]">
            <h2 className="text-black text-[30px] md:text-[35px] lg:text-[40px] xl:text-[48px] leading-none mb-[30px]">
              Cart Totals
            </h2>

            <ul className="space-y-[20px]">
              <li className="flex items-center justify-between border-b border-[#051F0D] pb-[25px] mb-[25px] last:border-none last:pb-[0] last:mb-[0]">
                <h3 className="text-black text-[20px] lg:text-[22px] leading-none">
                  Subtotal
                </h3>
                <h3 className="text-black text-[20px] lg:text-[22px] leading-none">
                  $74.97
                </h3>
              </li>

              <li className="flex items-center justify-between border-b border-[#051F0D] pb-[25px] mb-[25px] last:border-none last:pb-[0] last:mb-[0]">
                <h3 className="text-black text-[20px] lg:text-[22px] leading-none">
                  Shipping
                </h3>
                <p className="text-black text-[16px] leading-none">
                  Free shipping
                </p>
              </li>

              <li className="flex items-center justify-between border-b border-[#051F0D] pb-[25px] mb-[25px] last:border-none last:pb-[0] last:mb-[0]">
                <h3 className="text-black text-[20px] lg:text-[22px] leading-none">
                  Total
                </h3>
                <h3 className="text-black text-[20px] lg:text-[22px] leading-none">
                  $74.97
                </h3>
              </li>
            </ul>

            <Link
              href="#"
              className="bg-[#717FF8] text-[#fff] text-[15px] text-center font-semibold block mt-[30px] py-[20px] px-[20px] leading-none border border-[#717FF8] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
            >
              Proceed To Checkout <i className="ri-arrow-right-up-line"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTable;
