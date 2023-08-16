import React from 'react';

const UserInfo = ({ user }) => {
    const { _id, name, email, phoneNumber, district, address } = user || {}
    return (
        <div className='mb-4'>
            <h5 className='text-lg mb-4 text-gray-700 font-poppins font-medium'>Name : {name}</h5>
            <h5 className='text-lg mb-4 text-gray-700 font-poppins font-medium'>Email : {email}</h5>
            <h2 className='text-lg mb-4 text-gray-700 font-poppins font-medium'>Phone: {phoneNumber}</h2>
            <h2 className='text-lg mb-4 text-gray-700 font-poppins font-medium'>Districk : {district}</h2>
            <h2 className='text-lg mb-4 text-gray-700 font-poppins font-medium'>Home address : {address}</h2>
        </div>
    );
};

export default UserInfo;