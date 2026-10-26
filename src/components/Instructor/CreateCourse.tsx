"use client";
  
import React from "react";
import Nav from "./Nav";
import Image from "next/image";

import courseImg1 from "/public/images/course-img1.jpg";

const CreateCourse: React.FC = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[140px]">
        <div className="container mx-auto lg:max-w-[1150px]">
          {/* Nav */}
          <Nav />
  
          <form className="space-y-[25px]">
            <div>
              <label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
                Course Title
              </label>
              <input
                type="text"
                placeholder="Course title"
                className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
              />
            </div>

            <div>
              <label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
                Type
              </label>

              <select
                id="country"
                className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
              >
                <option defaultValue="0" className="text-[13px]">
                  Basic
                </option>
                <option defaultValue="1" className="text-[13px]">
                  Medium
                </option>
                <option defaultValue="2" className="text-[13px]">
                  Hard
                </option>
              </select>
            </div>

            <div>
              <label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
                Lessons
              </label>
              <input
                type="text"
                placeholder="50 lessons"
                className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
              />
            </div>

            <div>
              <label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
                Upload Image
              </label>
              <input
                type="file" 
                className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[10px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
              />

              <div className='mt-[15px]'>
                <p className='text-[14px] mb-[10px]'>Recommended image size 900x790!</p>
                <Image src={courseImg1} alt='instructor' className='w-[100px]' />
              </div>
            </div>

            <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              <div>
                <label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
                  Price
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
                />
              </div>

              <div>
                <label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
                  Discount Price
                </label>
                <input
                  type="number"
                  placeholder="Discount price"
                  className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
                />
              </div>
            </div>
 
            <div>
              <label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
                Course Details
              </label>
              <textarea
                placeholder="Course details..."
                rows={10}
                className="bg-transparent text-[#4A4E4B] border border-[#051F0D] block w-full py-[10px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
              />
            </div>

            <div>
              <button
                type="submit"
                className="
                  bg-[#717FF8] 
                  text-[#fff] 
                  text-[16px] 
                  font-semibold 
                  block 
                  w-full 
                  py-[15px] 
                  sm:py-[17px] 
                  px-[21px] 
                  sm:px-[30px] 
                  leading-none 
                  border 
                  border-[#717FF8] 
                  transition 
                  duration-500 
                  ease-in-out 
                  hover:bg-[#000] 
                  hover:border-[#000] 
                  hover:text-[#fff]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateCourse;