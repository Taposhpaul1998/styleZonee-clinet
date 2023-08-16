import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetDistrictsQuery } from '../../../features/GeoCodeApi/bangladesGeoCodeApi';
import { updateLocation } from '../../../features/LocatinAreaSlice/LocationAreaSlice';
import validatePhoneNumber from '../../Seared/validatePhoneNumber';

const ShippingInfo = ({ register, location, errors, user }) => {
    const [districts, setDistricts] = useState([])
    const { data } = useGetDistrictsQuery()
    const dispatch = useDispatch()

    const { district, address } = user || {}

    useEffect(() => {
        if (district ? district === "Dhaka" : location === "Dhaka") {
            setDistricts(data?.filter(item => item.name === "Dhaka"))
        }
        if (district ? district !== "Dhaka" : location !== "Dhaka") {
            setDistricts(data?.filter(item => item.name !== "Dhaka"))
        }
    }, [data, setDistricts, location, district])


    const handelCheck = (data) => {
        dispatch(updateLocation(data))
    }

    return (
        <div>
            <div className='mb-4 flex justify-start gap-5'>
                <div className=''>
                    <h4 className='text-gray-800 text-base font-poppins font-medium'> Select your location Area</h4>
                </div>
                <div>
                    <label className='text-gray-600 text-base font-poppins font-medium pr-4'>Out of Dhaka
                        <input
                            className='ml-2 text-sm'
                            type="radio"
                            checked={location === "Out of Dhaka"}
                            value={"Out of Dhaka"}
                            onChange={(e) => handelCheck(e.target.value)}
                        />
                    </label>
                    <label className='text-gray-600 text-base font-poppins font-medium '>In Dhaka
                        <input
                            className='ml-2 text-sm'
                            type="radio"
                            checked={location === "Dhaka"}
                            value={"Dhaka"}
                            onChange={(e) => handelCheck(e.target.value)}
                        />
                    </label>
                </div>
            </div>
            {/* district select  */}
            <div className='my-4'>
                <select className={`w-[48%] px-3 py-2 mr-3 rounded text-md font-poppins text-gray-600 font-normal  ${errors.district ? "focus:outline-red-600" : "focus:outline-green-400"} border border-gray-300 outline-1`}
                    {...register("district", { required: true, })}
                >
                    {
                        districts?.map(district => <option
                            key={district._id}
                            value={district.name}
                        >{district.name}</option>)
                    }
                </select>
                <input
                    className={`w-[49%] px-3 py-2 ml-3 rounded text-md text-gray-600 font-normal ${errors.phoneNumber ? "focus:outline-red-600" : "focus:outline-green-400"} border border-gray-300 outline-1`}
                    type="text"
                    name="altNumber"
                    {...register("altNumber", { validate: validatePhoneNumber })}
                    placeholder='Alt. number'
                />
            </div>
            {/* Delivery address */}
            <div className='mb-4'>
                <input
                    className={`w-full px-3 py-2 rounded text-md text-gray-600 font-normal ${errors.deliveryAddress ? "focus:outline-red-600" : "focus:outline-green-400"} border border-gray-300 outline-1`}
                    type="text"
                    name="deliveryAddress"
                    defaultValue={address}
                    required
                    {...register("deliveryAddress", { required: true, })}
                    placeholder='Delivery address'
                />
            </div>
            {/* Note for stylezonee  */}
            <div className='my-4'>
                <input
                    className='w-full px-3 py-2 rounded text-md text-gray-600 font-normal focus:outline-green-400 border border-gray-300 outline-1'
                    type="text"
                    name="note"
                    {...register("note")}
                    placeholder='Note for stylezonee (optional)'
                />
            </div>
        </div>
    );
};

export default ShippingInfo;