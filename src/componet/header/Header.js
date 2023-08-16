import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import HeaderIcons from './HeaderIcons';
import Logo from './Logo';
import Navber from './Navber';
import ScrollUpBtn from './ScrollUpBtn';

const Header = () => {
    const [active, setActive] = useState(false)
    const [scrollUp, setScrollUp] = useState(false)

    window.onscroll = function () { myFunction() };
    function myFunction() {
        if (window.scrollY > 100) {
            setActive(true)
        } else {
            setActive(false)
        }
        if (window.scrollY > 1000) {
            setScrollUp(true)
        } else {
            setScrollUp(false)
        }
    }

    return (
        <>
            <div>
                {/* top header  */}
                <div className='py-4 border-b '>
                    <div className=' w-[1375px] mx-auto  flex items-center justify-between '>
                        {/* stylezonee logo  */}
                        <Logo />
                        {/* phone number  */}
                        <div className=''>
                            <h2><FontAwesomeIcon className='text-gray-500 font-poppins font-medium text-sm' icon={faPhone} /> : <span className='text-md text-gray-600 font-poppins font-medium'>01680499102</span> </h2>
                        </div>
                        {/* Header icons  */}
                        <HeaderIcons active={active} />
                    </div>
                </div>
                {/* Navber  */}
                <Navber active={active} />
            </div>
            {
                scrollUp && <ScrollUpBtn />
            }
        </>
    );
};

export default Header;