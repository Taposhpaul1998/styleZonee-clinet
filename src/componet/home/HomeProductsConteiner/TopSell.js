import React from 'react';
import Product from '../../Seared/Product';
import { useGetTopSellandViewProductsQuery } from '../../../features/productsApi/productApi';

const TopSell = () => {
    const { data: products } = useGetTopSellandViewProductsQuery()

    return (
        <div className='bg-white my-10 rounded p-3'>
            <div className='pl-4 my-4'>
                <h2 className='text-xl font-poppins font-semibold text-gray-700'>Top Sell</h2>
            </div>
            {/* top selles Products area */}
            <div className='grid grid-cols-2 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 gap-8 p-4'>
                {products?.map(product => <Product key={product.id} product={product} />)}
            </div>
        </div>
    );
};

export default TopSell;