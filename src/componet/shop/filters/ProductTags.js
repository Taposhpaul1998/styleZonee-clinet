import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagsFilters } from '../../../features/FiltersSlice/FilterSlice';
import { useGetTagsQuery } from '../../../features/productsApi/tagApi';
import Error from '../../ui/Error';
import Loading from '../../ui/Loading';

const ProductTags = () => {
    const dispatch = useDispatch();
    const { tag: selected } = useSelector(state => state.Filters)
    const { data: tags, isError, isLoading, error } = useGetTagsQuery()

    //    create unique Tag 
    const uniqueTags = tags?.reduce((prev, curr) => {
        return [...new Set([...prev, ...curr.tags])];
    }, []);

    // handel tags 
    const handelTags = (tag) => {
        if (tag !== selected) {
            dispatch(tagsFilters(tag))
        }
        if (tag === selected) {
            dispatch(tagsFilters(""))
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
        component = <Error message={error?.data?.message ? error?.data?.message : "Tag is not found"} />
    }
    if (!isLoading && !isError && uniqueTags.length > 0) {
        component = uniqueTags?.map(tag => <span
            onClick={() => handelTags(tag)} key={tag}
            className={`${tag === selected ? "border-gray-500" : "border-gray-300"} text-md cursor-pointer font-poppins font-medium text-gray-700 border hover:border-gray-500 px-2 transition py-1 `}>{tag}</span>)
    }


    return (
        <div className='my-10 bg-white p-8 rounded'>
            <div className='flex items-center justify-center mb-4 border border-gray-300 px-8 py-4 bg-gray-100'>
                <h2 className='text-md font-poppins font-semibold text-gray-700'>PRODUCT TAGS</h2>
            </div>
            <div className='pt-2 flex flex-wrap gap-3'>
                {component}
            </div>
        </div>
    );
};

export default ProductTags;