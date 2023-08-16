import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useGetSingelOrderQuery } from '../../../../../features/productsApi/orderApi'
import OrderProductsDetals from './OrderProductsDetals';
import CustomerInfo from './CustomerInfo';
import OrderUpdateBtn from './OrderUpdateBtn';

const OrderDetals = ({ orderId, setOpenModul }) => {

    const { data: order } = useGetSingelOrderQuery(orderId)
    const {
        _id,
        coustomerInfoId,
        note,
        paymentMethod,
        totalPrice,
        productInfo,
        status,
        cancelNote,
        employerName } = order || {}




    return (
        <div className='fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-60 flex items-center justify-center z-10'>
            <div className='w-[980px] absolute z-20'>
                <div className='bg-white p-10 rounded'>
                    <div className='w-44 mx-auto text-center pb-2 mb-5 border-b-4 border-green-500'>
                        <h2 className='text-xl font-poppins font-semibold text-gray-500'>Order Detals</h2>
                    </div>
                    <div className='flex justify-between '>
                        <FontAwesomeIcon onClick={() => setOpenModul(false)} className='absolute top-3 right-4 text-xl text-red-500 cursor-pointer hover:rotate-180 transition' icon={faXmark} />

                        {/* customer Informetion  */}
                        <div>
                            <div className='w-[480px] border shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] p-8 rounded'>
                                <CustomerInfo coustomerInfoId={coustomerInfoId} />
                                {/* payment info and note  */}
                                <div>
                                    <h4
                                        className='text-base font-poppins font-medium text-gray-500 mb-1'>
                                        Total Price : <span
                                            className='text-base text-gray-600'>৳ {totalPrice}
                                        </span>
                                    </h4>
                                    <h4
                                        className='text-base font-poppins font-medium text-gray-500 mb-1'>
                                        Payment Method : <span
                                            className='text-base text-gray-600'>{paymentMethod}</span>
                                    </h4>
                                    <h4
                                        className='text-base font-poppins font-medium text-gray-500 mb-1'>
                                        Note : <span
                                            className='text-base text-gray-600'>{note}
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        {/* product Informetion  */}
                        <div>
                            {
                                productInfo?.map(product => <OrderProductsDetals key={product._id} product={product} />)
                            }
                        </div>

                    </div>
                    <div className='mt-6 '>
                        {/* update Buttons */}
                        <OrderUpdateBtn
                            status={status}
                            id={_id}
                            employerName={employerName}
                            cancelNote={cancelNote} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetals;