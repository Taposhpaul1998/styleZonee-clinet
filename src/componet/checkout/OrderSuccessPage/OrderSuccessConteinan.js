import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router';
import OrderProductsDetals from '../../deshbord/deshbord/orderProducts/OrderDetalsModul/OrderProductsDetals';

const OrderSuccessConteinan = ({ order, setOpenModul }) => {
    const { coustomerInfoId, note, paymentMethod, productInfo, totalPrice, _id, shipping } = order?.data || {}

    const navigate = useNavigate()

    const handelCloseModul = () => {
        setOpenModul(false)
        navigate("/shop/search")
    }

    return (
        <div className='fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 flex items-center justify-center z-10'>
            <div className='w-[980px] absolute z-20'>
                <div className='bg-white p-10 rounded'>
                    <div className='py-8'>
                        <h2 className='text-xl font-poppins text-center text-gray-500 font-semibold mb-2'>Thank you for your purchas!</h2>

                        <h1 className='text-5xl font-poppins text-center text-green-500 font-semibold py-2'> <FontAwesomeIcon icon={faCheckCircle} /></h1>

                        <h4 className='text-sm font-poppins text-center text-gray-500 font-semibold mb-2'>your order Id : {_id}</h4>
                    </div>
                    <div className='flex justify-between'>
                        <FontAwesomeIcon onClick={handelCloseModul} className='absolute top-3 right-4 text-2xl text-red-500 cursor-pointer hover:rotate-180 transition' icon={faXmark} />
                        <div>
                            {/* customer Informetion  */}
                            <div >
                                <div className='mb-2 pb-3 border-b'>
                                    <h4
                                        className='text-base font-poppins font-medium text-gray-500 mb-1'>
                                        Name : <span
                                            className='text-base text-gray-600'>{coustomerInfoId?.customerName}
                                        </span>
                                    </h4>
                                    <h4
                                        className='text-base font-poppins font-medium text-gray-500 mb-1'>
                                        Email : <span
                                            className='text-base text-gray-600'> {coustomerInfoId?.email}
                                        </span>
                                    </h4>
                                    <h4
                                        className='text-base font-poppins font-medium text-gray-500 mb-1'>
                                        Phone Number : <span
                                            className='text-base text-gray-600'>{coustomerInfoId?.phoneNumber}
                                        </span>
                                    </h4>
                                    <h4
                                        className='text-base font-poppins font-medium text-gray-500 mb-1'>
                                        Alt Number : <span
                                            className='text-base text-gray-600'>{coustomerInfoId?.altNumber}
                                        </span>
                                    </h4>
                                    <h4
                                        className='text-base font-poppins font-medium text-gray-500 mb-1'>
                                        District : <span
                                            className='text-base text-gray-600'>{coustomerInfoId?.district}
                                        </span>
                                    </h4>
                                    <h4
                                        className='text-base font-poppins font-medium text-gray-500 mb-1'>
                                        Delivery Address : <span
                                            className='text-base text-gray-600'>{coustomerInfoId?.deliveryAddress}
                                        </span>
                                    </h4>
                                </div>
                                <div>
                                    <h4
                                        className='text-base font-poppins font-medium text-gray-500 mb-1'>
                                        Shipping: <span
                                            className='text-base text-gray-600'>৳ {shipping}
                                        </span>
                                    </h4>
                                    <h4
                                        className='text-base font-poppins font-medium text-gray-500 mb-1'>
                                        Total Price: <span
                                            className='text-base text-gray-600'>৳ {totalPrice}
                                        </span>
                                    </h4>
                                    <h4
                                        className='text-base font-poppins font-medium text-gray-500 mb-1'>
                                        Payment Method: <span
                                            className='text-base text-gray-600'>{paymentMethod}</span>
                                    </h4>
                                    <h4
                                        className='text-base font-poppins font-medium text-gray-500 mb-1'>
                                        Note: <span
                                            className='text-base text-gray-600'>{note}
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div>
                            {
                                productInfo?.map(product => <OrderProductsDetals key={product._id} product={product} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccessConteinan;