import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../../features/userApi/UserSlice';
import { useUserLogOutMutation } from '../../../features/userApi/UserApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faCartPlus, faLineChart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const HeaderIconsMenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const [userLogOut] = useUserLogOutMutation()

    const handleLogOut = () => {
        signOut(auth).then(() => {
            dispatch(logOutUser())
            dispatch(userLogOut())
        }).catch((error) => {
        });
    }

    return (
        <div className='flex flex-col items-start my-2 pl-4'>
            <Link className='text-lg font-poppins font-medium text-gray-700 my-1' to={"/profile"}>
                <FontAwesomeIcon className='text-base text-gray-400 hover:text-gray-500 transition pr-2' icon={faUser} />
                Profile</Link>
            {
                (user.roll === "employee" || user.roll === "admin") && <Link className='text-lg font-poppins font-medium text-gray-700 my-1' to={"/deshbord"}>
                    <FontAwesomeIcon className='text-base text-gray-400 hover:text-gray-500 transition pr-2' icon={faLineChart} />
                    Deshbord </Link>
            }
            <Link className='text-lg font-poppins font-medium text-gray-700 my-1' to={"/myOrder"}>
                <FontAwesomeIcon className='text-base text-gray-400 hover:text-gray-500 transition pr-2' icon={faCartPlus} />
                My Orders </Link>
            <span
                onClick={handleLogOut}
                className='text-lg font-poppins font-medium text-gray-700 cursor-pointer my-1'>
                <FontAwesomeIcon className='text-base text-gray-400 hover:text-gray-500 transition pr-2' icon={faArrowRightFromBracket} />
                LogOut </span>

        </div>
    );
};

export default HeaderIconsMenu;