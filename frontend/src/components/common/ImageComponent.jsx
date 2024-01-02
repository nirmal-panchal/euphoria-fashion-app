import Image from 'next/image'
import React from 'react'

const ImageComponent = ({ imageUrl, imageClass, alt, width, height, layout, objectFit, imageStyle, style }) => {
    return (
        <Image style={imageStyle && { objectPosition: imageStyle }}
            src={imageUrl}
            alt={alt && alt}
            width={width && width}
            height={height && height}
            layout={layout && layout}
            objectFit={objectFit}
            loading="lazy"
            className={imageClass}
        />
    )
}

export default ImageComponent