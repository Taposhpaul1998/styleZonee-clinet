import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import ReactLoading from 'react-loading'
import { useCreateCatagoryMutation } from '../../../../features/productsApi/catagoryApi';
import Error from '../../../ui/Error';
import { toast } from 'react-toastify';


const AddCatagory = () => {
    const { register, handleSubmit, reset } = useForm();

    const dispatch = useDispatch();
    const [createCatagory, { isLoading, isError, isSuccess, error }] = useCreateCatagoryMutation()


    const onSubmit = (data) => {
        const { name, imageURL } = data
        let uplodeData = new FormData();
        uplodeData.append("imageURL", imageURL[0])
        uplodeData.append("name", name)
        dispatch(createCatagory(uplodeData))
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
            toast.success("Category Create is Successfull", {
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
        }
    }, [isError, isSuccess, reset, error])

    return (
        <div className='px-8 pb-10'>
            <div className='w-3/4 mx-auto'>
                <div className='border-b-2 w-40 mx-auto pb-2 border-green-400'>
                    <h2 className='text-xl font-semibold text-center  text-gray-700'>Add Catagory</h2>
                </div>
                <div className='mt-6 w-full bg-gray-200 p-3 rounded'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                        <input
                            className='border bg-white border-gray-300 rounded mx-4 my-2 focus:outline-green-400 py-1 px-2'
                            type="file"
                            name='imageURL'
                            placeholder='Image URL'
                            {...register("imageURL")}
                        />
                        <input
                            className='border bg-white border-gray-300 rounded mx-4 my-2 focus:outline-green-400 py-1 px-2'
                            type="text"
                            name='name'
                            required
                            placeholder='Product Name'
                            {...register("name")} />

                        {
                            isLoading ? <button className='bg-green-400 flex items-center justify-center py-2 rounded mx-4 my-6'><ReactLoading type={'spin'} color={'#ffffff'} height={'4%'} width={'4%'} /> <span className="text-white pl-4 font-poppins">Loading...</span> </button> :
                                <input
                                    className='bg-green-400 hover:bg-green-500 transition py-2 rounded text-white font-poppins mx-4 my-6'
                                    type="submit" />
                        }
                        {
                            isError && <div className='mx-4 my-1'><Error message={error?.data?.message} /></div>
                        }
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddCatagory;