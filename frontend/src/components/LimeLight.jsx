import React from 'react'
import LimeLightCard from './cards/LimeLightCard'

const limelightData = [
    {
        imageUrl: "/stock/limelight/lime1.jpg",
        title: "Hoodies & Sweetshirt",
        desc: "Explore now!",
        price:"123",
    },
    {
        imageUrl: "/stock/limelight/lime2.jpg",
        title: "Hoodies & Sweetshirt",
        desc: "Explore now!",
        price:"123",
        style:"75% 10%"
    },
    {
        imageUrl: "/stock/limelight/lime3.jpg",
        title: "Hoodies & Sweetshirt",
        desc: "Explore now!",
        style:"20% 10%",
        price:"123",
    },
    {
        imageUrl: "/stock/limelight/lime4.jpg",
        title: "Hoodies & Sweetshirt",
        desc: "Explore now!",
        style:"55% 10%",
        price:"123",
    }
]


const LimeLight = () => {
    return (
        <div className='px-8 md:px-20 mb-20'>
            <h1 className='font-semibold text-3xl border-l-[6px] px-5 border-purple-600 mb-14'>In The Limelight</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center'>
                {limelightData?.map((item)=>(
                    <LimeLightCard {...item}/>
                ))}
            </div>
        </div>
    )
}

export default LimeLight