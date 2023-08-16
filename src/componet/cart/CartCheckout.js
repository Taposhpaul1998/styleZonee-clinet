import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Error from '../ui/Error';

const CartCheckout = ({ setCartOpen }) => {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { Carts } = useSelector(state => state.Cart)

    useEffect(() => {
        if (Carts.length === 0) {
            setError("Place add a product")
        }
        if (Carts.length !== 0) {
            setError("")
        }
    }, [Carts])

    const handelcheckoutBtn = () => {
        setCartOpen(false)
        navigate("/checkout")
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className='mt-6'>
            {error ? <Error message={error} /> :
                <button onClick={handelcheckoutBtn} className='bg-gray-700 hover:bg-gray-800 transition text-white text-md font-poppins font-medium py-2 text-center w-full'>Proceed to checkout</button>}

        </div>
    );
};

export default CartCheckout;