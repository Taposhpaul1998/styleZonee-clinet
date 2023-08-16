import React from 'react';
import { useState } from 'react';

const ProfileImage = ({ id, imageUrl }) => {
    const [openeUpdate, setOpeneUpdate] = useState(false)
    return (
        <div className='mr-20'>
            <div className='w-[220px]'>
                <img className='w-full rounded-full' alt='userimg' src={imageUrl} />
            </div>
            <div className='mt-10 text-center'>
                <span
                    onClick={() => setOpeneUpdate(true)}
                    className='px-4 py-1 rounded bg-gray-600 hover:bg-gray-800 transition text-white font-poppins text-md font-semibold cursor-pointer'>Update Profile Image</span>
            </div>
        </div>
    );
};

export default ProfileImage;