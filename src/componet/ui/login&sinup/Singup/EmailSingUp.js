import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserMutation } from '../../../../features/userApi/UserApi';
import { useDispatch } from 'react-redux';
import Loading from '../../Loading';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const EmailSingUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPass, setShowConfirmPass] = useState(false)
    const { handleSubmit, register, reset, watch, formState: { errors } } = useForm()
    const password = watch("password");
    const auth = getAuth();
    const [authError, setAuthError] = useState()
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

    const handleSingUp = (data) => {
        const email = data.email
        const password = data.password
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const userInfo = {
                    name: data.name,
                    email: user.email,
                    uid: user.uid
                }
                if (user) {
                    dispatch(createUser(userInfo))
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                if (error.code) {
                    setAuthError(errorMessage);
                }

            });
    }

    return (
        <form onSubmit={handleSubmit(handleSingUp)}>
            <div className='mb-3 rounded border border-gray-500 '>
                <input
                    className='text-base font-poppins font-medium px-2 py-1 w-full  rounded focus:outline-none'
                    type="text"
                    name="name"
                    placeholder='Full name'
                    {...register("name")}
                />
            </div>
            <div className='mb-3 rounded border border-gray-500'>
                <input
                    className='text-base font-poppins font-medium px-2 py-1 w-full  rounded focus:outline-none'
                    type="email"
                    name="email"
                    placeholder='Email'
                    {...register("email")}
                />
                {
                    authError && <p className='mt-2 text-red-600'>{authError}</p>
                }
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
            {errors?.password && errors?.password?.type === "pattern" && <p className='pb-2 text-red-600 text-xm'>password at least 8 characters,1 number and 1 special character.</p>}
            <div className='mb-3 rounded border border-gray-500'>
                <input
                    className='text-base font-poppins font-medium pl-2 py-1 w-[94%]  rounded focus:outline-none'
                    type={showConfirmPass ? "text" : "password"}
                    name="confirmPass"
                    placeholder='Confirm password'
                    {...register("confirmPass", {
                        validate: value => value === password || "Passwords do not match"
                    })}
                />
                {
                    showConfirmPass ? <FontAwesomeIcon onClick={() => setShowConfirmPass(false)} className='text-sm text-center text-gray-500 cursor-pointer' icon={faEyeSlash} /> :
                        <FontAwesomeIcon onClick={() => setShowConfirmPass(true)} className='text-sm text-center text-gray-500 cursor-pointer' icon={faEye} />
                }

            </div>
            {errors?.confirmPass && errors?.confirmPass?.type === "validate" && <p className='pb-2 text-red-600 text-xm'>{errors.confirmPass.message}</p>}
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

export default EmailSingUp;