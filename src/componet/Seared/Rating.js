import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Rating = ({ rating }) => {
    return (
        <>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i
                return <label>
                    < FontAwesomeIcon

                        className={`pr-1  ${(rating) <= ratingValue ? "text-gray-300" : "text-yellow-400"}`} icon={faStar} />
                </label>
            })}
        </>
    );
};

export default Rating;