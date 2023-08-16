import React from 'react';

const Informetion = ({ product }) => {
    const { name, price, material, color, gsm } = product || {}
    return (
        <div>
            <div className='pt-4 pb-2'>
                <h2 className='text-2xl mb-2 text-gray-700 font-medium'>{name}</h2>
                <p className='text-md font-poppins font-normal text-gray-700'>Price: ৳ {price}</p>
            </div>
            <div className='mb-2'>
                <h4 className='text-md font-poppins font-normal mb-2 text-gray-700'>Material:   {material}</h4>
                <h4 className="text-md font-medium mb-1 text-gray-800">GSM: <span className='text-gray-500'>{gsm}</span></h4>
            </div>
            <div className='mb-2'>
                <h4 className='text-md font-poppins font-normal mb-2 text-gray-700'>Color: {color}</h4>
            </div>
        </div>
    );
};

export default Informetion;