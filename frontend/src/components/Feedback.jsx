import React from 'react'
import FeedbackCard from './cards/FeedbackCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const feedabackData = [
    {
        title: "Floyd Miles",
        avatar: "/stock/avatar/avatar1.png",
        review: "imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum has been the industry's imply dummy text of the printing and typesetting industry."
    },
    {
        title: "Ronald Richards",
        avatar: "/stock/avatar/avatar2.png",
        review: "imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum has been the industry's imply dummy text of the printing and typesetting industry."
    }, {
        title: "Ronald Richards",
        avatar: "/stock/avatar/avatar3.png",
        review: "imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum has been the industry's imply dummy text of the printing and typesetting industry."
    },
    {
        title: "Floyd Miles",
        avatar: "/stock/avatar/avatar3.png",
        review: "imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum has been the industry's imply dummy text of the printing and typesetting industry."
    }, {
        title: "Ronald Richards",
        avatar: "/stock/avatar/avatar3.png",
        review: "imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum has been the industry's imply dummy text of the printing and typesetting industry."
    }, {
        title: "Savannah Nguyen",
        avatar: "/stock/avatar/avatar3.png",
        review: "imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum has been the industry's imply dummy text of the printing and typesetting industry."
    }
];

const Feedback = () => {
    return (
        <div className='px-8 md:px-20 mb-20'>
            <h1 className='font-semibold text-3xl border-l-[6px] px-5 border-purple-600 mb-14'>Feedback</h1>
            <FeedbackSlider />
        </div>
    )
}

export default Feedback



const FeedbackSlider = () => {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])
    return (
        <div>
            <Swiper
                spaceBetween={0}
                slidesPerView={3}
                EffectFade
                pagination={{ clickable: true, }}
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
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}

            >
                {
                    feedabackData?.map((feedback, index) => (
                        <SwiperSlide key={index} >
                            <FeedbackCard {...feedback} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

