import React from 'react';
import { useNavigate } from 'react-router';
import Rating from '../../../../Seared/Rating';


const RelatedProduct = ({ product }) => {
    const { _id, name, price, imageURL, rating } = product || {}

    const navigate = useNavigate()
    const handelOnClick = () => {
        navigate(`/shop/${_id}`);
    }
    return (
        <div onClick={handelOnClick} className='w-44 border cursor-pointer'>
            <div className='mb-2'>
                <img className='max-w-full' src={imageURL} alt={`${name} product img`} />
            </div>
            <div className='text-center mb-2'>
                <h6 className='text-md text-gray-600 font-poppins font-semibold'>{name}</h6>
                <span className='text-sm text-gray-600 font-poppins font-semibold'>৳ {price}</span>
                <h4 className='text-sm text-gray-600 font-poppins font-semibold'> <Rating rating={rating} /></h4>
            </div>
        </div>
    );
};

export default RelatedProduct;