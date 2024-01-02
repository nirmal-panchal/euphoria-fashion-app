import React from 'react'
import { limelightData } from '@/constants/limelightdata'
import ProductCard from './common/ProductCard'
import { customStyles } from '@/styles/style'

const LimeLight = () => {
    return (
        <div className='px-8 md:px-20 mb-20'>
            <h1 className='font-semibold text-3xl border-l-[6px] px-5 border-purple-600 mb-14'>In The Limelight</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center'>
                {limelightData?.map((item) => (
                    <ProductCard
                        imageUrl={item?.imageUrl}
                        layout={"fill"}
                        objectFit={"cover"}
                        imageContainerClass={"relative w-[270px] h-96 mb-4"}
                        imageStyle={item?.imageStyle}
                        title={item?.title}
                        subTitle={item?.subTitle}
                        shape={customStyles?.shape?.large}
                        showWishListIcon={true}
                        price={item?.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default LimeLight