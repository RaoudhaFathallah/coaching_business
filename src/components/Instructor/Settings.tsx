"use client";
  
import React from "react";
import Nav from "./Nav";
import Image from "next/image";

import instructorProfile from "/public/images/instructor-profile.jpg";

const Settings: React.FC = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[140px]">
        <div className="container mx-auto lg:max-w-[1150px]">
          {/* Nav */}
          <Nav />
  
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
                Designation
              </label>
              <input
                type="text"
                placeholder="designation"
                className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
              />
            </div>

            <div>
              <label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
                Upload Profile Image
              </label>
              <input
                type="file" 
                className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[10px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
              />

              <div className='mt-[15px]'>
                <p className='text-[14px] mb-[10px]'>Recommended image size 600x600!</p>
                <Image src={instructorProfile} alt='instructor' className='w-[100px]' />
              </div>
            </div>
 
            <div>
              <label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
                About Info
              </label>
              <textarea
                placeholder="About info..."
                rows={10}
                className="bg-transparent text-[#4A4E4B] border border-[#051F0D] block w-full py-[10px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Settings;