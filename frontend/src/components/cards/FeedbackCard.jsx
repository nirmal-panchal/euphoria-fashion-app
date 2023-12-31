import Image from 'next/image';
import React from 'react'
import { FaRegStar } from "react-icons/fa";

const FeedbackCard = ({ review, avatar, title }) => {
    return (
        <div className='border-2 border-mediumGray p-6 w-auto rounded-xl mb-10'>
            <div className='flex justify-between items-center pb-5'>
                <Image src={avatar} width={56} height={56} className='rounded-full' />
                <div className='flex gap-1'>
                    <FaRegStar size={22} color='#EDD146' />
                    <FaRegStar size={22} color='#EDD146' />
                    <FaRegStar size={22} color='#EDD146' />
                    <FaRegStar size={22} color='#EDD146' />
                    <FaRegStar size={22} color='#EDD146' />
                </div>
            </div>
            <div>
                <h1 className='pb-5 text-2xl font-medium'>{title}</h1>
                <p className='text-sm text-darkGray'>{review}</p>
            </div>
        </div>
    )
}

export default FeedbackCard