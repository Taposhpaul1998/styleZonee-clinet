import React from 'react';
import Rating from '../../../Seared/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Review = ({ review }) => {
    const { rating, comment, userImageUrl, userName, imageURLs } = review || {}

    return (
        <div className='mt-4 mb-5 w-3/4'>
            {/* user info  and Rating */}
            <div className='mb-2 flex items-center justify-between'>
                {/* user info */}
                <div className='flex items-center pb-2'>
                    <div className='w-[30px]'>
                        {
                            userImageUrl ? <img className='w-full rounded-full ml-1' alt='userImg' src={userImageUrl} />
                                : <div className='w-8 h-8 flex justify-center items-center rounded-full bg-slate-200'>
                                    <FontAwesomeIcon className='text-lg text-gray-400 ' icon={faUser} />
                                </div>
                        }
                    </div>
                    <div className='ml-4'>
                        <h4 className='text-md font-poppins font-semibold text-gray-600'>{userName}</h4>
                    </div>
                </div>
                {/* review Rating  */}
                <div className='mr-2'>
                    <h4 className='text-sm mr-1 font-poppins font-medium text-gray-700'>Rating : {
                        <Rating rating={rating} />
                    }</h4>

                </div>
            </div>
            {/* review text  */}
            <div className=' border border-gray-300 p-2 rounded'>
                <p className='text-sm font-poppins font-normal text-gray-600'>
                    {comment}
                </p>
            </div>
            <div className='my-4 flex justify-start gap-3'>
                {
                    imageURLs?.length >= 0 && imageURLs?.map(imageUrl => < img
                        src={imageUrl}
                        alt={imageUrl}
                        key={imageUrl}
                        className='w-32 rounded'
                    />)
                }
            </div>
        </div>
    );
};

export default Review;