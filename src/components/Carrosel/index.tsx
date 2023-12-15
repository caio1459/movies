import { ReactNode } from "react"
import Slider from 'react-slick'
import './carrosel.css'

interface ICarroselProps {
    children: ReactNode
}

export const Carrosel = ({ children }: ICarroselProps) => {

    const settings = {
        centerMode: true,
        infinite: true,
        variableWidth: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        speed: 500
    };

    return (
        <div>
            <Slider {...settings} >
                {children}
            </Slider>
        </div>
    )
}