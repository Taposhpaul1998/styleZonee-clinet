import Multiselect from 'multiselect-react-dropdown';
import React from 'react';

const SizeSelector = ({ setSize }) => {

    const optionSize = ["s", "m", "l", "xl", "xxl"]

    return (
        <div className='mx-4 my-2 '>
            <Multiselect
                className='border-0 rounded bg-white'
                isObject={false}
                options={optionSize}
                required
                placeholder="Add size"
                closeOnSelect={true}
                onRemove={(e) => setSize(e)}
                onSelect={(e) => setSize(e)}
            />
        </div>
    );
};

export default SizeSelector;