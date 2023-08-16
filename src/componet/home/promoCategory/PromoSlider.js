import React from 'react';
import Slider from "react-slick";
import PromoSliderCard from './PromoSliderCard';
import { useGetAllCatagoryQuery } from '../../../features/productsApi/catagoryApi';

const PromoSlider = () => {

    const { data } = useGetAllCatagoryQuery()
    // console.log(data);

    let settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='bg-gray-100 my-10 '>
            <Slider {...settings}>
                <PromoSliderCard />
                <PromoSliderCard />
                <PromoSliderCard />
                <PromoSliderCard />
                <PromoSliderCard />
                <PromoSliderCard />
                <PromoSliderCard />
                <PromoSliderCard />
            </Slider>
        </div>
    );
};

export default PromoSlider;
