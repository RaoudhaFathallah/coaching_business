"use client";

import React from "react";

const PaymentSystem: React.FC = () => {
  return (
    <>
      <div className="bg-[#E5FFEF] py-[40px] px-[35px]">
        <h2 className="text-black font-bold text-[26px] leading-none mb-[30px]">
          Payment system
        </h2>

        <div className="space-y-[20px]">
          <div className="flex">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4"
            />

            <label htmlFor="default-radio-1" className="ml-2 rtl:ml-0 rtl:mr-2 text-sm">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference.
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4"
            />

            <label htmlFor="default-radio-2" className="ml-2 rtl:ml-0 rtl:mr-2 text-sm">
              Check payments
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="default-radio-3"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4"
            />

            <label htmlFor="default-radio-3" className="ml-2 rtl:ml-0 rtl:mr-2 text-sm">
              Cash on delivery
            </label>
          </div>
        </div>

        <button
          type="button"
          className="bg-[#717FF8] text-[#fff] text-[15px] text-center font-semibold block w-full mt-[30px] py-[20px] px-[20px] leading-none border border-[#717FF8] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
        >
          Place Your Order <i className="ri-arrow-right-up-line"></i>
        </button>
      </div>
    </>
  );
};

export default PaymentSystem;
