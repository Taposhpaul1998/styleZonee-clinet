import { faInstagram, faLinkedin, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='w-[1375px] mx-auto py-10 flex justify-center'>
                {/* aboute us  */}
                <div className='w-[320px] mr-8'>
                    <h2 className='text-xl font-medium text-gray-700 mb-4'>About Us</h2>
                    <p className='text-sm font-normal text-gray-600'>
                        Khacha creates original works of art and then paint them on Saree, Panjabi, T-Shart, One Piece and Dresses for everyday wear… <span className='text-md font-bold text-gray-800'>learn more</span>.
                    </p>
                </div>
                {/* contact Us */}
                <div className='w-[320px] ml-8'>
                    <h2 className='text-xl font-medium text-gray-700 mb-4'>Contact Us</h2>
                    <p className='text-sm font-normal pb-2 text-gray-600'> <FontAwesomeIcon icon={faLocationDot} /> 194/A Monaffer More, Motihar, Rajshahi 6204</p>
                    <p className='text-sm font-normal pb-2 text-gray-600'> <FontAwesomeIcon icon={faPhone} /> +880 171 913 2020, +1 302 261 2666</p>
                    <p className='text-sm font-normal pb-2 text-gray-600'><FontAwesomeIcon icon={faEnvelopeOpen} /> info@khacha.com.bd</p>
                </div>
            </div>
            {/* footer border  */}
            <div className='border-b border-gray-200 pt-[2px]' ></div>
            {/* footer bottom  */}
            <div className='w-[1375px] mx-auto mx-auto py-6 flex items-center justify-between'>
                <div>
                    <Link className='mx-1' to={"*"}><FontAwesomeIcon className='text-2xl text-gray-500' icon={faSquareFacebook} /></Link>
                    <Link className='mx-1' to={"*"}><FontAwesomeIcon className='text-2xl text-gray-500' icon={faInstagram} /></Link>
                    <Link className='mx-1' to={"*"}><FontAwesomeIcon className='text-2xl text-gray-500' icon={faLinkedin} /></Link>
                </div>
                <div>
                    <h4 className='text-sm font-semibold text-gray-500 '> Stylezonee | &copy; 2022</h4>
                </div>
            </div>
        </div>
    );
};

export default Footer;