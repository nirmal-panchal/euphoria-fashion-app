import React from 'react'
import { categoryWomen } from '@/constants/Categorydata'
import ProductCard from './common/ProductCard'
import { customStyles } from '@/styles/style'
import CustomTitle from './common/CustomTitle'

const CategoriesWomen = () => {
    return (
        <div className='px-8 md:px-20 mb-20'>
            <CustomTitle value={"Categories For Women"} />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center'>
                {categoryWomen?.map((item) => (
                    <ProductCard
                        imageUrl={item?.imageUrl}
                        layout={"fill"}
                        objectFit={"cover"}
                        imageContainerClass={"relative w-[270px] h-96 mb-4"}
                        imageStyle={item?.imageStyle}
                        title={item?.title}
                        subTitle={item?.subTitle}
                        shape={customStyles?.shape?.large}
                    />
                ))}
            </div>
        </div>
    )
}

export default CategoriesWomen