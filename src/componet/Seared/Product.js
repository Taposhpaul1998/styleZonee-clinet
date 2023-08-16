import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
    const { _id, name, price, imageURL, rating } = product || {}

    const handelScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className='w-150px md:w-[190px] bg-white transition hover:shadow-lg shadow-gray-500/70'>
            <div className='h-140px md:h-[200px]'>
                <img className='w-full h-full' alt='product' src={imageURL} />
            </div>
            <div className='border border-t-0 border-gray-100'>
                <div className='text-center py-2'>
                    <h4 className='text-md font-poppins font-medium text-gray-800'>{name}</h4>
                    <p className='text-md font-poppins font-medium text-gray-800'>৳ {price}</p>
                    <h4 className='text-md font-medium'>
                        <Rating rating={rating} />
                    </h4>
                </div>
                <div className='flex items-center justify-center pb-3'>
                    <Link
                        to={`/shop/${_id}`}
                        onClick={handelScroll} className='px-5 md:px-9 py-1 promoCard border border-gray-800 hover:bg-slate-900 transition hover:text-white text-sm  font-poppins font-medium'>Select options </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;