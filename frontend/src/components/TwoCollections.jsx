import Image from 'next/image'
import React from 'react'

const TwoCollections = () => {
    return (
        <div className='grid lg:grid-cols-2 items-center px-6 sm:px-10 lg:px-20 pb-20 gap-8'>
            <div className='relative w-full h-72 md:h-96'>
                <Image src={"/stock/twoCol1.jpg"} className='rounded-lg absolute object-cover shadow-lg' fill />
            </div>
            <div className='relative w-full h-72 md:h-96'>
                <Image src={"/stock/twoCol2.jpg"} className='rounded-lg absolute object-cover shadow-lg' fill />
            </div>
        </div>
    )
}

export default TwoCollections


