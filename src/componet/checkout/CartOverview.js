import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProductInfo from './CheckoutProductInfo';

const CartOverview = () => {
    return (
        <div className=' '>
            <div className='flex mb-6 pb-4 border-b border-gray-200 items-center'>
                <h2 className='text-xl font-poppins font-semibold text-gray-700'>Cart Overview</h2>
                <Link className='mx-4 text-md font-poppins font-bold text-sky-700' to={"/shop"}>More Order</Link>
            </div>
            {/* product info  */}
            <CheckoutProductInfo />
        </div>
    );
};

export default CartOverview;