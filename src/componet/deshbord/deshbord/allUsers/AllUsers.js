import React, { useEffect, useMemo, useState } from 'react';
import { useGetAllUsersQuery, useUpdateRollMutation } from '../../../../features/userApi/UserApi';
import Loading from '../../../ui/Loading';
import Error from '../../../ui/Error';
import UserTable from './UserTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useFilters, usePagination, useTable } from 'react-table';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const AllUsers = () => {
    const [users, setUsers] = useState([])
    const dispatch = useDispatch()
    const { data: user, isLoading, isError, error, isSuccess } = useGetAllUsersQuery()
    // update user 
    const [updateRoll, { isLoading: loading, isError: IsError, error: errorMsg, }] = useUpdateRollMutation()
    // set product data using useEffect 
    useEffect(() => {
        if (isSuccess) {
            setUsers(user)
        }
    }, [user, isSuccess])

    useEffect(() => {
        if (IsError) {
            toast.error(errorMsg?.data?.message, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    }, [IsError, errorMsg])


    const handleUpdateUser = (data) => {
        const { id, roll } = data
        dispatch(updateRoll({
            id,
            data: { "roll": roll }
        }))
    }

    // react table hooks 
    const data = useMemo(() => users, [users]);

    //  table columns 
    const columns = React.useMemo(
        () => [

            {
                Header: 'Image',
                accessor: "imageUrl",
                Cell: ({ value }) => {
                    return <div className='flex justify-center'>
                        {
                            value ?
                                <img src={value} alt={"produt img"} className="  rounded-full w-10" /> :
                                <FontAwesomeIcon className='text-xl text-gray-400' icon={faUser} />
                        }
                    </div>
                }
            },
            {
                Header: 'Name',
                accessor: 'name'
            },
            {
                Header: 'Email',
                accessor: 'email'
            },
            {
                Header: 'Phone',
                accessor: 'phoneNumber'
            },
            {
                Header: 'Date',
                accessor: 'createdAt',
                Cell: ({ value }) => {
                    const date = new Date(value);
                    const year = date.getFullYear();
                    const month = (date.getMonth() + 1).toString().padStart(2, '0');
                    const day = date.getDate().toString().padStart(2, '0');
                    const formattedDate = `${year}-${month}-${day}`;
                    return <span>{formattedDate}</span>
                }
            },
            {
                Header: 'Status',
                accessor: "roll",
                Cell: ({ value }) => <h4
                    className={`${(value === "admin" ? "bg-green-100 text-green-600" : (value === "user" ? "text-blue-500 bg-blue-100" : "text-lime-500 bg-lime-100"))} py-1 px-2 font-semibold rounded`}>{value}</h4>
            },
            {
                Header: 'Action',
                Cell: ({ row }) => {
                    const id = row?.original?._id
                    const roll = row?.original?.roll
                    return <>
                        {loading ? <Loading /> :
                            <div>
                                {
                                    roll === "admin" ?
                                        <button
                                            onClick={() => handleUpdateUser({ id, roll: "user" })}
                                            className='text-white text-base font-poppins font-medium bg-blue-400 rounded py-1 px-3'>User</button> : <>
                                            {
                                                roll === "user" ?
                                                    <button
                                                        onClick={() => handleUpdateUser({ id, roll: "employee" })}
                                                        className='text-white text-base font-poppins font-medium bg-lime-500 rounded py-1 px-3'>Employee</button> :
                                                    <button
                                                        onClick={() => handleUpdateUser({ id, roll: "admin" })}
                                                        className='text-white text-base font-poppins font-medium bg-green-500 rounded py-1 px-3'>Admin</button>
                                            }
                                        </>
                                }

                            </div>
                        }
                    </>
                }
            }
        ],
        [loading]
    );

    // tableInstance
    const tableInstance = useTable({ columns, data, initialState: { pageIndex: 0 } }, useFilters, usePagination);

    // what to render 

    let component = null;

    if (isLoading) {
        component = <Loading />
    }

    if (!isLoading && isError) {
        component = <Error message={error?.data?.message ? error?.data?.message : "Product is not found"} />
    }

    if (!isLoading && !isError && isSuccess) {
        component = <UserTable tableInstance={tableInstance} users={users} />
    }

    return (
        <div className=" w-[950px]">
            <div className='mb-6 w-60 m-auto pb-2 border-b-4 border-green-400'>
                <h2 className='text-xl text-center font-poppins font-semibold text-gray-700'>All User</h2>
            </div>
            {/* table component  */}
            {component}

        </div>
    );
};

export default AllUsers;