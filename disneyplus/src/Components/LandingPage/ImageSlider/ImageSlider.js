/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './ImageSlider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Images = [
    {url: '/assets/images/slider-badging.jpg'},
    {url: '/assets/images/slider-badag.jpg'}
]


const ImageSlider = () => {
    var SliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <Slider {...SliderSettings} className="landingPage__slider">
            {
                Images.map((image, index) => {
                    return(
                        <div key={index} className="slider__slide">
                            <img src={image.url} className="slider__image" alt={`${index}-image`} />
                        </div>
                    );
                })
            }           
        </Slider>
    )
}

export default ImageSlider
