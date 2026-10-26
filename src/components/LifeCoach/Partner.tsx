"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import pratnerLogo1 from "/public/images/life-coach/partner1.png";
import pratnerLogo2 from "/public/images/life-coach/partner2.png";
import pratnerLogo3 from "/public/images/life-coach/partner3.png"; 

const Partner: React.FC = () => {
  return (
    <>
      <div className="bg-white md:bg-transparent mt-[30px] md:mt-[0] p-[20px] md:p-[0] md:pb-[10px] lg:pb-[20px] xl:pb-[30px] rtl:bg-white rtl:p-[20px]">
        <div className="container mx-auto">
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 3,
              }
            }}
            modules={[Autoplay]}
            className="pratner-slider"
          >
            <SwiperSlide className="text-center">
              <Image
                src={pratnerLogo1}
                alt="pratner"
                className="inline-block"
              />
            </SwiperSlide>

            <SwiperSlide className="text-center">
              <Image
                src={pratnerLogo2}
                alt="pratner"
                className="inline-block"
              />
            </SwiperSlide>

            <SwiperSlide className="text-center">
              <Image
                src={pratnerLogo3}
                alt="pratner"
                className="inline-block"
              />
            </SwiperSlide>

            <SwiperSlide className="text-center">
              <Image
                src={pratnerLogo2}
                alt="pratner"
                className="inline-block"
              />
            </SwiperSlide>

            <SwiperSlide className="text-center">
              <Image
                src={pratnerLogo3}
                alt="pratner"
                className="inline-block"
              />
            </SwiperSlide> 
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partner;
