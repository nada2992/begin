"use client";
import React, { useRef } from "react";
import { CROSS } from "../constants";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Cross = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="pt-12 md:p-24 flex flex-col justify-center w-full">
      <div className="flex place-content-center items-center justify-center text-center">
        <h1 className="text-black dark:text-white text-2xl md:text-4xl w-full md:w-[53rem]">
          Cross store shopping in real time and cloth simulation on your own
          character!
        </h1>
      </div>
      <div className="relative flex items-center justify-center pt-8">
        <div className="flex w-24 md:w-[11%] h-1">
          <div className="bg-[#1EE1B3] w-3/10" />
        </div>
      </div>
      <div className="flex flex-row pt-8 items-center justify-center">
        <div 
          className="bg-[#D9D9D9] text-2xl rounded-full flex w-[3rem] h-[3rem] items-center justify-center cursor-pointer" 
          onClick={slidePrev}
        >
          <IoIosArrowBack />
        </div>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="w-full md:w-auto px-4"
        >
          {CROSS.map((item, i) => (
            <SwiperSlide key={i}>
              <img
                src={item.icon}
                alt="icon"
                className="gap-4 w-full md:w-[15rem] h-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div 
          className="bg-[#D9D9D9] text-2xl rounded-full flex w-[3rem] h-[3rem] items-center justify-center cursor-pointer" 
          onClick={slideNext}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </section>
  );
};

export default Cross;
