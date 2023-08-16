import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { priceFilters, sortFilter } from '../../../features/FiltersSlice/FilterSlice';

const Shorting = () => {
    const dispatch = useDispatch()
    const { priceSort } = useSelector(state => state.Filters)
    const handelFilterPrice = (data) => {
        dispatch(priceFilters(data))
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const handelSorting = (data) => {
        if (data === "default") {
            dispatch(sortFilter(undefined))
        } else {
            dispatch(sortFilter(data))
        }
    }

    return (
        <div className='mb-6 bg-white p-8 rounded'>
            <div className='flex items-center justify-center mb-6 border border-gray-300 px-8 py-4 bg-gray-100'>
                <h2 className='text-md font-poppins font-semibold text-gray-700'>PRODUCT SHORTING</h2>
            </div>
            <div className='pb-4 border-b border-gray-200'>
                <select onChange={(e) => handelSorting(e.target.value)} className='border focus:outline-none border-gray-400 px-3 py-1 text-sm font-poppins text-gray-700 font-normal '>
                    <option selected value="default">Default sorting</option>
                    <option value="-popularity">Sort by popularity</option>
                    <option value="-updatedAt">Sort by latest</option>
                    <option value="-price">Sort by price: high to low</option>
                    <option value="price">Sort by price: low to high</option>
                </select>
            </div>
            <div className='mt-4'>
                <h4 className='text-md font-poppins font-medium text-gray-700 mb-2'>Price</h4>
                <div className='mt-2 pl-4'>
                    <h6
                        onClick={() => handelFilterPrice({ gte: 500, lte: 600 })} className={`font-poppins transition text-sm font-normal  hover:text-amber-500 ${priceSort?.gte === 500 ? "text-amber-500" : "text-gray-700"} py-1 cursor-pointer`}>৳ 500-600</h6>
                    <h6
                        onClick={() => handelFilterPrice({ gte: 700, lte: 800 })} className={`font-poppins transition text-sm font-normal hover:text-amber-500 ${priceSort?.gte === 700 ? "text-amber-500" : "text-gray-700"} py-1 cursor-pointer`}>৳ 700-800</h6>
                    <h6
                        onClick={() => handelFilterPrice({ gte: 900, lte: 1000 })} className={`font-poppins transition text-sm font-normal hover:text-amber-500 ${priceSort?.gte === 900 ? "text-amber-500" : "text-gray-700"} py-1 cursor-pointer`}>৳ 900-1000</h6>
                    <h6
                        onClick={() => handelFilterPrice({ gte: 1100, lte: 1500 })} className={`font-poppins transition text-sm font-normal hover:text-amber-500 ${priceSort?.gte === 1100 ? "text-amber-500" : "text-gray-700"} py-1 cursor-pointer`}>৳ 1100-1500</h6>
                </div>
                <div className='mt-3'>
                    <button onClick={() => handelFilterPrice(undefined)} className='bg-gray-700 transition hover:bg-gray-800 text-white px-3 py-1 font-poppins font-normal text-sm'>remove</button>
                </div>
            </div>
        </div>
    );
};

export default Shorting;