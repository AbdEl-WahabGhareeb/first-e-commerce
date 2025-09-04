"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function MainSlider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative w-full h-[500px] ">
                        <Image
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                            priority
                            loading="eager"
                            fill
                            src="/Slider/port2.png"
                            alt="Nature 1"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-[500px] ">
                        <Image
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                            priority
                            loading="eager"
                            fill
                            src="/Slider/poert1.png"
                            alt="Nature 1"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-[500px] ">
                        <Image
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                            priority
                            loading="eager"
                            fill
                            src="/Slider/port3.png"
                            alt="Nature 1"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-[500px] ">
                        <Image
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                            priority
                            loading="eager"
                            fill
                            src="/Slider/slider-1.jpg"
                            alt="Nature 1"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
