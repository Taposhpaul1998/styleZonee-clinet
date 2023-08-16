import React from 'react';
import { parseISO, format } from 'date-fns';
import { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useFilters, usePagination, useSortBy, useTable } from 'react-table';
import { useGetAllOrdersQuery } from '../../../../features/productsApi/orderApi';
import Error from '../../../ui/Error';
import Loading from '../../../ui/Loading';
import OrderTable from './OrderTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import OrderDetals from './OrderDetalsModul/OrderDetals';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const OrdersConteiner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [openModul, setOpenModul] = useState(false)
    const [orderId, setOrderId] = useState()
    const [orders, setOrders] = useState([])
    const date = format(selectedDate, 'yyyy-MM-dd')

    const { data: ordersData, isSuccess, isError, isLoading, error } = useGetAllOrdersQuery(date)


    // set product data using useEffect 
    useEffect(() => {
        if (isSuccess) {
            setOrders(ordersData)
        }
    }, [ordersData, isSuccess])

    // handle order detals
    const handleOrderDetals = (id) => {
        setOrderId(id)
        setOpenModul(true)
    }

    // react table hooks 
    const data = useMemo(() => orders, [orders]);

    //  table columns 
    const columns = React.useMemo(
        () => [

            {
                Header: 'Customer',
                Cell: ({ row }) => {
                    const { imageURL, customerName, phoneNumber } = row?.original.coustomerInfoId
                    return (
                        <div className='flex justify-start gap-3 items-center ml-1'>
                            {imageURL ?
                                <img src={imageURL} alt={"produt img"} className="  rounded-full w-12" /> :
                                <FontAwesomeIcon className='text-xl text-gray-400' icon={faUser} />}

                            <div className='pl-2'>
                                <h4 className='text-sm text-gray-500 text-start font-poppins font-semibold mb-1'>{customerName}</h4>
                                <div className='flex justify-start gap-1 items-center'>
                                    <h6 className='text-xs text-gray-500 font-poppins font-normal'>
                                        <FontAwesomeIcon icon={faPhone} className='text-[12px] pr-1' /> {phoneNumber}</h6>
                                </div>
                            </div>
                        </div >
                    )

                }
            },
            {
                Header: 'Address',
                accessor: 'coustomerInfoId.deliveryAddress'
            },
            {
                Header: 'Date',
                accessor: 'createdAt',
                Cell: ({ value }) => {
                    const date = new Date(value);
                    const formattedDate = format(date, 'yyyy-MM-dd')
                    return <span>{formattedDate}</span>
                }
            },
            {
                Header: 'Item',
                accessor: 'productInfo',
                Cell: ({ value }) => <h4>{value?.length}</h4>
            },
            {
                Header: 'Total',
                accessor: 'totalPrice',
                Cell: ({ value }) => <h4>৳ {value}</h4>
            },
            {
                Header: 'Payment',
                accessor: 'paymentMethod',
                Cell: ({ value }) => <h4 className={`${value === "COD" ? "bg-lime-100 text-lime-600" : "bg-green-100 text-green-500"} py-1 mx-2 rounded`}>{value}</h4>
            },
            {
                Header: 'Status',
                accessor: "status",
                Cell: ({ value }) => <h4
                    className={`${(value === "Panding" && "bg-blue-100 text-blue-600")
                        || (value === "Confirm" && "bg-green-100 text-green-500") ||
                        (value === "Cancel" && "bg-red-100 text-red-600") ||
                        (value === "Delivered" && "bg-cyan-100 text-cyan-500") ||
                        (value === "Return" && "bg-amber-100 text-amber-500")} py-1 px-2 font-semibold rounded`}>{value}</h4>
            },
            {
                accessor: "_id",
                Cell: ({ value }) => <FontAwesomeIcon
                    onClick={() => handleOrderDetals(value)}
                    className='text-lg text-gray-400 cursor-pointer hover:bg-gray-200 p-1 rounded' icon={faFileLines} />
            }
        ],
        []
    );

    // tableInstance
    const tableInstance = useTable({ columns, data, initialState: { pageIndex: 0 } }, useFilters, useSortBy, usePagination);

    // what to render 

    let component = null;

    if (isLoading) {
        component = <Loading />
    }

    if (!isLoading && isError) {
        component = <Error message={error?.data?.message ? error?.data?.message : "Orders is not found"} />
    }

    if (!isLoading && !isError) {
        component = <OrderTable tableInstance={tableInstance} orders={orders} />
    }

    return (
        <div>
            <div className='mb-6 px-4 flex justify-between'>
                <h2 className='text-xl font-poppins font-semibold text-gray-700'>All Orders</h2>
                <div>
                    <DatePicker
                        className='border border-gray-400 px-2 rounded cursor-pointer'
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)} />
                </div>
            </div>
            {/* order table  */}
            {component}
            {/* order detals modul  */}
            {
                openModul
                &&
                <OrderDetals orderId={orderId} setOpenModul={setOpenModul} />
            }
        </div>
    );
};

export default OrdersConteiner;