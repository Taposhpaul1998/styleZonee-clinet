import React from 'react';

const SelecteSize = ({ size, selectSize, setSelecteSize, setError }) => {

    const handelSizeSelect = (size) => {
        if (selectSize === size) {
            setSelecteSize('')
        }
        if (selectSize !== size) {
            setSelecteSize(size)
        }
        setError(undefined)
    }

    return (
        <div className='py-2'>
            <h3 className='text-lg text-gray-600 font-bold pr-6'>Selecte Size</h3>
            <div className='mt-4'>
                {
                    size?.map(item => <span
                        onClick={() => handelSizeSelect(item)}
                        className={`px-3 py-1 rounded cursor-pointer ${selectSize === item ? "bg-gray-800" : "bg-gray-600"} hover:bg-gray-800 transition text-base font-poppins font-semibold text-white m-1`}
                    >{item}</span>)
                }
            </div>
        </div>
    );
};

export default SelecteSize;