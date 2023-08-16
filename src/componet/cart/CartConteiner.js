import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartHendelar } from '../../features/OrderApi&Favarit&CartSlice/AddCartSlice';
import EmptyMessage from '../Seared/EmptyMessage';
import CartCheckout from './CartCheckout';
import CartProductTable from './CartProduct';


const CartConteiner = ({ setCartOpen, cartOpen }) => {

    const dispatch = useDispatch()
    const [newCart, setNewCart] = useState([])
    const { Carts } = useSelector(state => state.Cart);

    const TotalProductprice = Carts.reduce((total, product) => total + product.totalPrice, 0)

    useEffect(() => {
        setNewCart(Carts)
    }, [Carts])

    // set data to localStorage 
    const handelRemoveCartProduct = (id) => {
        const carts = JSON.parse(localStorage.getItem("STYCart"))
        const nerCarts = carts.filter(item => item.id !== id)
        setNewCart(nerCarts)
        localStorage.setItem("STYCart", JSON.stringify(nerCarts))
        dispatch(updateCartHendelar(nerCarts))
    }

    return (
        <>
            {
                cartOpen && <div className='fixed transition top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 flex items-center justify-center z-10'>

                </div>
            }
            <div className={`bg-white fixed z-20 top-0 bottom-0 right-0 w-[400px] ${cartOpen ? "translate-x-0" : "translate-x-full"}  ease-in-out duration-300`}>
                <div className='p-4 relative'>
                    <FontAwesomeIcon onClick={() => setCartOpen(!cartOpen)} className='absolute top-4 right-4 text-xl text-red-500 cursor-pointer hover:rotate-180 transition' icon={faXmark} />

                    <div className='mb-6 w-60 m-auto pb-2 border-b-4 border-green-400'>
                        <h2 className='text-xl text-center font-poppins font-semibold text-gray-700'>Cart Product</h2>
                    </div>
                    {/* Product  area */}

                    <div className='border-b border-gray-300 pb-2 mb-3'>
                        {
                            newCart.length !== 0 ? newCart.map(cart => <CartProductTable
                                cart={cart}
                                key={cart.id}
                                handelRemoveCartProduct={handelRemoveCartProduct}
                            />)
                                : <EmptyMessage message={"Your cart is currently empty."} />
                        }
                    </div>
                    <div className='pt-2 px-6'>
                        <h4 className='text-sm font-poppins font-semibold text-gray-600'> Total Product Price: ৳ {TotalProductprice}</h4>
                    </div>
                    <CartCheckout setCartOpen={setCartOpen} />
                </div>

            </div>
        </>

    );
};

export default CartConteiner;
