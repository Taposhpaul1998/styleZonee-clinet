import React from 'react';
import { useParams } from 'react-router';
import { useGetProductQuery } from '../../../features/productsApi/productApi';
import ProductDiscription from './discriptSizeTableReletedProduct/ProductDiscription';
import ProductInfo from './ProductInfo';
import SizeChartTable from './discriptSizeTableReletedProduct/SizeChartTable';
import RelatedProductsconteiner from './discriptSizeTableReletedProduct/relatedProductsConteiner/RelatedProductsconteiner';
import Loading from '../../ui/Loading';
import Error from '../../ui/Error';
import ReviewConteiner from './Review/ReviewConteiner';

const ProductDetailsConteiner = () => {

    const params = useParams();
    const { data: product, isLoading, isError, isSuccess, error } = useGetProductQuery(params.productId)

    // what to render 

    let component = null;

    if (isLoading) {
        component = <Loading />
    }

    if (!isLoading && isError) {
        component = <Error message={error?.data?.message ? error?.data?.message : "Orders is not found"} />
    }

    if (!isLoading && !isError && isSuccess) {
        component = <div className='flex justify-between'>
            <div className='w-[910px]'>
                <div className='mb-12 bg-white rounded'>
                    {/* product info  */}
                    <ProductInfo product={product} />
                </div>
                <div className=' bg-white rounded'>
                    {/* Additional information and Reviews area  */}
                    <ReviewConteiner />
                </div>
            </div>

            {/* product details and Related Products area */}
            <div className='bg-white w-[420px] p-6 rounded'>
                {/* product discription  */}
                <ProductDiscription discrip={product?.description} />
                {/* Size chart  */}
                <div className='border-b-2 border-gray-400 pb-4 mb-4'>
                    <h2 className='text-md text-gray-600 font-poppins font-semibold mb-3'>Size chart - In inches</h2>
                    {/*size table */}
                    <SizeChartTable />
                </div>
                {/* Related Products conteiner */}
                <RelatedProductsconteiner product={product} />
            </div>
        </div>
    }

    return (
        <div className='bg-gray-100 py-10'>
            <div className='w-11/12 mx-auto '>
                {
                    component
                }
            </div>
        </div>
    );
};

export default ProductDetailsConteiner;