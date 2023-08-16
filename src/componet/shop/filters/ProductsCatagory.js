import { faSnowflake } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryFilters } from '../../../features/FiltersSlice/FilterSlice';
import { useGetAllCatagoryQuery } from '../../../features/productsApi/catagoryApi'
import Error from '../../ui/Error';
import Loading from '../../ui/Loading'

const ProductsCatagory = () => {
    const dispatch = useDispatch()
    const { category } = useSelector(state => state.Filters)
    const { data: catagorys, isError, isLoading, error } = useGetAllCatagoryQuery()

    const handelCatagory = data => {
        if (data !== category) {
            dispatch(categoryFilters(data))
        }
        if (data === category) {
            dispatch(categoryFilters(""))
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    // what to render
    let component = null

    if (isLoading) {
        component = <Loading />
    }
    if (!isLoading && isError) {
        component = <Error message={error?.data?.message ? error?.data?.message : "Catagory is not found"} />
    }
    if (!isLoading && !isError && catagorys) {
        component = <>
            {
                catagorys?.map(catagory => (
                    <li key={catagory?._id} onClick={() => handelCatagory(catagory._id)} className={`${catagory._id === category ? "border-gray-500" : "border-gray-200"} border-b py-2 cursor-pointer  flex items-center justify-between`}>
                        <div className='flex items-center'>
                            <FontAwesomeIcon className='text-[8px] text-gray-700 mr-2' icon={faSnowflake} />
                            <span className='text-mb font-poppins text-gray-700 font-normal'>{catagory?.name}</span>
                        </div>
                        <div>  <span className='text-mb font-poppins text-gray-700 font-normal' >({catagory?.quantity
                        })</span></div>
                    </li>
                ))
            }</>
    }

    return (
        <div className='bg-white p-8 rounded'>
            <div className='flex items-center justify-center mb-4 border border-gray-300 px-8 py-4 bg-gray-100'>
                <h2 className='text-md font-poppins font-semibold text-gray-700'>PRODUCT CATEGORIES</h2>
            </div>
            <ul>
                {component}
            </ul>
        </div >
    );
};

export default ProductsCatagory;