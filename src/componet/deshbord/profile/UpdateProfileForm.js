import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useUpdateUserMutation } from '../../../features/userApi/UserApi';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const UpdateProfileForm = ({ user, setOpened }) => {
    const { _id, name, phoneNumber, district, address } = user || {}
    const { register, handleSubmit, reset } = useForm()
    const { uid } = useSelector(state => state.user.auth)
    const dispatch = useDispatch()

    const [updateUser, { isLoading, isSuccess, isError, error }] = useUpdateUserMutation()

    // handle Submit update form 
    const handleUpdateUserInfo = (data) => {
        dispatch(updateUser({
            id: _id,
            data,
            uid,
        }))
    }

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
            toast.success("Product Create is Successfull", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            reset()
            setOpened(false)
        }
    }, [isSuccess, isError, error, reset, setOpened])
    return (
        <div className='fixed top-0 transition left-0 bottom-0 right-0 bg-black bg-opacity-40 flex items-center justify-center z-10'>
            <div className='w-[480px] mx-auto bg-white border-2 border-gray-300 rounded drop-shadow-[7px_10px_10px_rgba(0,0,0,0.25)] p-4 absolute z-20'>
                <div>
                    <div className='border-b border-gray-300 py-4 mb-4'>
                        <h4 className='text-lg text-gray-700 font-poppins font-medium text-center'>Update Profile</h4>
                    </div>
                    <FontAwesomeIcon
                        className='absolute top-3 right-4 text-xl text-red-500 cursor-pointer'
                        onClick={() => setOpened(false)}
                        icon={faXmark} />
                    <form
                        className='px-4'
                        onSubmit={handleSubmit(handleUpdateUserInfo)} >
                        <div className='flex flex-col gap-2 mb-4'>
                            <label>
                                <span className="text-base text-gray-700 font-poppins font-medium pl-2 ">Name : </span>
                            </label>
                            <input
                                className='border border-gray-300 rounded text-base font-poppins font-medium py-1 px-2 text-gray-800 focus:outline-green-500'
                                name='name'
                                type='text'
                                defaultValue={name}
                                {...register("name")}
                            />
                        </div>
                        <div className='flex flex-col gap-2 mb-4'>
                            <label>
                                <span className="text-base text-gray-700 font-poppins font-medium pl-2 "> Phone Number: </span>
                            </label>
                            <input
                                className='border border-gray-300 rounded text-base font-poppins font-medium py-1 px-2 text-gray-800 focus:outline-green-500'
                                name='phoneNumber'
                                type='text'
                                defaultValue={phoneNumber}
                                {...register("phoneNumber")}
                            />
                        </div>
                        <div className='flex flex-col gap-2 mb-4'>
                            <label>
                                <span className="text-base text-gray-700 font-poppins font-medium pl-2 ">District: </span>
                            </label>
                            <input
                                className='border border-gray-300 rounded text-base font-poppins font-medium py-1 px-2 text-gray-800 focus:outline-green-500'
                                name='district'
                                type='text'
                                defaultValue={district}
                                {...register("district")}
                            />
                        </div>
                        <div className='flex flex-col gap-2 mb-7'>
                            <label>
                                <span className="text-base text-gray-700 font-poppins font-medium pl-2">Address: </span>
                            </label>
                            <input
                                className='border border-gray-300 rounded text-base font-poppins font-medium py-1 px-2 text-gray-800 focus:outline-green-500'
                                name='address'
                                type='text'
                                defaultValue={address}
                                {...register("address")}
                            />
                        </div>
                        <input
                            className='text-base text-white font-poppins font-medium bg-gray-800 py-2 w-full rounded'
                            disabled={isLoading}
                            type='submit'
                            value={"Submit"} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfileForm;