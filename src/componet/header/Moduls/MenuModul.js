import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuModul = () => {
    return (
        <div className='w-[240px] bg-white transition p-4 absolute rounded-md top-36 left-2 z-20 shadow shadow-gray-500/40'>
            <div className='flex items-start flex-col pl-4'>
                <NavLink
                    to={"/"}
                    className='text-center font-poppins font-medium text-lg text-gray-600 hover:text-gray-900 p-3 pl-2'>HOME</NavLink>
                <NavLink
                    to={"/shop"}
                    className='text-center font-poppins font-medium text-lg text-gray-600 hover:text-gray-900 p-3'>SHOP</NavLink>
                <NavLink
                    to={"/about"}
                    className='text-center font-poppins font-medium text-lg text-gray-600 hover:text-gray-900 p-3'>ABOUT</NavLink>
                <NavLink
                    to={"/contact"}
                    className='text-center font-poppins font-medium text-lg text-gray-600 hover:text-gray-900 p-3'>CONTACT</NavLink>
            </div>
        </div>
    );
};

export default MenuModul;