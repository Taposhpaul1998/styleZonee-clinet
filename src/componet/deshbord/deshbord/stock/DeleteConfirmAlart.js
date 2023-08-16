import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useDeleteProductMutation, useGetProductQuery } from '../../../../features/productsApi/productApi';
import Loading from '../../../ui/Loading';

const DeleteConfirmAlart = ({ setOpen, id }) => {
    const dispatch = useDispatch()
    const { data } = useGetProductQuery(id)
    const [deleteProduct, { isLoading, isError, error, isSuccess }] = useDeleteProductMutation()

    console.log(data);
    const handelCencal = () => {
        setOpen(false)
    }
    const handelConfirm = () => {
        dispatch(deleteProduct(id));
    }

    useEffect(() => {
        if (isSuccess) {
            setOpen(false)
            toast("Product delete Success full")
        }
        if (isError) {
            toast(error?.data?.message ? error?.data?.message : "Can't delete the product")
        }
    }, [isError, error, isSuccess, setOpen])

    return (
        <>
            {isLoading ?
                <Loading />
                :
                <div className='fixed top-0 left-0 bottom-0 right-0  bg-black bg-opacity-40 flex items-center justify-center z-10'>
                    <div className='bg-gray-700 absolute z-20 w-96 p-4 rounded'>
                        <div className='my-8 text-center'>
                            <h4 className='text-white text-base font-poppins font-semibold'>Are you sure you want to delete this item?</h4>
                        </div>
                        <div className='flex justify-center gap-4 mb-3'>
                            <img className='w-28 rounded' src={data?.imageURL} alt='product Imgae' />
                            <div>
                                <h4 className='text-lg text-white font-poppins font-semibold'>{data?.name}</h4>
                                <h6 className='text-base text-white font-poppins font-semibold'>Popularity : {data?.popularity}</h6>
                            </div>
                        </div>
                        <div className='flex justify-between py-3 px-6'>
                            <button onClick={() => handelCencal(false)} className='text-sm font-poppins font-medium text-white bg-red-500 transition hover:bg-red-600 px-4 py-2 rounded'>Cencal</button>
                            <button onClick={handelConfirm} className='text-sm font-poppins font-medium text-white bg-green-500 transition hover:bg-green-600 px-4 py-2 rounded'>Confirm</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default DeleteConfirmAlart;