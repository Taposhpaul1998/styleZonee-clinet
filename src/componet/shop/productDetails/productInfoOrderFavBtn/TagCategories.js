import React from 'react';

const TagCategories = ({ category, tags }) => {

    return (
        <div className='my-2'>
            <h4 className="text-md font-medium mb-1 text-gray-800">Categories: <span className='text-gray-500'>{category?.name} </span></h4>
            <h4 className="text-md font-medium mb-1 text-gray-800">Tag: {
                tags?.map(item => <span className='text-gray-500'>{item} </span>)
            }</h4>
        </div>
    );
};

export default TagCategories;