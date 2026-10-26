"use client";

import React from "react";
import Sidebar from "./Sidebar";

const CheckoutContent: React.FC = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[140px]">
        <div className="container mx-auto">
          <h1 className="text-[30px] md:text-[40px] lg:text-[48px] leading-none mb-[30px] md:mb-[50px] lg:max-w-[727px]">
            Billing details
          </h1>

          <div className="grid gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <form className="space-y-[25px]">
                <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                  <div>
                    <label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
                      First name*
                    </label>
                    <input
                      type="text"
                      placeholder="First name"
                      className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
                    />
                  </div>

                  <div>
                    <label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
                      Last name*
                    </label>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
                    Company name (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
                  />
                </div>

                <div>
                  <label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
                    Country / Region *
                  </label>

                  <select
                    id="country"
                    className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
                  >
                    <option defaultValue="0" className="text-[13px]">
                      United States (US)
                    </option>
                    <option defaultValue="1" className="text-[13px]">
                      Australia
                    </option>
                    <option defaultValue="2" className="text-[13px]">
                      Canada
                    </option>
                    <option defaultValue="3" className="text-[13px]">
                      France
                    </option>
                    <option defaultValue="4" className="text-[13px]">
                      Germany
                    </option>
                    <option defaultValue="5" className="text-[13px]">
                      Japan
                    </option>
                    <option defaultValue="6" className="text-[13px]">
                      United Kingdom
                    </option>
                  </select>
                </div>

                <div>
                  <label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
                    Street address *
                  </label>
                  <input
                    type="text"
                    placeholder="House number state name"
                    className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
                  />
                </div>

                <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                  <div>
                    <label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
                      Town / City *
                    </label>
                    <input
                      type="text"
                      placeholder="Town/City name here"
                      className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
                    />
                  </div>

                  <div>
                    <label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
                      State*
                    </label>

                    <select
                      id="country"
                      className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
                    >
                      <option defaultValue="0" className="text-[13px]">
                        Alabama
                      </option>
                      <option defaultValue="1" className="text-[13px]">
                        Maryland
                      </option>
                      <option defaultValue="2" className="text-[13px]">
                        New Jersey
                      </option>
                      <option defaultValue="3" className="text-[13px]">
                        New Mexico
                      </option>
                      <option defaultValue="4" className="text-[13px]">
                        New York
                      </option>
                      <option defaultValue="5" className="text-[13px]">
                        North Carolina
                      </option>
                      <option defaultValue="6" className="text-[13px]">
                        Texas
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      placeholder="Zip code here"
                      className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
                    />
                  </div>

                  <div>
                    <label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
                      Phone*
                    </label>
                    <input
                      type="text"
                      placeholder="Phone number here"
                      className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 rtl:ml-0 rtl:mr-2 text-sm font-semibold"
                  >
                    Ship to a different address?
                  </label>
                </div>

                <div>
                  <label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
                    Order notes (optional) *
                  </label>
                  <textarea
                    placeholder="Notes about your order, e.g. special notes for delivery"
                    rows={5}
                    className="bg-transparent text-[#4A4E4B] border border-[#051F0D] block w-full py-[10px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
                  />
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutContent;
