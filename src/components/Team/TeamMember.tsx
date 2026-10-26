"use client";

import React from "react"; 
import Image from "next/image";

import memberImg1 from "/public/images/online-training-coach/member1.jpg";
import memberImg2 from "/public/images/online-training-coach/member2.jpg";
import memberImg3 from "/public/images/online-training-coach/member3.jpg";
import memberImg4 from "/public/images/online-training-coach/member4.jpg";
import memberImg5 from "/public/images/online-training-coach/member5.jpg";
import memberImg6 from "/public/images/online-training-coach/member6.jpg";

const TeamMember: React.FC = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[140px]">
        <div className="container mx-auto">
          <div className="grid gap-[30px] lg:gap-[40px] grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
            <div>
              <Image src={memberImg1} alt="member" className="mb-[30px]" />
              <h3 className="text-[20px] lg:text-[24px] leading-none mb-[5px]">
                Anials Saimon
              </h3>
              <p className="text-[14px]">English’s Teacher & (CEO)</p>

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
      
            <div>
              <Image src={memberImg2} alt="member" className="mb-[30px]" />
              <h3 className="text-[20px] lg:text-[24px] leading-none mb-[5px]">
                Brandan Macculam
              </h3>
              <p className="text-[14px]">Methmatics’s Teacher</p>

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
    
            <div>
              <Image src={memberImg3} alt="member" className="mb-[30px]" />
              <h3 className="text-[20px] lg:text-[24px] leading-none mb-[5px]">
                Jeckson Sindala
              </h3>
              <p className="text-[14px]">Biology’s Teacher</p>

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
  
            <div>
              <Image src={memberImg4} alt="member" className="mb-[30px]" />
              <h3 className="text-[20px] lg:text-[24px] leading-none mb-[5px]">
                Dennis William
              </h3>
              <p className="text-[14px]">Business’s Administrator</p>

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
      
            <div>
              <Image src={memberImg5} alt="member" className="mb-[30px]" />
              <h3 className="text-[20px] lg:text-[24px] leading-none mb-[5px]">
                James
              </h3>
              <p className="text-[14px]">IT Engineer</p>

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
          
            <div>
              <Image src={memberImg6} alt="member" className="mb-[30px]" />
              <h3 className="text-[20px] lg:text-[24px] leading-none mb-[5px]">
                Oliver
              </h3>
              <p className="text-[14px]">IT Engineer</p>

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
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
