import React from 'react';

const Error = ({ message }) => {
    return (
        <div className='flex items-center'>
            <div className="relative bg-red-200 px-4 py-2 text-red-800 rounded shadow w-full">
                <span className="block text-sm font-poppins font-normal text-center">{message}</span>
            </div>
        </div>
    );
};

export default Error;