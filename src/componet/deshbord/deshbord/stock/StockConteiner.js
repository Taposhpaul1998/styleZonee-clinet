import React from 'react';
import { useGetProductsWithFullDataQuery } from '../../../../features/productsApi/productApi';
import { usePagination, useFilters, useSortBy, useTable } from 'react-table'
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Error from '../../../ui/Error';
import Loading from '../../../ui/Loading';
import StockProductTable from './StockProductTable';
import DeleteConfirmAlart from './DeleteConfirmAlart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import EditeProduct from './editeProduct/EditeProduct';
import { useSelector } from 'react-redux';

const StockConteiner = () => {
    const [products, SetProducts] = useState([])
    const [open, setOpen] = useState(false)
    const [editeOpen, setEditeOpen] = useState(false)
    const [id, setId] = useState()

    const user = useSelector(state => state.user.user)

    // get product data 
    const { data: stockProduct, isLoading, isError, error } = useGetProductsWithFullDataQuery();

    // set product data using useEffect 
    useEffect(() => {
        if (stockProduct?.length >= 0) {
            SetProducts(stockProduct)
        }
    }, [stockProduct])


    // Handle Update Product
    const handleUpdateProduct = (id) => {
        setEditeOpen(true)
        setId(id)
    }

    // delete product handaler 
    const handelDeleteProduct = (id) => {
        setOpen(true)
        setId(id)
    }


    // react table hooks 
    const data = useMemo(() => products, [products]);
    //  table columns 
    const columns = useMemo(
        () => [
            {
                Header: 'Product',
                Cell: ({ row }) => {
                    const { imageURL, name, color, size } = row?.original
                    return (
                        <div className='flex justify-start gap-3 items-center'>
                            <img src={imageURL} alt={"produt img"} className=" w-16 rounded-md " />
                            <div className='pl-2'>
                                <h4 className='text-base text-gray-700 text-start font-poppins font-medium mb-1'>{name}</h4>
                                <div className='flex justify-start gap-1 items-center'>
                                    <h6 className='text-sm text-gray-500 font-poppins font-normal'>{color}</h6>
                                    <span className='text-gray-400'>|</span>
                                    <div>
                                        {
                                            size?.map((item, index) => <span
                                                key={index}
                                                className='text-sm text-gray-500 font-poppins font-normal px-1'>{item}</span>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div >
                    )

                }
            },
            {
                Header: 'Quantity',
                accessor: 'quantity',
            },
            {
                Header: 'Price',
                accessor: 'price',
                Cell: ({ value }) => <h4>৳ {value}</h4>
            },
            {
                Header: 'Offer',
                accessor: 'offer',
                Cell: ({ value }) => <h4>{value}% OFF</h4>
            },
            {
                Header: 'Brand',
                accessor: 'brand',
            },
            {
                Header: 'Sell',
                accessor: 'sellCount',
            },
            {
                Header: 'Status',
                accessor: 'status',
                Cell: ({ value }) => <h4 className={`${value === "in-stock" ? "bg-green-200" : "bg-red-200"} py-1 rounded`}>{value}</h4>
            },
            {
                accessor: '_id',
                Cell: ({ value }) => <div className='flex justify-center gap-2 items-center relative'>
                    {/* button modul */}
                    {
                        user?.roll === "admin" && <>
                            <FontAwesomeIcon
                                onClick={() => handleUpdateProduct(value)}
                                className='text-sm mr-1 text-green-500 cursor-pointer hover:bg-green-100 p-2 rounded' icon={faPen} />

                            <FontAwesomeIcon
                                onClick={() => handelDeleteProduct(value)}
                                className='text-sm text-red-400 cursor-pointer hover:bg-red-100 p-2 rounded' icon={faTrashCan} />
                        </>
                    }
                </div>
            }
        ],
        [user]
    );

    // tableInstance
    const tableInstance = useTable({ columns, data, initialState: { pageIndex: 0 } }, useFilters, useSortBy, usePagination);

    // what to render 

    let component = null;

    if (isLoading) {
        component = <Loading />
    }

    if (!isLoading && isError) {
        component = <Error message={error?.data?.message ? error?.data?.message : "Product is not found"} />
    }

    if (!isLoading && !isError) {
        component = <StockProductTable products={products} tableInstance={tableInstance} />
    }

    return (
        <div className="">
            <div className='mb-6 px-6 pb-2 flex justify-between'>
                <h2 className='text-xl text-center font-poppins font-semibold text-gray-700'>Stock Products</h2>
                {
                    user?.roll === "admin" && <button className='text-base text-white font-poppins font-medium bg-green-500 transition hover:bg-green-600 rounded py-1 px-3'>
                        <FontAwesomeIcon className='pr-2 text-sm' icon={faPlus} />
                        Add Product
                    </button>
                }
            </div>
            {/* table component  */}
            {component}

            {/* edite product modul  */}
            {
                editeOpen && <EditeProduct setEditeOpen={setEditeOpen} id={id} />
            }

            {/* delete product modul  */}
            {
                open && <DeleteConfirmAlart id={id} setOpen={setOpen} />
            }
        </div>
    );
};

export default StockConteiner;