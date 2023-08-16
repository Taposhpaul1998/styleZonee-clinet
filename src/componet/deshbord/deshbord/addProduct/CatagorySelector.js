import React from 'react';
import { useGetAllCatagoryQuery } from '../../../../features/productsApi/catagoryApi';

const CatagorySelector = ({ setcategoryId }) => {
    const { data: categorys } = useGetAllCatagoryQuery()

    return (
        <select className='w-[48%] border-2 focus:outline-none border-gray-300 rounded py-1 px-2'
            name='category'
            required
            onChange={(event) => setcategoryId(event.target.value)}
        >
            <option selected >Add Category</option>
            {
                categorys?.map(item => <option key={item._id} value={item._id}>{item.name}</option>)
            }
        </select>
    );
};

export default CatagorySelector;