import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../../img/logo-removebg.png'
import SocileLogIn from '../SocileLogin/SocileLogIn';
import EmailSingUp from './EmailSingUp';
import useAuth from '../../../hooks/useAuth';

const SingUp = () => {
    const userLoggedIn = useAuth();
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';

    if (userLoggedIn) {
        navigate(from, { replace: true });
    }

    return (
        <div className='flex items-center justify-center py-36 border-b border-gray-200'>
            <div className='w-[480px] mx-auto bg-white border-2 border-gray-300 rounded drop-shadow-[5px_10px_7px_rgba(0,0,0,0.25)] p-4'>
                <div className='flex justify-center'>
                    <div>

                        <img className='w-24 mb-3' src={logo} alt='Stylezonee.com logo' />
                        <h2 className='text-center text-xl text-gray-900 font-poppins font-semibold'>Sing Up</h2>
                    </div>
                </div>
                {/* email sing up  */}
                <div className='p-6 border-b border-gray-300'>
                    <EmailSingUp />
                    <div className='pt-4 flex justify-between'>
                        <h4 className='text-sm text-gray-700 font-poppins font-medium'>Already account ? <Link className='text-blue-700 font-semibold' to={"/login"} >Login now</Link></h4>
                    </div>
                </div>
                {/* socile login  */}
                <SocileLogIn />
            </div>
        </div>
    );
};

export default SingUp;