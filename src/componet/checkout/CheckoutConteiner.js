import React from 'react';
import CartOverview from './CartOverview';
import Checkout from './Checkout';

const CheckoutConteiner = () => {


    return (
        <div className='py-10 bg-gray-100'>
            <div className=' w-[1375px] mx-auto lg:flex justify-between'>
                {/* checkout area  */}
                <Checkout />
                {/* Cart Overview  */}
                <div className='w-[420px] bg-white p-10 rounded'>
                    <CartOverview />
                </div>
            </div>
        </div>
    );
};

export default CheckoutConteiner;