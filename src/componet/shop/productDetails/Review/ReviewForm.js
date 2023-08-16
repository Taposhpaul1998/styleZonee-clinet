import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { useCreateReviewMutation } from '../../../../features/productsApi/reviewApi';
import AddRating from './AddRating';

const ReviewForm = ({ setReview, review }) => {
    const user = useSelector(state => state.user.user)
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const [error, setError] = useState(false)
    const [errorMassage, setErrorMassage] = useState()
    const params = useParams()
    const productId = params.productId

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const dispatch = useDispatch();

    const [createReview, { isLoading, isError, error: reviewError, isSuccess }] = useCreateReviewMutation()

    const handelReview = (data) => {
        const images = data.images
        if (rating === null) {
            setErrorMassage("Plase add rating")
            setError(true)
        }
        if (rating !== null) {
            let reviewData = new FormData()
            reviewData.append("comment", data.userComment)
            reviewData.append("rating", rating)
            reviewData.append("productId", productId)
            reviewData.append("userImageUrl", user?.imageUrl)
            reviewData.append("userName", user?.name)
            for (let i = 0; i < images.length; i++) {
                reviewData.append("images", images[i])
            }
            dispatch(createReview(reviewData))
        }
    }

    useEffect(() => {
        if (isError) {
            toast.error(reviewError?.data?.message, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
        if (isSuccess) {
            toast.success("Review add is Successfull", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            setReview(!review)
            reset()
        }
    }, [isSuccess, isError, reviewError, reset, setReview, review])

    return (
        <div>
            <div className='my-2'>
                <h4 className='text-md font-poppins font-medium text-gray-700'>Your rating <span className='text-red-700'>*</span></h4>
                <p className='text-sm transition  mt-1'>
                    {
                        <AddRating rating={rating} setRating={setRating} setHover={setHover} hover={hover} setError={setError} />
                    }
                </p>
            </div>
            {/* review input fild  */}
            <div className='my-3'>
                <form onSubmit={handleSubmit(handelReview)}>
                    <div className='mb-2 flex flex-col'>
                        <label htmlFor='review' className='text-md mb-1 font-poppins font-normal text-gray-700'>Your comment <span className='text-red-700'>*</span></label>
                        <textarea
                            name='comment'
                            className='w-3/4 h-20 border border-gray-300 p-2 focus:outline-none rounded'
                            placeholder='Place add your comment...'
                            required
                            {...register("userComment")}
                        />
                    </div>
                    <div className='mb-2 flex flex-col'>
                        <label className='text-md mb-1 font-normal font-poppins text-gray-700'>Add Image<span className='text-red-700'>*</span></label>
                        <input
                            className='w-3/4 border border-gray-300 p-2 focus:outline-none rounded'
                            type="file"
                            id="images"
                            name='images'
                            multiple
                            {...register("images", {
                                validate: {
                                    maxImages: images => images.length <= 3 || "Maximum of 3 images allowed."
                                }
                            })}
                        />
                        {errors.images?.message && <p className='text-red-500 mt-2'>{errors.images?.message}</p>}
                        {error && <p className='text-red-500 mt-2'>{errorMassage}</p>}

                    </div>
                    <input
                        className='border border-gray-300 px-4 py-2 rounded bg-gray-600 text-white font-poppins font-medium transition hover:bg-gray-800 mt-2'
                        type='submit'
                        disabled={isLoading}
                    />
                </form>

            </div>
        </div>
    );
};

export default ReviewForm;