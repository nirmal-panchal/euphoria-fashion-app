import Image from 'next/image'
import React from 'react'

const SavingZone = () => {
    return (
        <div className='px-8 md:px-20 mb-20'>
            <h1 className='font-semibold text-3xl border-l-[6px] px-5 border-purple-600 mb-16'>Big Saving Zone</h1>
            <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-5 mb-5'>
                <div className='relative w-full h-96'>
                    <Image src={"/stock/saving-zone/saving1.jpg"} fill className='relative object-cover rounded-xl object-left transform -scale-x-100' />
                </div>
                <div className='relative w-full h-96'>
                    <Image src={"/stock/saving-zone/saving2.jpg"} fill className='relative object-cover rounded-xl object-left ' />
                </div>
                <div className='relative w-full h-96'>
                    <Image src={"/stock/saving-zone/saving3.jpg"} fill className='relative object-cover rounded-xl object-center' />
                </div>
            </div>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='relative w-full h-96 '>
                    <Image src={"/stock/saving-zone/saving4.jpg"} fill className='relative object-cover rounded-xl object-center' />
                </div>
                <div className='relative w-full h-96 '>
                    <Image src={"/stock/saving-zone/saving5.jpg"} fill className='relative object-cover rounded-xl object-center' />
                </div>
            </div>
        </div>
    )
}

export default SavingZone