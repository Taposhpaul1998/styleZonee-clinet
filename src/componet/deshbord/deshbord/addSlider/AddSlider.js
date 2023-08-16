import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useCreateSliderMutation, useGetsliderQuery } from '../../../../features/productsApi/sliderApi';
import Error from '../../../ui/Error';
import SliderImage from './SliderImage';

const AddSlider = () => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch()
    const [createSlider, { isSuccess, isError, error }] = useCreateSliderMutation()
    const { data: Sliders } = useGetsliderQuery()

    const addSlider = (data) => {
        let uplodeData = new FormData();
        uplodeData.append("imageURL", data.imgaeURL[0])
        dispatch(createSlider(uplodeData))
    }

    useEffect(() => {
        if (isError) {
            toast(error?.data?.message)
        }
        if (isSuccess) {
            toast("Slider image uplode successfull")
            reset()
        }
    }, [isError, isSuccess, error, reset])

    return (
        <div>
            <div className='flex justify-between border-b-2 border-green-400 pb-2'>
                <form onSubmit={handleSubmit(addSlider)}>
                    <input
                        className='border w- border-gray-300 rounded mx-4 my-2 focus:outline-green-400 py-1 px-2'
                        type="file"
                        name='imageURL'
                        placeholder='Image URL'
                        {...register("imgaeURL")}
                    />

                    <input
                        className='bg-green-400 hover:bg-green-500 transition px-4 py-2 rounded text-white mx-4 my-6'
                        type="submit" />
                </form>
                {
                    isError && <Error message={error?.data?.message} />
                }
            </div>
            <div className='py-6 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-6'>

                {
                    Sliders?.map(slider => <SliderImage slider={slider} key={slider._id} />)
                }

            </div>
        </div>
    );
};

export default AddSlider;