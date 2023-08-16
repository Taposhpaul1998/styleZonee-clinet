import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useCreateProductMutation } from '../../../../features/productsApi/productApi';
import CatagorySelector from './CatagorySelector';
import SizeSelector from './SizeSelector';
import TagInput from './TagInput';
import ReactLoading from 'react-loading'
import { useGetCatagoryIdQuery } from '../../../../features/productsApi/catagoryApi';


const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [tags, setTags] = useState([])
    const [size, setSize] = useState([])
    const [categoryId, setcategoryId] = useState()

    const dispatch = useDispatch()

    // get category by Id
    const { data: Category } = useGetCatagoryIdQuery(categoryId)

    const [createProduct, { isLoading, isError, isSuccess, error }] = useCreateProductMutation()

    // handle form submit 
    const hendalOnKeyUp = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
        }
    }
    const onSubmit = (data) => {
        let uplodeData = new FormData();
        uplodeData.append("brand", data.brand)
        uplodeData.append("category", categoryId)
        uplodeData.append("description", data.description)
        uplodeData.append("gsm", data.gsm)
        uplodeData.append("imageURL", data.imageURL[0])
        uplodeData.append("name", data.name)
        uplodeData.append("price", data.price)
        uplodeData.append("quantity", data.quantity)
        uplodeData.append("color", data.color)
        uplodeData.append("material", data.material)
        uplodeData.append("categoryQnty", Category.quantity)
        for (let i = 0; i < size.length; i++) {
            uplodeData.append("size[]", size[i])
        }
        for (let i = 0; i < tags.length; i++) {
            uplodeData.append("tags[]", tags[i])
        }

        dispatch(createProduct(uplodeData))
    };

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
            toast.success("Product Create is Successfull", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            reset()
            setTags([])
        }
    }, [isSuccess, isError, error, reset])


    return (
        <div className='px-8 pb-10'>
            <div className='w-3/4 mx-auto'>
                <div className='border-b-2 w-40 mx-auto pb-2 border-green-400'>
                    <h2 className='text-xl font-semibold text-center  text-gray-700'>Add Products</h2>
                </div>
                <div className='mt-6 w-full bg-gray-200 p-3 rounded'>
                    <form onSubmit={handleSubmit(onSubmit)} onKeyPress={hendalOnKeyUp} className='flex flex-col' encType={"multipart/form-data"}>
                        {/* name area  */}
                        <input
                            className={`border border-gray-300 ${errors.name && 'focus:outline-red-600'} rounded mx-4 my-2 focus:outline-none py-1 px-2`}
                            type="text"
                            name='name'
                            placeholder='Product Name'
                            {...register("name", { required: true })} />
                        {/* description area  */}

                        <textarea
                            className={`border border-gray-300 ${errors.Description && 'focus:outline-red-600'} rounded mx-4 my-2 focus:outline-none py-1 px-2`}
                            type="text"
                            name='description'
                            placeholder='Description'
                            {...register("description", { required: true })} />
                        {/* price and color area  */}

                        <div className='mx-4 my-2  flex justify-between'>
                            <input
                                className={`border w-[48%] ${errors.price && 'focus:outline-red-600'} border-gray-300 rounded focus:outline-none py-1 px-2`}
                                type="Number"
                                name='price'
                                placeholder='Price'
                                {...register("price", { required: true })} />
                            <input
                                className={`border ${errors.color && 'focus:outline-red-600'} w-[48%] border-gray-300 rounded focus:outline-none py-1 px-2`}
                                type="text"
                                name='color'
                                placeholder='color'
                                {...register("color", { required: true })} />
                        </div>

                        {/* product img and Material area  */}
                        <div className='mx-4 my-2  flex justify-between'>
                            <input
                                className={`border w-[48%] bg-white border-gray-300 rounded focus:outline-none ${errors.imageURL && 'focus:outline-red-600'} py-1 px-2`}
                                type="file"
                                name='imageURL'
                                placeholder='Image URLs'
                                {...register("imageURL", { required: true })}
                            />
                            <input
                                className={`border w-[48%] border-gray-300 rounded focus:outline-none ${errors.material && 'focus:outline-red-600'} py-1 px-2`}
                                type="text"
                                name='material'
                                placeholder='Material'
                                {...register("material", { required: true })} />
                        </div>
                        {/* product size area  */}
                        <SizeSelector
                            size={size}
                            setSize={setSize}
                        />
                        {/* category and gsm area  */}
                        <div className='mx-4 my-2 flex justify-between'>
                            {/* catagory  */}
                            <CatagorySelector
                                setcategoryId={setcategoryId}
                            />
                            {/* gsm  */}
                            <input
                                className={`w-[48%] border border-gray-300 rounded focus:outline-none ${errors.gsm && 'focus:outline-red-600'}  py-1 px-2`}
                                type="Number"
                                name='gsm'
                                placeholder='GSM'
                                {...register("gsm", { required: true })} />
                        </div>

                        {/* brand and quantity area  */}
                        <div className='mx-4 my-2 flex justify-between'>
                            <input
                                className={`border w-[48%] border-gray-300 rounded focus:outline-none ${errors.brand && 'focus:outline-red-600'} py-1 px-2`}
                                type="text"
                                name='brand'
                                placeholder='Brand'
                                {...register("brand", { required: true })} />

                            <input
                                className={`border w-[48%] border-gray-300 rounded focus:outline-none ${errors.quantity && 'focus:outline-red-600'} py-1 px-2`}
                                type="Number"
                                name='quantity'
                                placeholder='Quantity'
                                {...register("quantity", { required: true })} />
                        </div>

                        {/* tags area  */}
                        <TagInput
                            tags={tags}
                            setTags={setTags} />
                        {/* submit btn area  */}
                        {
                            isLoading ? <button className='bg-green-400 flex items-center justify-center py-2 rounded mx-4 my-6'><ReactLoading type={'spin'} color={'#ffffff'} height={'4%'} width={'4%'} /> <span className="text-white pl-4 font-poppins">Loading...</span> </button> :
                                <input
                                    className='bg-green-400 hover:bg-green-500 transition py-2 rounded text-white font-poppins mx-4 my-6'
                                    type="submit" />
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;