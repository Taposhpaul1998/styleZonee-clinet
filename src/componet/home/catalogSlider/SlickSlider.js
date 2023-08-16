import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider from '../../../img/Slider-1.png'

const SlickSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='lg:my-8 lg:mr-32 ml-30 w-full md:w-[440px] lg:w-[780px]'>
            <Slider {...settings}>
                <div>
                    <img src={slider} alt='slider' />
                </div>
                <div>
                    <img src={slider} alt='slider' />
                </div>
                <div>
                    <img src={slider} alt='slider' />
                </div>
            </Slider>

        </div>
    );
};

export default SlickSlider;