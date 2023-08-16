import React from 'react';

const TotaleAmountTable = ({ SubTotalprice, shipping }) => {

    return (
        <div className='bg-gray-50 rounded-md p-4'>
            <div className=' pb-2 text-center'>
                <h5 className='text-md text-gray-800 font-poppins font-normal mb-2'>Your total payable amount is</h5>
                <h1 className='text-4xl mb-2 text-green-600 font-bold'>৳{SubTotalprice + shipping}</h1>
                <h3 className='text-xl text-gray-800 font-poppins font-medium'>Breakdown</h3>
            </div>
            <div className='my-4'>
                <div className='flex justify-between items-center border border-gray-200 '>
                    <div className='text-center py-1 w-[50%] border-r border-gray-200'>
                        <h4 className='text-md font-poppins text-gray-600 font-bold'>Purpose</h4>
                    </div>
                    <div className='text-center py-1 w-[50%]'>
                        <h4 className='text-md font-poppins text-gray-600 font-bold'>Amount</h4>
                    </div>
                </div>
                <div className='flex justify-between items-center border border-gray-200 '>
                    <div className='text-center py-1 w-[50%] border-r border-gray-200'>
                        <h4 className='text-md font-poppins text-gray-800 font-normal'>Total</h4>
                    </div>
                    <div className='text-center py-1 w-[50%]'>
                        <h4 className='text-md font-poppins text-green-600 font-normal'>৳{SubTotalprice + shipping}</h4>
                    </div>
                </div>
                <div className='flex justify-between items-center border-t-0 border border-gray-200 '>
                    <div className='text-center py-1 w-[50%] border-r border-gray-200'>
                        <h4 className='text-md font-poppins text-gray-800 font-normal'>Shipping</h4>
                    </div>
                    <div className='text-center py-1 w-[50%]'>
                        <h4 className='text-md font-poppins text-green-600 font-normal'>৳ {shipping}</h4>
                    </div>
                </div>
            </div>
            <div className='my-4 text-center'>
                <h5 className='text-md font-poppins text-gray-800 font-normal mb-2'>You will get the delivery <span className='text-green-600 font-bold'>within 2-3 Days</span> after confirmation.</h5>
            </div>
        </div>
    );
};

export default TotaleAmountTable;