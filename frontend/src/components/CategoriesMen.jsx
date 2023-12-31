import React from 'react'
import CategoryCard from './cards/CategoryCard'

const categoryData = [
    {
        imageUrl: "/stock/men/catmen1.jpg",
        title: "Hoodies & Sweetshirt",
        desc: "Explore now!"
    },
    {
        imageUrl: "/stock/men/catmen2.jpg",
        title: "Hoodies & Sweetshirt",
        desc: "Explore now!",
        style:"65% 10%"
    },
    {
        imageUrl: "/stock/men/catmen3.jpg",
        title: "Hoodies & Sweetshirt",
        desc: "Explore now!"
    },
    {
        imageUrl: "/stock/men/catmen4.jpg",
        title: "Hoodies & Sweetshirt",
        desc: "Explore now!"
    },
    {
        imageUrl: "/stock/new-arrival/new4.jpg",
        title: "Hoodies & Sweetshirt",
        desc: "Explore now!"
    },
    {
        imageUrl: "/stock/men/catmen5.jpg",
        title: "Hoodies & Sweetshirt",
        desc: "Explore now!"
    },
    {
        imageUrl: "/stock/men/catmen6.jpg",
        title: "Hoodies & Sweetshirt",
        desc: "Explore now!",
    },
    {
        imageUrl: "/stock/men/catmen7.jpg",
        title: "Hoodies & Sweetshirt",
        desc: "Explore now!",
        style:"90% 10%"
    },
]


const CategoriesMen = () => {
    return (
        <div className='px-8 md:px-20 mb-20'>
            <h1 className='font-semibold text-3xl border-l-[6px] px-5 border-purple-600 mb-14'>Categories For Men</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center'>
                {categoryData?.map((item)=>(
                    <CategoryCard {...item}/>
                ))}
            </div>
        </div>
    )
}

export default CategoriesMen