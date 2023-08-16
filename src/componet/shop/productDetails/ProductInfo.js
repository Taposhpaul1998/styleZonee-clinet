import React from 'react';
import Informetion from './productInfoOrderFavBtn/Informetion';
import OrderFavoriteBtn from './productInfoOrderFavBtn/OrderFavoriteBtn';
import TagCategories from './productInfoOrderFavBtn/TagCategories';

const ProductInfo = ({ product }) => {

    const { _id, imageURL, tags, name, category } = product || {};
    return (
        <div className=' mb-4 py-6 px-4'>
            <div className='flex justify-between pr-4'>
                <div className='py-8 px-5'>
                    <img src={imageURL} alt={name} />
                </div>
                <div className='p-4'>
                    {/* product info area  */}
                    <Informetion product={product} key={_id} />
                    {/* order and favorite product area  */}
                    <OrderFavoriteBtn key={_id} product={product} />
                    {/* tag and Categories area  */}
                    <TagCategories tags={tags} category={category} key={_id} />
                </div>
            </div>

        </div>
    );
};

export default ProductInfo;