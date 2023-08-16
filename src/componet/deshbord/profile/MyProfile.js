import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProfileImage from './ProfileImage';
import ChangePassword from './ChangePassword';
import UserInfo from './UserInfo';
import UpdateProfileForm from './UpdateProfileForm';

const MyProfile = () => {
    const user = useSelector(state => state.user.user)
    const { _id, imageUrl } = user || {}

    const [opened, setOpened] = useState(false)


    return (
        <div className='py-10 bg-slate-100'>
            <div className='w-[1375px] mx-auto p-10 bg-white rounded'>
                <div className='mb-4 pb-4 px-20 border-b-2 border-gray-300 flex justify-between'>
                    <h2 className='text-2xl font-poppins font-bold text-gray-700'>My Profile</h2>
                    <span
                        onClick={() => setOpened(true)}
                        className='text-base text-gray-700 font-poppins font-medium cursor-pointer'><FontAwesomeIcon className='text-sm text-gray-600' icon={faPen} /> Update Profile</span>
                </div>
                <div className='flex justify-center gap-10 my-10'>
                    {/* Profile Image area  */}
                    <ProfileImage id={_id} imageUrl={imageUrl} />

                    <div className='px-6 ml-4'>
                        {/* user informetion area  */}
                        <UserInfo user={user} />
                        {/* Change Password area */}
                        <ChangePassword id={_id} />
                    </div>
                </div>
                {
                    opened && <UpdateProfileForm user={user} setOpened={setOpened} />
                }
            </div>
        </div>
    );
};

export default MyProfile;