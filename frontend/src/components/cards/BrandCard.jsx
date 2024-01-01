import Image from 'next/image'
import React from 'react'


const BrandCard = ({ imageUrl, style }) => {
    return (
        <div className='w-52 h-24 mb-4 bg-white rounded-xl pt-4'>
            <div className='relative w-full h-20'>
                <Image style={style && { objectPosition: style }} src={imageUrl} className=' rounded-xl shadow-md relative object-contain' fill />
            </div>
        </div>

    )
}

export default BrandCard