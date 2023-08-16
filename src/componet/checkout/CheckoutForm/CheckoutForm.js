import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateCartHendelar } from '../../../features/OrderApi&Favarit&CartSlice/AddCartSlice';
import { useCreateOrderMutation } from '../../../features/productsApi/orderApi';
import Error from '../../ui/Error';
import Loading from '../../ui/Loading';
import OrderSuccessConteinan from '../OrderSuccessPage/OrderSuccessConteinan';
import ContactInfo from './ContactInfo';
import PaymentOption from './PaymentOption';
import ShippingInfo from './ShippingInfo';
import TotaleAmountTable from './TotaleAmountTable';

const CheckoutForm = () => {
    const { handleSubmit, register, reset, formState: { errors } } = useForm()
    const [shipping, setShipping] = useState()
    const [agree, setAgree] = useState(false)
    const [openModul, setOpenModul] = useState(false)
    const dispatch = useDispatch();

    const user = useSelector(state => state.user.user)

    const { location } = useSelector(state => state.Location)
    const { Carts } = useSelector(state => state.Cart)

    const SubTotalprice = Carts.reduce((total, product) => total + product.totalPrice, 0)

    // shipping price 
    useEffect(() => {
        if (location === "Dhaka") {
            setShipping(50)
        }
        else {
            setShipping(150)
        }
    }, [location])

    // create order api 
    const [createOrder, { data: order, isLoading, isError, error, isSuccess }] = useCreateOrderMutation()
    // form handelar 
    const handleCheckoutFormSubmit = (data) => {
        const order = {
            productInfo: Carts,
            totalPrice: SubTotalprice + shipping,
            shipping: shipping,
            paymentMethod: data.paymentMethod,
            note: data.note,
            coustomerInfo: {
                district: data.district,
                altNumber: data.altNumber,
                email: data.email,
                customerName: data.customerName,
                deliveryAddress: data.deliveryAddress,
                phoneNumber: data.phoneNumber
            },
        }
        dispatch(createOrder(order));
    }
    // success and error 
    useEffect(() => {
        if (isError) {
            toast(error?.data?.error)
        }
        if (isSuccess) {
            localStorage.removeItem('STYCart')
            dispatch(updateCartHendelar([]))
            setOpenModul(true)
            reset()
        }
    }, [isError, error, isSuccess, reset, dispatch])

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <form onSubmit={handleSubmit(handleCheckoutFormSubmit)}>
                        {/* Contact Info  */}
                        <h4 className='py-4 text-md font-poppins font-semibold text-gray-800'>Contact Info</h4>
                        <ContactInfo
                            user={user}
                            register={register}
                            errors={errors}
                        />

                        {/* Shipping Info */}
                        <h4 className='py-4 text-md font-poppins font-semibold text-gray-800'>Shipping Info</h4>
                        <ShippingInfo
                            user={user}
                            register={register}
                            location={location}
                            errors={errors}
                        />

                        {/* totale amount table  */}
                        <TotaleAmountTable
                            SubTotalprice={SubTotalprice}
                            shipping={shipping}
                        />

                        {/* payment option  */}
                        <div>
                            <h4 className='py-4 text-md font-poppins font-semibold text-gray-800'>Payment Options</h4>
                            <PaymentOption
                                register={register}
                            />
                        </div>

                        {/* trams and comditons */}
                        <div className='my-4'>
                            <label className='text-gray-600 text-base font-poppins font-medium '>
                                <input
                                    className='mr-2'
                                    type={'checkbox'}
                                    required
                                    onChange={() => setAgree(!agree)}
                                />
                                I have read and agree to the <span className='text-indigo-800 cursor-pointer font-bold'>website terms and conditions</span>
                            </label>
                        </div>

                        {
                            isError && <Error message={error?.data?.error ? error?.data?.error : "Order create feiled,Plase check the informetin"} />
                        }
                        <input
                            className={`border text-md cursor-pointer font-poppins font-normal border-green-500 w-full py-2 rounded bg-green-600/80 text-white transition ${!agree ? "cursor-text" : "hover:bg-green-600"} mt-2`}
                            type='submit'
                            value={'Confirm Order'}
                            disabled={!agree}
                        />
                    </form>
            }
            {
                openModul && <OrderSuccessConteinan order={order} setOpenModul={setOpenModul} />
            }
        </>
    );
};

export default CheckoutForm;