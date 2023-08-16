import React from 'react';
import { useState } from 'react';

const ChangePassword = ({ id }) => {
    const [changePassword, setChangePassword] = useState(false)
    return (
        <div>
            <span
                onClick={() => setChangePassword(true)}
                className='text-lg mb-4 text-gray-700 font-poppins font-medium cursor-pointer'>Change Password </span>
        </div>
    );
};

export default ChangePassword;