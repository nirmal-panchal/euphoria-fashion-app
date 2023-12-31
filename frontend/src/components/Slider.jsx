import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])
    return (
        <div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation
                autoplay
                EffectFade
                loop
                scrollbar={{ draggable: true,dragSize:44}}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                
            >
                <SwiperSlide style={{ width: '100%', height: '100%' }}>
                    <div className='relative w-full h-96 lg:h-[700px]'>
                        <Image src={"/stock/hero-slider/hero1.jpg"} className='object-cover ' fill />
                        <div className='absolute top-32 right-0 p-8'>
                            <h3 className='text-white font-medium text-2xl pb-8'>T-Shirt / Tops</h3>
                            <h1 className='text-6xl font-black text-white max-w-md pb-8'>Summer Value Pack</h1>
                            <h3 className='text-white font-medium text-2xl pb-8'>cool / colorful / comfy</h3>
                            <button className='bg-white py-4 px-16 text-xl rounded-lg font-bold'>Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-96 lg:h-[700px]'>
                        <Image src={"/stock/hero-slider/hero2.jpg"} className='object-cover object-top' fill />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-96 lg:h-[700px]'>
                        <Image src={"/stock/hero-slider/hero3.jpg"} className='object-cover  object-top' fill />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider
