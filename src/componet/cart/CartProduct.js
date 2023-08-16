import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartProduct = ({ cart, handelRemoveCartProduct }) => {
    const { id, imageURL, name, size, quantity, price } = cart || {}

    return (
        <div className="relative w-80 mx-auto mb-6 border-2 border-gray-200 rounded shadow-lg shadow-gray-500/70 hover:shadow-gray-600/70">
            <div className='flex justify-start gap-3'>
                <div className='w-28'>
                    <img className=' max-w-full rounded' src={imageURL} alt={imageURL} />
                </div>
                <div className='p-2'>
                    <h4
                        className='text-gray-700 text-base font-poppins font-semibold'>{name}</h4>

                    <h4
                        className='text-sm font-poppins font-medium text-gray-600'>Price :
                        <span className='text-gray-700'> ৳ {price}
                        </span>
                    </h4>

                    <h4
                        className='text-sm font-poppins font-medium text-gray-600'>Size :
                        <span className='text-gray-700'> {size}
                        </span>
                    </h4>

                    <h4
                        className='text-sm font-poppins font-medium text-gray-600'>Quantity :
                        <span className='text-gray-700'> {quantity}
                        </span>
                    </h4>
                </div>
                <div className='absolute top-2 right-3'>
                    <FontAwesomeIcon
                        onClick={() => handelRemoveCartProduct(id)}
                        className='text-red-500 transition hover:text-red-600 cursor-pointer text-xl'
                        icon={faTrashCan} />
                </div>
            </div>
        </div>
    );
};

export default CartProduct;