import React from 'react';

const SizeChartTable = () => {
    return (
        <table>
            <tr>
                <th className='border font-poppins text-sm font-semibold p-2 border-gray-300'>Size</th>
                <th className='border font-poppins text-sm font-semibold p-2 border-gray-300'>M</th>
                <th className='border font-poppins text-sm font-semibold p-2 border-gray-300'>L</th>
                <th className='border font-poppins text-sm font-semibold p-2 border-gray-300'>xL</th>
                <th className='border font-poppins text-sm font-semibold p-2 border-gray-300'>xxL</th>
            </tr>
            <tr>
                <td className='border font-poppins text-sm font-normal p-2 border-gray-300'>Waist (inch) </td>
                <td className='border font-poppins text-sm font-normal p-2 border-gray-300'>28'-30'</td>
                <td className='border font-poppins text-sm font-normal p-2 border-gray-300'>32'-34'</td>
                <td className='border font-poppins text-sm font-normal p-2 border-gray-300'>36'-38'</td>
                <td className='border font-poppins text-sm font-normal p-2 border-gray-300'>38'-42'</td>
            </tr>
            <tr>
                <td className='border font-poppins text-sm font-normal p-2 border-gray-300'>Half-Thigh (inch) </td>
                <td className='border font-poppins text-sm font-normal p-2 border-gray-300'>13.0'</td>
                <td className='border font-poppins text-sm font-normal p-2 border-gray-300'>13.4'</td>
                <td className='border font-poppins text-sm font-normal p-2 border-gray-300'>13.8'</td>
                <td className='border font-poppins text-sm font-normal p-2 border-gray-300'>14.2'</td>
            </tr>
            <tr>
                <td className='border font-poppins text-sm font-normal p-2 border-gray-300'>Length (inch) </td>
                <td className='border font-poppins text-sm font-normal p-2 border-gray-300'>37'</td>
                <td className='border font-poppins text-sm font-normal p-2 border-gray-300'>38'</td>
                <td className='border font-poppins text-sm font-normal p-2 border-gray-300'>39'</td>
                <td className='border font-poppins text-sm font-normal p-2 border-gray-300'>40'</td>
            </tr>

        </table>
    );
};

export default SizeChartTable;