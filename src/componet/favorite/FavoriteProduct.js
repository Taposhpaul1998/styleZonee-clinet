import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useGetProductQuery } from '../../features/productsApi/productApi';
import Rating from '../Seared/Rating';

const FavoriteProduct = ({ productId, handelRemoveFavoriteProduct }) => {
    const { data: product } = useGetProductQuery(productId)
    const { _id, imageURL, name, brand, color, price, rating } = product || {}

    return (
        <div className="relative w-80 mx-auto mb-4 border-2 border-gray-200 rounded shadow-lg shadow-gray-500/70 hover:shadow-gray-600/70">
            <div className='flex justify-between gap-2'>
                <div className='w-28'>
                    <img className=' max-w-full rounded' src={imageURL} alt={imageURL} />
                </div>
                <div className='p-1 mr-3'>
                    <h4
                        className='text-gray-700 text-base font-poppins font-semibold'>{name}</h4>

                    <h4
                        className='text-sm font-poppins font-semibold text-gray-600'>Price:
                        <span className='text-gray-700'>৳ {price}
                        </span>
                    </h4>
                    <h4
                        className='text-sm font-poppins font-semibold text-gray-600'>Color:
                        <span className='text-gray-700'> {color}
                        </span>
                    </h4>
                    <h4
                        className='text-sm font-poppins font-semibold text-gray-600'>Brand:
                        <span className='text-gray-700'> {brand}
                        </span>
                    </h4>
                    <h4
                        className='text-sm font-poppins font-semibold text-gray-600'>Rating: <Rating rating={rating} />
                    </h4>

                </div>
                <div className='absolute top-1 right-3'>
                    <button
                        onClick={() => handelRemoveFavoriteProduct(_id)}
                        className='text-red-500 transition hover:text-red-600 text-sm font-poppins font-semibold rounded'> <FontAwesomeIcon icon={faTrash} /></button>
                </div>
            </div>
        </div>
    );
};

export default FavoriteProduct;