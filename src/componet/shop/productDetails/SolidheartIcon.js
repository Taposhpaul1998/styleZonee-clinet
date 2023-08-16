import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SolidheartIcon = () => {
    return (
        <FontAwesomeIcon className='pr-1 text-green-500' icon={faHeart} />
    );
};

export default SolidheartIcon;