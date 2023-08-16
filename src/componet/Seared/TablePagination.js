import React, { useState } from 'react';

const TablePagination = ({ state, pageOptions, setPageSize, gotoPage }) => {

    const [active, setActive] = useState(0)

    // page button handler 
    const handlerPageBtn = (item) => {
        gotoPage(item)
        setActive(item)
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }

    // page size handler 
    const onChangeHandler = (pageSize) => {
        setPageSize(pageSize)
    }

    return (
        <div className='flex my-4 px-4'>
            <div>
                {
                    pageOptions.map(item => <button onClick={() => handlerPageBtn(item)} className={`border border-gray-400 rounded text-sm font-poppins font-semibold text-gray-700 ${active === item ? "bg-green-400 text-white" : ""} px-2 py-1 mr-2`}>{item + 1}</button>)
                }
            </div>
            <div>
                <span className='text-sm font-poppins font-semibold text-gray-500'>
                    Page{' '}
                </span>
                <strong className='text-base font-poppins font-semibold text-gray-700'>
                    {state.pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
                <select
                    className='text-sm font-poppins focus:outline-none font-semibold text-gray-700 border border-gray-300 rounded py-1 px-2'
                    value={state.pageSize}
                    onChange={(e) => onChangeHandler(Number(e.target.value))}
                >
                    {[10, 15, 20, 25].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default TablePagination;