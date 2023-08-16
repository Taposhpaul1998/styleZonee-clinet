import React from 'react';
import logo from '../../img/logo.jpg'

const Logo = () => {
    return (
        <div className='w-[75px] flex items-center'>
            <img src={logo} alt='stylezonee logo' />
        </div>
    );
};

export default Logo;