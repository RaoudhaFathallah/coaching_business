"use client";
  
import React from "react";
import Nav from "./Nav";
import Image from "next/image";

import instructorProfile from "/public/images/instructor-profile.jpg";

const InstructorProfile: React.FC = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[140px]">
        <div className="container mx-auto lg:max-w-[1150px]">
          {/* Nav */}
          <Nav />
 
          <div className="grid gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <div>
              <Image src={instructorProfile} alt="instructor" className='mb-[25px]' />

              <h3 className='text-[25px] leading-none mb-[5px]'>James John</h3>

              <p className='text-[15px]'>Health Coach Teacher</p>

              <ul className="mt-[15px] space-x-[10px] rtl:space-x-reverse">
                <li className="inline-block">
                  <a href="https://www.linkedin.com/" target="_black" className="bg-[#fff] border border-[#E5FFEF] text-black w-[40px] h-[40px] leading-[36px] inline-block rounded-full text-center transition duration-500 ease-in-out hover:bg-[#717FF8] hover:border-[#717FF8] hover:text-white">
                    <i className="ri-linkedin-line"></i>
                  </a>
                </li>

                <li className="inline-block">
                  <a href="https://www.twitter.com/" target="_black" className="bg-[#fff] border border-[#E5FFEF] text-black w-[40px] h-[40px] leading-[36px] inline-block rounded-full text-center transition duration-500 ease-in-out hover:bg-[#717FF8] hover:border-[#717FF8] hover:text-white">
                    <i className="ri-twitter-line"></i>
                  </a>
                </li>

                <li className="inline-block">
                  <a href="https://www.instagram.com/" target="_black" className="bg-[#fff] border border-[#E5FFEF] text-black w-[40px] h-[40px] leading-[36px] inline-block rounded-full text-center transition duration-500 ease-in-out hover:bg-[#717FF8] hover:border-[#717FF8] hover:text-white">
                    <i className="ri-instagram-line"></i>
                  </a>
                </li>

                <li className="inline-block">
                  <a href="https://www.youtube.com/" target="_black" className="bg-[#fff] border border-[#E5FFEF] text-black w-[40px] h-[40px] leading-[36px] inline-block rounded-full text-center transition duration-500 ease-in-out hover:bg-[#717FF8] hover:border-[#717FF8] hover:text-white">
                    <i className="ri-youtube-line"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div className="details-content space-y-[10px]">
                <h5>Hello my name is James John!</h5>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorProfile;