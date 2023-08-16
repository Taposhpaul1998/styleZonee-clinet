import React from 'react';
import HeaderIconsMenu from './HeaderIconsMenu';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const HederIconsModul = () => {
    const user = useSelector(state => state.user.user)
    const auth = useAuth()
    console.log(auth);
    return (
        <div className='w-[260px] bg-white transition p-4 absolute rounded-md top-40 right-4 z-20 shadow shadow-gray-500/40'>
            {
                auth ? <div>
                    <div className='border-b border-gray-200 pb-4'>
                        <div className='flex items-center justify-center'>
                            <div className='w-[85px]  mb-4'>
                                <img className='w-full rounded-full' alt='userImg' src={user?.imageUrl} />
                            </div>
                        </div>
                        <div className='text-center'>
                            <h4 className='text-lg mb-4 font-poppins font-medium text-gray-700'>{user?.name}</h4>
                        </div>
                    </div>
                    {/* Header icons menu start */}
                    <HeaderIconsMenu />
                    {/* Header icons menu end */}
                </div> :
                    <div className="px-2 ">
                        <div className='mb-2'>
                            <Link to={'/login'} className='text-center font-poppins font-medium text-lg  transition text-gray-500'>
                                <FontAwesomeIcon
                                    className='text-base text-gray-400 hover:text-gray-500 transition pr-2'
                                    icon={faArrowRightToBracket} />
                                LogIn</Link>
                        </div>
                        <div>
                            <Link to={'/singup'} className='text-center font-poppins font-medium text-lg transition text-gray-500'>
                                <FontAwesomeIcon
                                    className='text-base text-gray-400 hover:text-gray-500 transition pr-2'
                                    icon={faUserPlus} />
                                SingUp
                            </Link>
                        </div>
                    </div>
            }
        </div>
    );
};

export default HederIconsModul;