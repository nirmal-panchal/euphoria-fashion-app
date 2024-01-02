import React from 'react'
import { limelightData } from '@/constants/limelightdata'
import ProductCard from './common/ProductCard'
import { customStyles } from '@/styles/style'
import CustomTitle from './common/CustomTitle'

const LimeLight = () => {
    return (
        <div className='px-8 md:px-20 mb-20'>
            <CustomTitle value={"In The Limelight"} />
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