import React from 'react';
import logo from '../../../../img/logo-removebg.png'
import EmailLogin from './EmailLogin';
import SocileLogIn from '../SocileLogin/SocileLogIn';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
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
                        <img className='w-24 mb-4' src={logo} alt='Stylezonee.com logo' />

                        <h2 className='text-center text-xl text-gray-900 font-poppins font-semibold'>Login</h2>
                    </div>
                </div>
                {/* email loging  */}
                <div className='p-6 border-b border-gray-300'>
                    <EmailLogin />
                    <div className='pt-4'>
                        <h4 className='text-sm text-gray-700 font-poppins font-medium'>New user ? <Link className='text-blue-700 font-semibold' to={"/singup"} >Sing Up</Link></h4>
                    </div>
                </div>
                {/* socile login  */}
                <SocileLogIn />
            </div>
        </div>
    );
};

export default Login;