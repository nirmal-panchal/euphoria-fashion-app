import React from 'react'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import SwiperCore from 'swiper';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewArrival = () => {
    return (
        <div className='px-8 md:px-20 mb-20'>
            <h1 className='font-semibold text-3xl border-l-[6px] px-5 border-purple-600 mb-16'>New Arrival</h1>
            <NewArrivalSlider />
        </div>
    )
}

export default NewArrival


const NewArrivalSlider = () => {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade])
    return (
        <div className='relative px-8'>
            <div className="absolute top-[110px] -left-1 z-30 cursor-pointer">
                <FaArrowLeftLong className='image-swiper-button-prev'/>
            </div>
            <div className="absolute top-[110px] -right-1 z-30 cursor-pointer">
                <FaArrowRightLong className='image-swiper-button-next'/>
            </div>
            <Swiper
                spaceBetween={40}
                slidesPerView={4}
                EffectFade
                navigation={{
                    nextEl: ".image-swiper-button-next",
                    prevEl: ".image-swiper-button-prev",
                    disabledClass: "swiper-button-disabled"
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40
                      }
                  }}
               
            >
                <SwiperSlide>
                    <div className='relative w-full h-64 mb-4'>
                        <Image src={"/stock/new-arrival/new1.jpg"} className='rounded-xl object-cover object-top' fill />
                    </div>
                    <h1 className='font-semibold'>Knitted Joggers</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-64 mb-4'>
                        <Image src={"/stock/new-arrival/new2.jpg"} className='rounded-xl object-cover object-top' fill />
                    </div>
                    <h1 className='font-semibold'>Knitted Joggers</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-64 mb-4 '>
                        <Image src={"/stock/new-arrival/new3.jpg"} className='rounded-xl object-cover object-top' fill />
                    </div>
                    <h1 className='font-semibold'>Knitted Joggers</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-64 mb-4 '>
                        <Image src={"/stock/new-arrival/new4.jpg"} className='rounded-xl object-cover object-top' fill />
                    </div>
                    <h1 className='font-semibold'>Knitted Joggers</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-64 mb-4 '>
                        <Image src={"/stock/new-arrival/new4.jpg"} className='rounded-xl object-cover object-top' fill />
                    </div>
                    <h1 className='font-semibold'>Knitted Joggers</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-64 mb-4 '>
                        <Image src={"/stock/new-arrival/new4.jpg"} className='rounded-xl object-cover object-top' fill />
                    </div>
                    <h1 className='font-semibold'>Knitted Joggers</h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

