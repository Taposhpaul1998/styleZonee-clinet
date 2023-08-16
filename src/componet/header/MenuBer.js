import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuBer = () => {

    const handelScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className='flex items-center'>
            <NavLink
                to={"/"}
                onClick={handelScroll}
                className={({ isActive }) => `${isActive ? "text-green-500" : "text-gray-500"} text-center font-poppins font-medium text-lg  hover:text-green-500 transition p-3`}>HOME</NavLink>
            <NavLink
                to={"/shop/search"}
                onClick={handelScroll}
                className={({ isActive }) => `${isActive ? "text-green-500" : "text-gray-500"} text-center font-poppins font-medium text-lg  hover:text-green-500 transition p-3`}>SHOP</NavLink>
            <NavLink
                to={"/about"}
                onClick={handelScroll}
                className={({ isActive }) => `${isActive ? "text-green-500" : "text-gray-500"} text-center font-poppins font-medium text-lg  hover:text-green-500 transition p-3`}>ABOUT</NavLink>
            <NavLink
                to={"/contact"}
                onClick={handelScroll}
                className={({ isActive }) => `${isActive ? "text-green-500" : "text-gray-500"} text-center font-poppins font-medium text-lg  hover:text-green-500 transition p-3`}>CONTACT</NavLink>
        </div>
    );
};

export default MenuBer;