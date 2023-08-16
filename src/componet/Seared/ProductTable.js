import React from 'react';

const ProductTable = ({ tableInstance }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    // row index event 
    const isEven = (index) => index % 2 === 0
    return (
        <table {...getTableProps()} className="border border-gray-400 m-auto">
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps()}
                                className="p-2 border-b border-l border-gray-400 text-lg font-poppins font-semibold text-gray-700"
                            >
                                {column.render('Header')}

                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, index) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        className={`${isEven(index) ? "bg-green-300 bg-opacity-50" : ""} border-gray-400 text-sm font-poppins font-semibold text-gray-700 p-2 border text-center`}
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
    );
};

export default ProductTable;