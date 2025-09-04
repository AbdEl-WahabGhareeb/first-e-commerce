"use client";
import { Categories } from "@/app/types/category.model";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function CatDisplay({
    categories,
}: {
    categories: Categories[];
}) {
    return (
        <>
            {categories?.map((cat) => (
                <>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation, Pagination]}
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
                                    src="/"
                                    alt="Nature 1"
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    ;
                </>
            ))}
        </>
    );
}
