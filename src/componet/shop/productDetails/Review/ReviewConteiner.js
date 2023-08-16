import React, { useState } from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';
import { useParams } from 'react-router';
import { useGetReviewByProductIdQuery } from '../../../../features/productsApi/reviewApi';

const ReviewConteiner = () => {
    const [review, setReview] = useState(false)
    const params = useParams()
    const productId = params.productId
    const { data: reviews, isLoading, isError, error, isSuccess } = useGetReviewByProductIdQuery(productId)

    return (
        <div className='p-6'>
            <div className='border-b pb-2 px-4'>
                <h4 className='text-xl font-poppins font-semibold text-gray-700'>Reviews</h4>
            </div>
            <div>
                {/* add a review area */}
                {!review && <div className='mt-4 mb-6'>
                    <button onClick={() => setReview(!review)} className='px-3 py-2 rounded text-sm font-poppins font-medium bg-gray-600 transition hover:bg-gray-800 text-white'>Add Review</button>
                </div>}
                {review &&
                    <ReviewForm setReview={setReview} review={review} />
                }
                {/* view reviews area  */}
                <div className='max-h-[550px] overflow-y-auto scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200'>
                    {
                        reviews?.map(review => <Review review={review} key={review._id} />)
                    }
                </div>

            </div>
        </div>
    );
};

export default ReviewConteiner;