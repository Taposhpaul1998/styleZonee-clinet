import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductMenu = () => {
    return (
        <div className='py-10 pl-10 w-[250px]'>
            <div className='flex items-center mb-4'>
                <FontAwesomeIcon className='text-xl text-gray-500 mr-2' icon={faList} />
                <h2 className='text-xl font-poppins font-medium text-gray-700'>All Products</h2>
            </div>
            <ul>
                <li className='border-b py-2 border-gray-200 flex items-center'>
                    <FontAwesomeIcon className='text-[5px] text-gray-700 mr-2' icon={faSquare} />   <Link className='text-mb text-gray-700 font-poppins font-normal' to={'*'}>T-shart</Link>
                </li>
                <li className='border-b py-2 border-gray-200 flex items-center'>
                    <FontAwesomeIcon className='text-[5px] text-gray-700 mr-2' icon={faSquare} />   <Link className='text-mb font-poppins text-gray-700 font-normal' to={'*'}>T-shart</Link>
                </li>
                <li className='border-b py-2 border-gray-200 flex items-center'>
                    <FontAwesomeIcon className='text-[5px] text-gray-700 mr-2' icon={faSquare} />   <Link className='text-mb font-poppins text-gray-700 font-normal' to={'*'}>T-shart</Link>
                </li>
                <li className='border-b py-2 border-gray-200 flex items-center'>
                    <FontAwesomeIcon className='text-[5px] text-gray-700 mr-2' icon={faSquare} />   <Link className='text-mb font-poppins text-gray-700 font-normal' to={'*'}>T-shart</Link>
                </li>

            </ul>
        </div >
    );
};

export default ProductMenu;