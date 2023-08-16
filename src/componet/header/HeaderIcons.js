import React, { useEffect, useRef, useState } from 'react';
import { faHeart, faSun } from '@fortawesome/free-regular-svg-icons';
import { faCartArrowDown, faMoon, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HederIconsModul from './Moduls/HederIconsModul';
import { useSelector } from 'react-redux';
import CartConteiner from '../cart/CartConteiner';
import { useGetUserByUidQuery } from '../../features/userApi/UserApi';
import { Link } from 'react-router-dom';

const HeaderIcons = ({ active }) => {
    const [icon, setIcon] = useState()
    const [opened, setOpened] = useState(false);
    const [dark, setDark] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const { Carts, favarite } = useSelector(state => state.Cart);
    const auth = useSelector(state => state.user.auth)
    const menuRef = useRef()
    const { uid } = auth || {}
    const { data: user } = useGetUserByUidQuery(uid)

    useEffect(() => {
        if (dark) {
            setIcon(faSun)
        }
        if (!dark) {
            setIcon(faMoon)
        }

    }, [dark])

    useEffect(() => {
        let hendel = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpened(false)
            }
        }
        if (!auth) {
            setOpened(false)
        }
        document.addEventListener("mousedown", hendel)
    }, [auth])


    return (
        <div className='flex items-center py-2 pl-4'>
            <div className='mr-4'>
                <Link
                    to={"/favarite"}
                    className='relative transition text-gray-500'>
                    <span className='absolute left-3 text-green-400 -top-5 text-md font-poppins font-medium'>{favarite.length}</span>
                    <FontAwesomeIcon className='text-2xl pt-3' icon={faHeart} />
                </Link>
            </div>
            <div className='mr-4'>
                <button
                    onClick={() => setCartOpen(!cartOpen)}
                    className='relative transition text-gray-500'>
                    <span className='absolute text-green-400 left-5 -top-2 text-md font-poppins font-medium'>{Carts.length}</span>
                    <FontAwesomeIcon className='text-2xl pt-3' icon={faCartArrowDown} />
                </button>
            </div>
            <div ref={menuRef}>
                {
                    auth ?
                        <div onClick={() => setOpened(!opened)}
                            className='w-[45px]'>
                            {user?.imageUrl ? <img className='rounded-full' src={user?.imageUrl} alt='user_image' /> :
                                <div className='text-center w-9 h-9 overflow-hidden rounded-full bg-slate-200 pt-3'>
                                    <FontAwesomeIcon className='text-zinc-400  text-2xl rounded-full' icon={faUser} />
                                </div>}
                        </div>
                        : <div className='text-center w-9 h-9 overflow-hidden rounded-full bg-slate-200 pt-3'>
                            <FontAwesomeIcon onClick={() => setOpened(!opened)} className='text-gray-400  text-2xl rounded-full' icon={faUser} />
                        </div>
                }
                {/* Heder Icons modul*/}

                <div className={`fixed right-4 transition z-20 ${active ? "-top-28" : "top-0"}`}>
                    {
                        opened && <HederIconsModul />
                    }
                </div>
                {/* cart modul  */}
                <CartConteiner setCartOpen={setCartOpen} cartOpen={cartOpen} />
            </div>
            <div onClick={() => setDark(!dark)} className='mx-3 w-12 border rounded-full flex justify-between'>
                <FontAwesomeIcon className={`text-2xl transition text-gray-400 ${dark ? " translate-x-5 " : ""}`} icon={icon} />

            </div>
        </div>
    );
};

export default HeaderIcons;