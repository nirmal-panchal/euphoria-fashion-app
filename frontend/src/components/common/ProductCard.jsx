import React from 'react'
import ImageComponent from './ImageComponent'
import { IoIosArrowRoundForward, IoMdHeartEmpty } from 'react-icons/io'

const ProductCard = ({ imageProps, title, subTitle, price, showWishListIcon }) => {
    return (
        <div className='max-w-fit'>
            <div className={`${imageProps?.imageStyle?.className}`}>
                <ImageComponent {...imageProps} />
                {showWishListIcon && <div className='absolute top-6 left-[220px] bg-[#FFFFFF] text-blackGray rounded-full p-2'>
                    <IoMdHeartEmpty />
                </div>}
            </div>
            <div className='flex justify-between'>
                <div>
                    <h1 className='font-bold'>{title}</h1>
                    {subTitle && <p className='font-medium text-sm text-[#7F7F7F]'>{subTitle}</p>}
                </div>
                {price ? <div className='bg-extraLightGray h-fit py-2 px-4 font-bold text-sm rounded-lg'>
                    $ {price}
                </div> :
                    <button>
                        <IoIosArrowRoundForward size={44} />
                    </button>
                }
            </div>

        </div >
    )
}

export default ProductCard