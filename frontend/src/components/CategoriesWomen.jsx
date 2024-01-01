import React from 'react'
import CategoryCard from './cards/CategoryCard'
import { categoryWomen } from '@/constants/Categorydata'
import ProductCard from './common/ProductCard'

const categoryData = [
    {
        imageUrl: "/stock/women/catwomen1.png",
        title: "Hoodies & Sweetshirt",
        desc: "Explore now!",
        style:"75% 10%"
    },
    {
        imageUrl: "/stock/women/catwomen2.png",
        title: "Hoodies & Sweetshirt",
        desc: "Explore now!",
        style:"35% 10%"
    },
    {
        imageUrl: "/stock/women/catwomen3.jpg",
        title: "Hoodies & Sweetshirt",
        desc: "Explore now!",
    },
    {
        imageUrl: "/stock/women/catwomen4.png",
        title: "Hoodies & Sweetshirt",
        desc: "Explore now!"
    }
]


const CategoriesWomen = () => {
    return (
        <div className='px-8 md:px-20 mb-20'>
            <h1 className='font-semibold text-3xl border-l-[6px] px-5 border-purple-600 mb-14'>Categories For Women</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center'>
                {categoryWomen?.map((item)=>(
                    <ProductCard {...item}/>
                ))}
            </div>
        </div>
    )
}

export default CategoriesWomen