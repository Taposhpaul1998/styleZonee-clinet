import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const TotalPayable = ({ Carts }) => {
    const [shipping, setShipping] = useState()
    const { location } = useSelector(state => state.Location)

    const SubTotalprice = Carts.reduce((total, product) => total + product.totalPrice, 0)

    useEffect(() => {
        if (location === "Dhaka") {
            setShipping(50)
        }
        else {
            setShipping(150)
        }
    }, [location])

    return (
        <div>
            <div className='border-b border-gray-200 mb-2 '>
                <div className='flex justify-between mb-3'>
                    <h4 className='text-lg font-poppins font-semibold text-gray-700'>Total Price:</h4>
                    <h4 className='text-lg font-poppins font-semibold text-gray-700'>৳ {SubTotalprice}</h4>
                </div>
                <div className='flex justify-between mb-3'>
                    <h4 className='text-lg font-poppins font-semibold text-gray-700'>Shipping:</h4>
                    <h4 className='text-lg font-poppins font-semibold text-gray-700'>৳ {shipping}</h4>
                </div>
            </div>
            <div className='flex justify-between'>
                <h4 className='text-lg font-poppins font-semibold text-gray-700'>Payable:</h4>
                <h4 className='text-lg font-poppins font-semibold text-gray-700'>৳ {SubTotalprice + shipping}</h4>
            </div>
        </div>
    );
};

export default TotalPayable;