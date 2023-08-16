import React from 'react';
import TablePagination from '../../../Seared/TablePagination';
import FilterBySearch from '../../../Seared/FilterBySearch';

const UserTable = ({ tableInstance, users }) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        setFilter,
        pageOptions,
        gotoPage,
        page,
        state,
        setPageSize
    } = tableInstance;

    return (
        <div className='border border-gray-300 rounded-md shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)]'>
            {/* search order  */}

            <div className='flex justify-between items-center mr-6'>
                <FilterBySearch setFilter={setFilter} massage={"Search Orders..."} />
                <div>
                    <h4 className='text-base text-gray-600 font-poppins font-semibold'>Total Users : <span className='text-gray-500'>{users?.length}</span></h4>
                </div>
            </div>

            {/* table hooks  */}
            <table {...getTableProps()} className='w-full'>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps()}
                                    className=" py-2 px-5 border-t border-b border-gray-300 text-center text-lg font-poppins font-medium text-gray-700"
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, index) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            className={` border-gray-300 p-2 border-b text-center text-sm text-gray-600 font-poppins font-medium`}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* page button  */}
            <TablePagination
                state={state}
                gotoPage={gotoPage}
                pageOptions={pageOptions}
                setPageSize={setPageSize}
            />
        </div>
    );
};

export default UserTable;