import React from 'react';

const OrderProductsDetals = ({ product }) => {
    const { imageURL, name, size, quantity, price } = product || {}
    return (
        <div className="w-80 mb-4">
            <div className='flex justify-start gap-3'>
                <div className='pr-6 w-36'>
                    <img className=' max-w-full rounded' src={imageURL} alt={imageURL} />
                </div>
                <div className='p-2 '>
                    <h4 className='text-gray-700 text-lg font-poppins font-semibold'>{name}</h4>
                    <h4 className='text-base font-poppins font-semibold text-gray-600'>Size : <span className='text-sm text-gray-800'>{size}</span></h4>
                    <h4 className='text-base font-poppins font-semibold text-gray-600'>Quantity : <span className='text-sm text-gray-800'>{quantity}</span></h4>
                    <h4 className='text-base font-poppins font-semibold text-gray-600'>Price : <span className='text-sm text-gray-800'>৳ {price}</span></h4>
                </div>
            </div>
        </div>
    );
};

export default OrderProductsDetals;