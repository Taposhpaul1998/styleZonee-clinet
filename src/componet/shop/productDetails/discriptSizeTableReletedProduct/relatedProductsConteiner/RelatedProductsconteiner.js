import React from 'react';
import { useGetRelatedProductsQuery } from '../../../../../features/productsApi/productApi';
import Error from '../../../../ui/Error';
import Loading from '../../../../ui/Loading';
import RelatedProduct from './RelatedProduct';

const RelatedProductsconteiner = ({ product }) => {
    const { _id, category } = product || {}

    const { data: products, isLoading, isError, error, isSuccess } = useGetRelatedProductsQuery({ category: category?._id })

    const newProduct = products?.filter(item => item._id !== _id)

    // what to render 
    let component = null

    if (isLoading) {
        component = <Loading />
    }
    if (!isLoading && isError) {
        component = <Error message={error?.data?.message ? error?.data?.message : "No product found"} />
    }
    if (!isLoading && !isError && newProduct?.length === 0) {
        component = <Error message={"No related product found found"} />
    }
    if (!isLoading && isSuccess && newProduct.length > 0) {
        component = newProduct.map(product => <RelatedProduct product={product} key={product._id} />)
    }

    return (
        <div className=''>
            <h2 className='text-md text-gray-600 font-poppins font-semibold mb-3'>Related products</h2>
            <div className='flex flex-wrap gap-5'>
                {component}
            </div>
        </div>
    );
};

export default RelatedProductsconteiner;