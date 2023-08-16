import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import HeaderIcons from './HeaderIcons';
import Logo from './Logo';
import MenuBer from './MenuBer';
import MenuModul from './Moduls/MenuModul';
import SearchFild from './SearchFild';

const Navber = ({ active }) => {
    const [opened, setOpened] = useState(false)

    const controlMenuModal = () => {
        setOpened(!opened);
    };

    return (
        <>
            <div className={`border-b-2 py-3 transition ${active && "fixed top-0 z-10 w-full h-[13vh] bg-white border-gray-400"}`}>
                <div className='m-auto w-11/12 flex justify-between'>
                    <div className={`${active ? "block" : "hidden"}`}>
                        <Logo />
                    </div>
                    {/* menu ber */}
                    <div className='lg:block hidden'>
                        <MenuBer />
                    </div>
                    <div onClick={controlMenuModal} className='block lg:hidden'>
                        <FontAwesomeIcon className='text-gray-500 text-2xl' icon={faBars} />
                    </div>
                    {/* search fild  */}
                    <SearchFild />
                    {/* header icons */}
                    <div className={`${active ? "block" : "hidden"}`}>
                        <HeaderIcons active={active} />
                    </div>
                </div>
            </div>
            {/* MenuModul start  */}
            {
                opened && <MenuModul />
            }
            {/* MenuModul end  */}
        </>
    );
};

export default Navber;