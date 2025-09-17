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
            <div className="container mx-auto my-12">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper "
                >
                    {categories?.map((cat) => (
                        <>
                            <SwiperSlide key={cat?._id}>
                                <div className="relative w-full h-[300px]">
                                    <Image
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                        priority
                                        loading="eager"
                                        fill
                                        src={cat?.image}
                                        alt="Nature 1"
                                    />
                                </div>
                                <p className=" bottom-0 left-0 right-0 p-2 mb-15 mt-5">
                                    {cat?.name}
                                </p>
                            </SwiperSlide>
                        </>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
