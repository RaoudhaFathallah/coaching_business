"use client";

import React from "react";

const OrderList: React.FC = () => {
  return (
    <>
      <div className="bg-[#E5FFEF] py-[40px] px-[35px]">
        <h2 className="text-black font-bold text-[26px] leading-none mb-[30px]">
          Your order list
        </h2>

        <ul className="space-y-[20px]">
          <li className="flex items-center justify-between border-b border-[#051F0D] pb-[25px] mb-[25px] last:border-none last:pb-[0] last:mb-[0]">
            <h3 className="text-black text-[16px] lg:text-[18px] font-medium leading-none">
              Hand Gloves x 03
            </h3>
            <h3 className="text-black text-[16px] lg:text-[18px] leading-none">
              $45.90
            </h3>
          </li>

          <li className="flex items-center justify-between border-b border-[#051F0D] pb-[25px] mb-[25px] last:border-none last:pb-[0] last:mb-[0]">
            <h3 className="text-black text-[16px] lg:text-[18px] font-medium leading-none">
              Yoga Roller x 02
            </h3>
            <h3 className="text-black text-[16px] lg:text-[18px] leading-none">
              $41.00
            </h3>
          </li>

          <li className="flex items-center justify-between border-b border-[#051F0D] pb-[25px] mb-[25px] last:border-none last:pb-[0] last:mb-[0]">
            <h3 className="text-black text-[16px] lg:text-[18px] font-medium leading-none">
              Smart Hand Gloves x 01
            </h3>
            <h3 className="text-black text-[16px] lg:text-[18px] leading-none">
              $59.00
            </h3>
          </li>

          <li className="flex items-center justify-between border-b border-[#051F0D] pb-[25px] mb-[25px] last:border-none last:pb-[0] last:mb-[0]">
            <h3 className="text-black text-[16px] lg:text-[18px] font-medium leading-none">
              Subtotal
            </h3>
            <h3 className="text-black text-[16px] lg:text-[18px] leading-none">
              $11.00
            </h3>
          </li>

          <li className="flex items-center justify-between border-b border-[#051F0D] pb-[25px] mb-[25px] last:border-none last:pb-[0] last:mb-[0]">
            <h3 className="text-black text-[16px] lg:text-[18px] font-medium leading-none">
              Shipping
            </h3>
            <h3 className="text-black text-[16px] lg:text-[18px] leading-none">
              Free
            </h3>
          </li>

          <li className="flex items-center justify-between border-b border-[#051F0D] pb-[25px] mb-[25px] last:border-none last:pb-[0] last:mb-[0]">
            <h3 className="text-black text-[16px] lg:text-[26px] font-bold leading-none">
              Total
            </h3>
            <h3 className="text-black text-[16px] lg:text-[18px] leading-none">
              $156.00
            </h3>
          </li>
        </ul>
      </div>
    </>
  );
};

export default OrderList;
