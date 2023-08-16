import React from 'react';
import { Link } from 'react-router-dom';
import poloImg from '../../../img/polo1.jpg'

const PromoSliderCard = () => {
    return (
        <div className='mx-2 bg-white w-[160px] h-[160px] md:w-[250px] md:h-[250px] p-4 rounded'>
            <div className='w-[130px] h-[130px] md:w-[220px] md:h-[220px] relative overflow-hidden rounded promoCard transition'>
                <img className='rounded transition absolute top-0 left-0 w-full h-full' alt='promoCatagory' src={poloImg} />
                <div className='h-[80px] relative text-center bg-white opacity-0 top-40 transition left-0 bottom-0 promoCardInfo'>
                    <h2 className='text-xl pt-1 pb-2 font-medium text-gray-700'>
                        <Link to={'*'}>T-shart</Link>
                    </h2>
                    <p className='text-mb font-normal text-gray-700'>20 Products</p>
                </div>
            </div>
        </div>
    );
};

export default PromoSliderCard;