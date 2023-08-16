import React from 'react';

const ProductDiscription = ({ discrip }) => {
    return (
        <div className='mb-6'>
            <div className='mb-2'>
                <h4 className='text-md font-poppins font-semibold text-gray-600'>Product Discription :</h4>
            </div>
            <div>
                <p className='text-sm font-poppins font-normal text-gray-500'>{discrip}</p>
            </div>
        </div>
    );
};

export default ProductDiscription;