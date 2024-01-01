import Image from 'next/image'
import React from 'react'

const ImageComponent = ({ imageUrl, alt, width, height, layout, objectFit, imageStyle, style }) => {
    return (
        <Image style={imageStyle?.style && { objectPosition: imageStyle?.style }}
            src={imageUrl}
            alt={alt && alt}
            width={width && width}
            height={height && height}
            layout={layout && layout}
            objectFit={objectFit}
            loading="lazy"
        />
    )
}

export default ImageComponent