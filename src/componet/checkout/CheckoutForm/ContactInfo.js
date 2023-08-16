import React from 'react';
import validatePhoneNumber from '../../Seared/validatePhoneNumber';

const ContactInfo = ({ register, errors, user }) => {
    const { name, email, phoneNumber } = user || {}

    return (
        <div>
            <div className='mb-4'>
                <input
                    className={`w-full px-3 py-2 rounded text-md text-gray-600 font-normal ${errors.customerName ? "focus:outline-red-600" : "focus:outline-green-400"} border border-gray-300 outline-1`}
                    type="text"
                    name="customerName"
                    defaultValue={name}
                    placeholder='Full name'
                    {...register("customerName", { required: true })}
                />
            </div>
            <div className='my-4'>
                <input
                    className='w-[48%] px-3 py-2 mr-3 rounded text-md text-gray-600 font-normal focus:outline-green-400 border border-gray-300 outline-1'
                    type="email"
                    name="email"
                    defaultValue={email}
                    {...register("email")}
                    placeholder='Email'
                />
                <input
                    className={`w-[49%] px-3 py-2 ml-3 rounded text-md text-gray-600 font-normal ${errors.phoneNumber ? "focus:outline-red-600" : "focus:outline-green-400"}  border border-gray-300 outline-1`}
                    type="text"
                    name="phoneNumber"
                    defaultValue={phoneNumber}
                    placeholder='Phone number'
                    {...register('phoneNumber', { required: true, validate: validatePhoneNumber })}
                />

            </div>
            {
                errors.phoneNumber && <p className='text-sm text-center font-poppins font-normal text-red-600'>{errors.phoneNumber.message}</p>
            }
        </div>
    );
};

export default ContactInfo;