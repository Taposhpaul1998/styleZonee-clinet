import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { searchFilter } from '../../features/FiltersSlice/FilterSlice';


const SearchFild = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm()

    const handelSearch = (data) => {
        dispatch(searchFilter(data.search))
        navigate("/shop/search")
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className='flex items-center mr-2'>
            <div className='bg-gray-400'>
                <form onSubmit={handleSubmit(handelSearch)}>
                    <input
                        className='border border-gray-400 py-1 w-[200px] md:w-[400px] px-2 focus:outline-none'
                        type={"search"}
                        placeholder="Search Products..."
                        {...register('search')}

                    />
                    <FontAwesomeIcon onClick={handleSubmit(handelSearch)} className='pl-2 text-white pr-4 ml-2' icon={faSearch} />
                </form>

            </div>
        </div>
    );
};

export default SearchFild;