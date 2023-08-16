import React from 'react';
import ProductsCatagory from './ProductsCatagory';
import ProductTags from './ProductTags';
import Shorting from './Shorting';

const Filters = () => {
    return (
        <div>
            <div className='w-[380px] rounded'>
                {/* product shorting start  */}
                <Shorting />
                {/* product shorting end */}

                {/* Products Tag filter  */}
                <ProductTags />

                {/* Products Catagory filter  */}
                <ProductsCatagory />
            </div>
        </div>
    );
};

export default Filters;