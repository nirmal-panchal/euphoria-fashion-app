import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const EverydayFashion = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='mb-20 flex flex-col md:flex-row px-8 md:px-20'>
      <div className='w-full md:w-1/2 h-96 md:h-[640px] relative'>
        <Image src={"/stock/everydayfashion.jpg"} fill className={`object-cover relative ${isMobile ? "rounded-xl" : "rounded-l-xl"} `} />
        <div className={`absolute inset-0 bg-black/70 ${isMobile ? "rounded-xl" : "rounded-l-xl"}`}></div>
        <div className='absolute inset-0 flex flex-col justify-center items-start text-white px-6 md:px-20'>
          <div>
            <h1 className='max-w-md font-extrabold text-xl sm:text-3xl mb-7'>WE MADE YOUR EVERYDAY FASHION BETTER!</h1>
            <p className='max-w-sm text-sm md:text-base mb-11'>In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</p>
            <button className='px-10 py-3 bg-white text-black font-semibold text-lg rounded-lg'>Shop Now</button>
          </div>
        </div>
      </div>
      <div className='hidden md:flex md:w-1/2 h-[640px] relative'>
        <Image style={{ objectPosition: '0 10%' }} src={"/stock/register.jpg"} fill className='object-cover relative rounded-r-xl' />
      </div>
    </div>
  )
}

export default EverydayFashion