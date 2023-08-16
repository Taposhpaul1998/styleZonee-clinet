import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const EmptyMessage = ({ message }) => {
    return (
        <div className='border-t-[3px] bg-gray-100 p-4 border-blue-700'>
            <h4 className='text-md font-poppins font-normal text-gray-500'><FontAwesomeIcon className='text-sm mr-2 text-blue-700' icon={faCartShopping} /> {message}</h4>
        </div>
    );
};

export default EmptyMessage;