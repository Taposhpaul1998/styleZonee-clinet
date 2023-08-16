import React from 'react';
import { useGetAllProductsQuery } from '../../features/productsApi/productApi';
import Product from '../Seared/Product';
import Error from '../ui/Error';
import Loading from '../ui/Loading';
import Filters from './filters/Filters';
import useCreateDynamicUrl from '../hooks/useCreateDynamicUrl';

const Shop = () => {
    const query = useCreateDynamicUrl()
    const { data: products, isError, isLoading, error } = useGetAllProductsQuery(query);


    // what to render 
    let component = null

    if (isLoading) {
        component = <Loading />
    }
    if (!isLoading && isError) {
        component = <Error message={error?.data?.message ? error?.data?.message : "No product found"} />
    }
    if (!isLoading && !isError && products?.length === 0) {
        component = <Error message={error?.data?.message ? error?.data?.message : "No product found"} />
    }
    if (!isLoading && !isError && products?.length > 0) {
        component = products?.map(product => <Product key={product.id} product={product} />)
    }

    return (
        <div className='bg-gray-100 py-10'>
            <div className='w-[1375px] mx-auto lg:flex justify-between'>
                {/* filters area  */}
                <Filters />

                {/* All products area */}
                <div className='w-full lg:w-[950px] bg-white rounded p-8 lg:p-9'>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-9'>
                        {component}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;