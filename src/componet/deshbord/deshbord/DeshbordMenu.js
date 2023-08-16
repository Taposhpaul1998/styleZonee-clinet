import { faBarsProgress, faCartShopping, faFileCirclePlus, faFolderPlus, faSquarePlus, faUsers, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const DeshbordMenu = () => {
    const user = useSelector(state => state.user.user)
    return (
        <div className='w-[320px ]'>
            <div className=' bg-white p-4 rounded'>
                <div className='border-b-2 border-gray-300 mb-4 '>
                    <h2 className='text-xl font-poppins font-semibold text-gray-800 p-4 pl-8'>Welcome to deshbord</h2>
                </div>
                <div className='flex flex-col my-2 pl-8'>
                    <NavLink
                        className={({ isActive }) => `${isActive ? "text-gray-600" : "text-gray-500"} text-md font-poppins font-semibold  my-2`} to={"/deshbord/"}>
                        <FontAwesomeIcon className='mr-2 text-gray-400' icon={faBarsProgress} />
                        Stocks</NavLink>
                    <NavLink
                        className={({ isActive }) => `${isActive ? "text-gray-600" : "text-gray-500"} text-md font-poppins font-semibold  my-2`} to={"/deshbord/orders"}>
                        <FontAwesomeIcon className='mr-2 text-gray-400' icon={faCartShopping} />
                        Orders </NavLink>
                    {
                        user.roll === "admin" && <>
                            <NavLink
                                className={({ isActive }) => `${isActive ? "text-gray-600" : "text-gray-500"} text-md font-poppins font-semibold  my-2`} to={"/deshbord/addProduct"}>
                                <FontAwesomeIcon className='mr-2 text-gray-400' icon={faSquarePlus} />
                                Add Product </NavLink>
                            <NavLink
                                className={({ isActive }) => `${isActive ? "text-gray-600" : "text-gray-500"} text-md font-poppins font-semibold  my-2`} to={"/deshbord/addCatagory"}>
                                <FontAwesomeIcon className='mr-2 text-gray-400' icon={faFolderPlus} />
                                Add Catagory </NavLink>
                            <NavLink
                                className={({ isActive }) => `${isActive ? "text-gray-600" : "text-gray-500"} text-md font-poppins font-semibold  my-2`} to={"/deshbord/addSlider"}>
                                <FontAwesomeIcon className='mr-2 text-gray-400' icon={faFileCirclePlus} />
                                Add Slider </NavLink>
                            <NavLink className={({ isActive }) => `${isActive ? "text-gray-600" : "text-gray-500"} text-md font-poppins font-semibold  my-2`} to={"/deshbord/users"}><FontAwesomeIcon className='mr-2 text-gray-400' icon={faUsers} /> Customers </NavLink>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default DeshbordMenu;