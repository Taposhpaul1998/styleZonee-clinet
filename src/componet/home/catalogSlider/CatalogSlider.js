import React from 'react';
import ProductMenu from './ProductMenu/ProductMenu';
import Slider from './SlickSlider';

const CatalogSlider = () => {
    return (
        <div className='bg-white md:flex justify-between rounded'>
            {/* product catagory menu */}
            <div className='md:block hidden'>
                <ProductMenu />
            </div>
            {/* Slider Start */}
            <div className=' p-6'>
                <Slider />
            </div>
            {/* Slider end */}


        </div>
    );
};

export default CatalogSlider;