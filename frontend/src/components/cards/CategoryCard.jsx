import Image from 'next/image'
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


const CategoryCard = ({imageUrl,title,desc,style}) => {
    return (
        <div className='max-w-fit'>
            <div className='relative w-[270px] h-96 mb-4'>
                <Image style={style && {objectPosition:style}} src={imageUrl} className='rounded-xl shadow-md relative object-cover' fill />
            </div>
            <div className='flex justify-between'>
                <div>
                    <h1 className='font-bold '>{title}</h1>
                    <p className='font-medium text-sm text-[#7F7F7F]'>{desc}</p>
                </div>
                <button>
                    <IoIosArrowRoundForward size={44} />
                </button>
            </div>
        </div>
    )
}

export default CategoryCard