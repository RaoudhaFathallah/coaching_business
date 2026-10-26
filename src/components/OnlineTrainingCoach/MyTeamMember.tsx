"use client";

import React from "react"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import memberImg1 from "/public/images/online-training-coach/member1.jpg";
import memberImg2 from "/public/images/online-training-coach/member2.jpg";
import memberImg3 from "/public/images/online-training-coach/member3.jpg";
import memberImg4 from "/public/images/online-training-coach/member4.jpg";
import memberImg5 from "/public/images/online-training-coach/member5.jpg";
import memberImg6 from "/public/images/online-training-coach/member6.jpg";

const MyTeamMember: React.FC = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <div className="pb-[50px] md:pb-[60px] lg:pb-[140px] overflow-hidden">
        <div className="px-[15px] 2xl:px-[0] relative overflow-hidden content-right-overflow">
          <h1 className="text-[30px] md:text-[50px] lg:text-[80px] sm:tracking-[-1.2px] leading-none mb-[30px] md:mb-[50px]">
            My team member
          </h1>

          <Swiper
            slidesPerView={1}
            spaceBetween={25}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: true,
            }}
            pagination={pagination}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="team-slider"
          >
            <SwiperSlide>
              <div>
                <Image src={memberImg1} alt="member" className="mb-[30px]" />
                <h3 className="text-[20px] lg:text-[24px] leading-none mb-[5px]">
                  Anials Saimon
                </h3>
                <p className="text-[14px]">English’s Teacher (CEO)</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <Image src={memberImg2} alt="member" className="mb-[30px]" />
                <h3 className="text-[20px] lg:text-[24px] leading-none mb-[5px]">
                  Brandan Macculam
                </h3>
                <p className="text-[14px]">Methmatics’s Teacher</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <Image src={memberImg3} alt="member" className="mb-[30px]" />
                <h3 className="text-[20px] lg:text-[24px] leading-none mb-[5px]">
                  Jeckson Sindala
                </h3>
                <p className="text-[14px]">Biology’s Teacher</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <Image src={memberImg4} alt="member" className="mb-[30px]" />
                <h3 className="text-[20px] lg:text-[24px] leading-none mb-[5px]">
                  Dennis William
                </h3>
                <p className="text-[14px]">Business’s Administrator</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <Image src={memberImg5} alt="member" className="mb-[30px]" />
                <h3 className="text-[20px] lg:text-[24px] leading-none mb-[5px]">
                  James
                </h3>
                <p className="text-[14px]">IT Engineer</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <Image src={memberImg6} alt="member" className="mb-[30px]" />
                <h3 className="text-[20px] lg:text-[24px] leading-none mb-[5px]">
                  Oliver
                </h3>
                <p className="text-[14px]">IT Engineer</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MyTeamMember;
