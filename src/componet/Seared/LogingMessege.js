import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const LogingMessege = () => {
    return (
        <div className='border-t-[3px] bg-gray-100 p-4 border-blue-700'>
            <h4 className='text-md font-poppins font-normal text-gray-500'><FontAwesomeIcon className='text-sm mr-2 text-blue-700' icon={faRightToBracket} /> Returning customer? <Link className='text-blue-700' to={'/login'}>Click here to login</Link> </h4>
        </div>
    );
};

export default LogingMessege;