import React from 'react';
import BrandCard from './cards/BrandCard';

const brandData = [
    { imageUrl: "/stock/brands/nike.png" },
    { imageUrl: "/stock/brands/h&m.png", style: "10% 10%" },
    { imageUrl: "/stock/brands/levis.png" },
    { imageUrl: "/stock/brands/puma.png" },
    { imageUrl: "/stock/brands/uspolo.png" },
];

const Brands = () => {
    return (
        <div className='px-4 sm:px-8 lg:px-12 xl:px-20 mb-8 sm:mb-12 rounded-xl'>
            <div className='bg-[#323232] text-white min-h-fit rounded-xl flex flex-col items-center justify-center gap-4 sm:gap-6 py-6 sm:py-8 px-4 sm:px-8 lg:px-12'>
                <h1 className='font-black text-4xl text-center'>Top Brands Deal</h1>
                <p className='text-lg pb-3 sm:pb-5 text-center'>Up To <span className='text-[#FBD103]'>60%</span> off on brands</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 justify-items-center'>
                    {brandData.map((brand, index) => (
                        <BrandCard key={index} {...brand} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Brands;
