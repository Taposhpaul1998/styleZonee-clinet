import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartHendelar } from '../../features/OrderApi&Favarit&CartSlice/AddCartSlice';
import Error from '../ui/Error';
import CheckoutProduct from './CheckoutProduct';
import TotalPayable from './TotalPayable';

const CheckoutProductInfo = () => {
    const [newCarts, setNewCart] = useState([])
    const { Carts } = useSelector(state => state.Cart);
    const dispatch = useDispatch()

    useEffect(() => {
        setNewCart(Carts)
    }, [Carts])
    // set data to localStorage 
    const handelRemoveCartProduct = (id) => {
        const newCarts = Carts.filter(item => item.id !== id)
        setNewCart(newCarts)
        localStorage.setItem("STYCart", JSON.stringify(newCarts))
        dispatch(updateCartHendelar(newCarts))
    }

    return (
        <>
            {
                newCarts.length > 0 ? <>
                    <div className='border-b border-gray-200 mb-4'>
                        {/* product  */}
                        {
                            newCarts?.map(cart => <CheckoutProduct cart={cart} handelRemoveCartProduct={handelRemoveCartProduct} key={cart._id} />)
                        }
                    </div>
                    {/* total Payable  */}
                    <TotalPayable Carts={Carts} />
                </> : <Error message={"your cart is empty, Plase select a Product"} />
            }
        </>
    );
};

export default CheckoutProductInfo;