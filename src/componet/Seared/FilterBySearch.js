import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';

const FilterBySearch = ({ setFilter, massage }) => {

    const { register, handleSubmit } = useForm()
    const handelSearch = (data) => {
        setFilter("name", data.search || undefined);
    }

    return (
        <div className='py-4 w-5/12 ml-6'>
            <form onSubmit={handleSubmit(handelSearch)} className='flex justify-between items-center border border-gray-300 rounded py-1 px-2 '>
                <FontAwesomeIcon onClick={handleSubmit(handelSearch)} className='pl-2 w-6 text-gray-500 pr-2' icon={faSearch} />
                <input
                    className='w-full focus:outline-none'
                    type={"search"}
                    placeholder={massage}
                    {...register("search")}

                />
            </form>
        </div>
    );
};

export default FilterBySearch;