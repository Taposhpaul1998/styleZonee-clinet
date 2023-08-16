import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CheckoutProduct = ({ cart, handelRemoveCartProduct }) => {
    const { id, size, quantity, imageURL, price } = cart || {}

    return (
        <div className='flex pb-4 relative'>
            <div className='w-[100px] mx-4'>
                <img className='w-full' alt='productImg' src={imageURL} />
            </div>
            <div className='mx-2'>
                <div className='mb-2'>
                    <h4 className='text-lg font-poppins font-semibold text-gray-700'>Polo t-shert</h4>
                </div>
                <div className='flex justify-between'>
                    <h5 className='mr-4 text-md font-poppins font-medium text-gray-700'>Size: {size}</h5>
                    <h5 className='text-md font-poppins font-medium text-gray-700'>Pcs: {quantity}</h5>
                </div>
                <div>
                    <h5 className='text-md font-poppins font-medium text-gray-700'>Price: ৳ {price}</h5>
                </div>
            </div>
            <div className='absolute top-2 right-3'>
                <FontAwesomeIcon
                    onClick={() => handelRemoveCartProduct(id)}
                    className='text-red-500 transition hover:text-red-600 cursor-pointer text-xl'
                    icon={faTrashCan} />
            </div>
        </div>
    );
};

export default CheckoutProduct;