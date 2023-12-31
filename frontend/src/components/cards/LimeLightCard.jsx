import Image from 'next/image'
import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";


const LimeLightCard = ({ imageUrl, title, desc, style, price }) => {
    return (
        <div className='max-w-fit'>
            <div className='relative w-[270px] h-96 mb-4'>
                <Image style={style && { objectPosition: style }} src={imageUrl} className='rounded-xl shadow-md relative object-cover' fill />
                <div className='absolute top-6 left-[220px] bg-[#FFFFFF] color-[#3C4242] rounded-full p-2'>
                    <IoMdHeartEmpty />
                </div>
            </div>
            <div className='flex justify-between'>
                <div>
                    <h1 className='font-bold '>{title}</h1>
                    <p className='font-medium text-sm text-[#7F7F7F]'>{desc}</p>
                </div>
                <div className='bg-[#F6F6F6] h-fit py-2 px-4 font-bold text-sm rounded-lg'>
                    $ {price}
                </div>
            </div>
        </div>
    )
}

export default LimeLightCard