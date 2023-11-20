import React from 'react'
import style from './banner.module.css'

interface IBannerProps {
    imageName: string
}

export const Banner: React.FC<IBannerProps> = ({ imageName }) => {
    return (
        <div
            className={style.banner}
            style={{ backgroundImage: `url('/images/banner-${imageName}.png')` }}
        >
        </div>
    )
}