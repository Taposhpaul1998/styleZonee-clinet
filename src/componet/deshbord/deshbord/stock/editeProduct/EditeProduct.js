import React, { useEffect, useState } from 'react';
import { useGetProductQuery, useUpdateProductByIdMutation } from '../../../../../features/productsApi/productApi';
import { useForm } from 'react-hook-form';
import Loading from '../../../../ui/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import SizeSelector from '../../addProduct/SizeSelector';
import TagInput from '../../addProduct/TagInput';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const EditeProduct = ({ id, setEditeOpen }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [tags, setTags] = useState()
    const [size, setSize] = useState()
    const dispatch = useDispatch()

    const { data, isLoading, isSuccess: success } = useGetProductQuery(id)
    const { _id, name, description, quantity, size: previousSize, tags: productTags,
        offer } = data || {}

    const [updateProductById, { isLoading: updateLoading, isError, error, isSuccess }] = useUpdateProductByIdMutation()

    useEffect(() => {
        if (success) {
            setTags(productTags)
            setSize(previousSize)
        }
    }, [success, productTags, previousSize])

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
        if (isSuccess) {
            reset()
            setEditeOpen(false)
        }
    }, [isError, isSuccess, reset, error, setEditeOpen])


    // handle form submit 
    const hendalOnKeyUp = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
        }
    }
    const handleUpdateProduct = (data) => {
        const updateData = { ...data, tags, size }
        dispatch(updateProductById({ id: _id, data: updateData }))
    }

    return (
        isLoading ? <Loading /> : <div className='fixed top-0 left-0 bottom-0 right-0  bg-black bg-opacity-50 flex items-center justify-center z-10'>
            <div className='w-[675px] absolute z-20 bg-white p-5 rounded'>
                <h2 className='text-xl font-semibold text-start font-poppins text-gray-500'>Update Product</h2>
                <FontAwesomeIcon
                    onClick={() => setEditeOpen(false)}
                    className='absolute top-3 right-4 text-xl text-red-500 cursor-pointer hover:rotate-180 transition'
                    icon={faXmark} />
                <div className='mt-6 w-full bg-gray-200 p-3 rounded'>
                    <form
                        onSubmit={handleSubmit(handleUpdateProduct)}
                        onKeyPress={hendalOnKeyUp}
                        className='flex flex-col'>
                        {/* name area  */}
                        <label className='ml-5 text-base text-gray-500 font-poppins font-medium'>Product Name :</label>
                        <input
                            className={`border border-gray-300 ${errors.name && 'focus:outline-red-600'} rounded mx-4 my-2 focus:outline-none py-1 px-2`}
                            type="text"
                            name='name'
                            defaultValue={name}
                            placeholder='Product Name'
                            {...register("name", { required: true })} />
                        {/* description area  */}
                        <label className='ml-5 text-base text-gray-500 font-poppins font-medium'>Description :</label>
                        <textarea
                            className={`border border-gray-300 ${errors.Description && 'focus:outline-red-600'} rounded mx-4 my-2 focus:outline-none py-1 px-2`}
                            type="text"
                            name='description'
                            defaultValue={description}
                            placeholder='Description'
                            {...register("description", { required: true })} />
                        {/* product size area  */}
                        <label className='ml-5 text-base text-gray-500 font-poppins font-medium flex justify-between'>
                            <span>Update Size :</span>
                            <div className='mr-4'>
                                <span className='text-gray-400'>previous size is :
                                </span> {size?.map((item, index) =>
                                    <span key={index} className=' px-1 text-gray-500'>{item}</span>)}
                            </div>
                        </label>
                        <SizeSelector
                            size={size}
                            setSize={setSize}
                        />

                        {/* offer and quantity area  */}
                        <div className='mx-4 my-2 flex justify-between'>
                            {/* offer  */}
                            <div className='w-[48%]'>
                                <label className='text-base text-gray-500 font-poppins font-medium'>Offer % :</label>
                                <input
                                    className="w-full border border-gray-300 rounded focus:outline-none mt-2 py-1 px-2"
                                    type="Number"
                                    name='Offer'
                                    defaultValue={offer}
                                    placeholder='Add offer %'
                                    {...register("offer")} />
                            </div>
                            <div className='w-[48%]'>
                                <label className='text-base text-gray-500 font-poppins font-medium pb-1'>Quantity :</label>
                                <input
                                    className={`w-full border border-gray-300 rounded focus:outline-none ${errors.quantity && 'focus:outline-red-600'} mt-2 py-1 px-2`}
                                    type="Number"
                                    name='quantity'
                                    defaultValue={quantity}
                                    placeholder='Quantity'
                                    {...register("quantity", { required: true })} />
                            </div>
                        </div>
                        {/* tags area  */}
                        <label className='ml-5 text-base text-gray-500 font-poppins font-medium'>Update Tags :</label>
                        {isLoading ? <Loading /> : <TagInput
                            tags={tags}
                            setTags={setTags} />}

                        {/* submit btn area  */}
                        {
                            updateLoading ? <Loading /> :
                                <input
                                    className='bg-green-400 hover:bg-green-500 transition py-2 rounded text-white font-poppins mx-4 mt-4 mb-2'
                                    type="submit" />
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditeProduct;