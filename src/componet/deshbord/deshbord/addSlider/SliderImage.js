import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useUpdateSliderMutation } from '../../../../features/productsApi/sliderApi';
import { toast } from 'react-toastify';

const SliderImage = ({ slider }) => {
    const { _id, imageURL, status } = slider || {}
    const [mouseHover, setmouseHover] = useState(false)
    const dispatch = useDispatch()

    const [updateSlider, { isSuccess, isError, error }] = useUpdateSliderMutation()

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
        }
    }, [isSuccess, isError, error])

    const handelMouseEnter = () => {
        setmouseHover(true)
    }

    const handelMouseLeave = () => {
        setmouseHover(false)
    }

    const handleUpdateSlider = (data) => {
        dispatch(updateSlider({ id: _id, data }))
    }

    return (
        <div className={`w-[280px] relative transition ${status === "active" && "border border-dotted border-green-500"}`}
            onMouseEnter={handelMouseEnter}
            onMouseLeave={handelMouseLeave}
        >
            {mouseHover && <div className='bg-black absolute w-full h-full bg-opacity-20 transition'>
                {status === "active" ? <button onClick={() => handleUpdateSlider("unactive")} className='bg-green-400 absolute top-[45%] left-[35%] text-white font-poppins font-medium text-md rounded px-2 py-1'>unactive</button> : <button onClick={() => handleUpdateSlider("active")} className='bg-green-400 absolute top-[45%] left-[40%] text-white font-poppins font-medium text-md rounded px-2 py-1'>active</button>}
            </div>}
            <img className='w-full' alt={imageURL} src={imageURL} />
        </div>
    );
};

export default SliderImage;