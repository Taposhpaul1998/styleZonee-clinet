import React from 'react';
import CatalogSlider from './catalogSlider/CatalogSlider';
import PromoSlider from './promoCategory/PromoSlider';
import TrendingProducts from './HomeProductsConteiner/TrendingProducts';
import TopSell from './HomeProductsConteiner/TopSell';
import LatestProduct from './HomeProductsConteiner/LatestProduct';

const Home = () => {
    return (
        <div className='bg-gray-100'>
            <div className='w-[1375px] mx-auto py-8'>
                {/* Main slider / top slider  */}
                <CatalogSlider />
                {/* Catagory Slider  */}
                <PromoSlider />
                {/* Trending Products  */}
                <TrendingProducts />
                {/* top selled products  */}
                <TopSell />
                {/* latest product  */}
                <LatestProduct />
            </div>
        </div>
    );
};

export default Home;