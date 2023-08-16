import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useUpdateOrderMutation } from '../../../../../features/productsApi/orderApi';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const OrderUpdateBtn = ({ id, status, employerName, cancelNote }) => {
    const [open, setOpen] = useState(false)
    const [updateStatus, setUpdateStatus] = useState('')
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const [updateOrder, isError, error] = useUpdateOrderMutation()

    const handelOrderConfirmBtn = (data) => {
        dispatch(updateOrder({
            id: id,
            data: {
                "status": data
            }
        }))
    }
    const handelOrderCancelBtn = (data) => {
        setOpen(true)
        setUpdateStatus(data)
    }

    const handleOrderUpdateForm = (data) => {
        setOpen(false)
        dispatch(updateOrder({
            id: id,
            data: {
                "status": updateStatus,
                "employerName": data.employerName,
                "cancelNote": data.cancelNote
            }
        }))
    }
    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.message, {
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
    }, [isError, error])

    return (
        <div className="flex justify-start gap-3 items-center">
            <div>
                <h4 className='text-base font-poppins font-medium text-gray-500'>Status :
                    <span
                        className={`text-sm font-poppins font-medium rounded 
                ${(status === "Panding" && "bg-blue-100 text-blue-600") ||
                            (status === "Confirm" && "bg-green-100 text-green-500") ||
                            (status === "Cancel" && "bg-red-100 text-red-600") ||
                            (status === "Delivered" && "bg-cyan-100 text-cyan-500") ||
                            (status === "Return" && "bg-amber-100 text-amber-500")} py-2 px-4 ml-2`}>{status}</span></h4>
            </div>
            <div>
                {
                    (status === "Return" || status === "Cancel") ?
                        <div className='flex justify-start gap-2 items-center'>
                            <h4 className='text-base text-gray-500 font-poppins font-medium'>{status} by : {employerName}</h4> |
                            <h4 className='text-base text-gray-500 font-poppins font-medium'>{status} note : {cancelNote}</h4>
                        </div>
                        :
                        <div>
                            {
                                status === "Confirm" ? <div className='flex justify-start items-center'>
                                    <button
                                        onClick={() => handelOrderConfirmBtn("Delivered")}
                                        className={`text-sm font-poppins font-medium text-white rounded bg-cyan-500 py-2 px-4 mr-4`}>Delivered
                                    </button>
                                    <button
                                        onClick={() => handelOrderCancelBtn("Return")}
                                        className={`text-sm font-poppins font-medium text-white rounded bg-amber-500 py-2 px-4 mr-4 ${open ? "hidden" : "block"}`}>Return
                                    </button>
                                </div>
                                    : <div className='flex justify-start items-center'>
                                        <button
                                            onClick={() => handelOrderConfirmBtn("Confirm")}
                                            className={`text-sm font-poppins font-medium text-white rounded bg-green-400 hover:bg-green-500 py-2 px-4 mr-4  ${status === "Delivered" ? "hidden" : "block"}`}>Confirm
                                        </button>
                                        <button
                                            onClick={() => handelOrderCancelBtn("Cancel")}
                                            className={`text-sm font-poppins font-medium text-white rounded bg-red-500 py-2 px-4 ${(status === "Delivered" || open) ? "hidden" : "block"}`}>Cancel
                                        </button>
                                    </div>
                            }
                        </div>
                }

            </div>
            <div>
                {open &&
                    <form onSubmit={handleSubmit(handleOrderUpdateForm)} className='flex justify-start gap-2'>
                        <input
                            className='border bg-white border-gray-300 rounded  focus:outline-green-400 py-1 px-2'
                            type="text"
                            required
                            name='employerName'
                            placeholder='Your Name'
                            {...register("employerName")}
                        />
                        <input
                            className='border bg-white border-gray-300 rounded focus:outline-green-400 py-1 px-2'
                            type="text"
                            name='cancelNote'
                            required
                            placeholder='Note'
                            {...register("cancelNote")} />

                        <input
                            className='bg-green-400 hover:bg-green-500 transition py-1 px-3 rounded text-white font-poppins '
                            type="submit" />

                    </form>}
            </div>
        </div >
    );
};

export default OrderUpdateBtn;