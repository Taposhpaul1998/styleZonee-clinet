import React from 'react';
import { useGetTopSellandViewProductsQuery } from '../../../features/productsApi/productApi';
import Product from '../../Seared/Product';

const TrendingProducts = () => {
    const sort = "-popularity"
    const limit = 12
    const { data: products } = useGetTopSellandViewProductsQuery({ limit, sort })

    return (
        <div className='bg-white my-10 rounded p-3'>
            <div className='pl-4 my-4'>
                <h2 className='text-xl font-poppins font-semibold text-gray-700'>Trending Products</h2>
            </div>
            {/* trending Products area */}
            <div className='grid grid-cols-2 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 gap-8 p-4'>
                {products?.map(product => <Product key={product.id} product={product} />)}
            </div>
        </div>
    );
};

export default TrendingProducts;