import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from '../../../../firebase/firebase.init';
import { useCreateUserMutation } from '../../../../features/userApi/UserApi';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import Loading from '../../Loading';

const EmailLogin = () => {
    const { handleSubmit, register, reset } = useForm()
    const [loginError, setLoginError] = useState()
    const [showPassword, setShowPassword] = useState()
    const dispatch = useDispatch()

    const [createUser, { isLoading, isError, error, isSuccess }] = useCreateUserMutation()

    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.message, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
        if (isSuccess) {
            reset()
        }
    }, [isError, error, isSuccess, reset])

    const handleLogin = (data) => {
        const email = data.email
        const password = data.password
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const userInfo = {
                    uid: user.uid
                }
                if (user) {
                    dispatch(createUser(userInfo))
                }
            })
            .catch((error) => {
                // const errorCode = error.code;
                if (error.code) {
                    const errorMessage = error.message;
                    setLoginError(errorMessage);
                }
            });
    }

    return (
        <form onSubmit={handleSubmit(handleLogin)}>
            <div className='mb-3'>
                <input
                    className='text-base font-poppins font-medium px-2 py-1 w-full rounded border border-gray-500 focus:outline-green-400'
                    type={"text"}
                    name="email"
                    placeholder='User Email'
                    required
                    {...register("email")}
                />
            </div>
            <div className='mb-3 rounded border border-gray-500'>
                <input
                    className='text-base font-poppins font-medium pl-2 py-1 w-[94%]   rounded focus:outline-none'
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder='Password'
                    {...register("password", {
                        pattern: /^(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/
                    })}
                />
                {
                    showPassword ? <FontAwesomeIcon onClick={() => setShowPassword(false)} className='text-sm text-center text-gray-500 cursor-pointer' icon={faEyeSlash} /> :
                        <FontAwesomeIcon onClick={() => setShowPassword(true)} className='text-sm text-center text-gray-500 cursor-pointer' icon={faEye} />
                }
            </div>
            {
                loginError && <p className='text-red-600 my-2'>{loginError}</p>
            }
            <div>
                {
                    isLoading ? <Loading />
                        : <input
                            type={"submit"}
                            value={"Sing Up"}
                            className="bg-white hover:bg-gray-900 hover:text-white transition text-center text-gray-900 border border-gray-500 text-base font-poppins font-medium py-1 w-full rounded"
                        />
                }
            </div>

        </form>
    );
};

export default EmailLogin;