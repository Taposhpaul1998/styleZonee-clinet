import React from 'react';

const CustomerInfo = ({ coustomerInfoId }) => {
    const { customerName, email, phoneNumber, altNumber, district, deliveryAddress } = coustomerInfoId || {}
    return (
        <div className='mb-2 pb-3 border-b'>
            <h4
                className='text-base font-poppins font-medium text-gray-500 mb-1'>
                Name : <span
                    className='text-base text-gray-600'>{customerName}
                </span>
            </h4>
            <h4
                className='text-base font-poppins font-medium text-gray-500 mb-1'>
                Email : <span
                    className='text-base text-gray-600'>{email}
                </span>
            </h4>
            <h4
                className='text-base font-poppins font-medium text-gray-500 mb-1'>
                Phone Number : <span
                    className='text-base text-gray-600'>{phoneNumber}
                </span>
            </h4>
            <h4
                className='text-base font-poppins font-medium text-gray-500 mb-1'>
                Alt Number : <span
                    className='text-base text-gray-600'>{altNumber}
                </span>
            </h4>
            <h4
                className='text-base font-poppins font-medium text-gray-500 mb-1'>
                District : <span
                    className='text-base text-gray-600'>{district}
                </span>
            </h4>
            <h4
                className='text-base font-poppins font-medium text-gray-500 mb-1'>
                Delivery Address : <span
                    className='text-base text-gray-600'>{deliveryAddress}
                </span>
            </h4>
        </div>
    );
};

export default CustomerInfo;