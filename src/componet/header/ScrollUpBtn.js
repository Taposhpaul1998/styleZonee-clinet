import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ScrollUpBtn = () => {
    const handleScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className='fixed bottom-10 right-10'>
            <FontAwesomeIcon onClick={handleScrollUp} className='text-gray-900 text-6xl' icon={faCircleChevronUp} />
        </div>
    );
};

export default ScrollUpBtn;