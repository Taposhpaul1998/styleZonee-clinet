import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AddRating = ({ setRating, setHover, hover, rating, setError }) => {
    const handleRating = (rating) => {
        setRating(rating)
        setError(false)
    }
    return (
        <>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i
                return <label>
                    <input
                        className='hidden'
                        type={"radio"}
                        name="rating"
                        value={ratingValue}
                        onClick={() => handleRating(ratingValue + 1)}

                    />
                    < FontAwesomeIcon
                        onMouseEnter={() => setHover(ratingValue + 1)}
                        onMouseLeave={() => setHover(null)}
                        className={`pr-1 cursor-pointer ${(hover || rating) <= ratingValue ? "text-gray-300" : "text-yellow-400"}`} icon={faStar} />
                </label>
            })}
        </>
    );
};

export default AddRating;