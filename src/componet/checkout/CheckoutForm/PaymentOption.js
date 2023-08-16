import React from 'react';
import bKashImg from '../../../img/bKash.png';
import cashDelivery from '../../../img/cash-delivary.png';

const PaymentOption = ({ register }) => {
    return (
        <div className='flex mb-8'>
            <div className='border rounded-md shadow-md shadow-gray-500/50 hover:border-green-700/50 px-2 py-4 mr-3'>
                <label className='flex'>
                    <input
                        type="radio"
                        name="paymentMethod"
                        value={'COD'}
                        checked="checked"
                        {...register("paymentMethod")}
                    />
                    <img className='w-[150px] ml-2 h-[44px]' alt='paymentMethod' src={cashDelivery} />
                </label>
            </div>
            <div className='border rounded-md shadow-md shadow-gray-500/50 hover:border-green-700/50 px-2 py-4'>
                <label className='flex'>
                    <input
                        type="radio"
                        name="paymentMethod"
                        value={'BKash pay'}
                        disabled
                        {...register("paymentMethod")}
                    />
                    <img className='w-[150px] ml-2 h-[35px]' alt='paymentMethod' src={bKashImg} />
                </label>
            </div>
        </div>
    );
};

export default PaymentOption;