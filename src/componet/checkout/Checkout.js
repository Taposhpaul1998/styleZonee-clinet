import React from 'react';
import LogingMessege from '../Seared/LogingMessege';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const auth = useSelector(state => state.user.auth)

    return (
        <div className='w-[910px] rounded bg-white p-10'>
            <div className='mb-4'>
                <h2 className='text-2xl font-poppins font-semibold text-gray-700'>Checkout</h2>
            </div>

            {/*login massege  */}
            {
                !auth && <LogingMessege />
            }
            {/* Checkout Info*/}
            <div className='my-3 mx-2'>
                {/* Checkout form  */}
                <CheckoutForm />
            </div>
        </div>
    );
};

export default Checkout;