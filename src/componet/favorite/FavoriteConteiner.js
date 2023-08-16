import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatefavariteHendelar } from '../../features/OrderApi&Favarit&CartSlice/AddCartSlice';
import EmptyMessage from '../Seared/EmptyMessage';
import FavoriteProduct from './FavoriteProduct';

const FavoriteConteiner = () => {
    const dispatch = useDispatch()
    const [newFavarite, setNewFavarite] = useState([])
    const { favarite } = useSelector(state => state.Cart);

    useEffect(() => {
        setNewFavarite(favarite)
    }, [favarite])

    // set data to localStorage 
    const handelRemoveFavoriteProduct = (id) => {
        const favarites = JSON.parse(localStorage.getItem("STYFavCrt"))
        const newfavarite = favarites.filter(item => item !== id)
        setNewFavarite(newfavarite)
        localStorage.setItem("STYFavCrt", JSON.stringify(newfavarite))
        dispatch(updatefavariteHendelar(newfavarite))
    }

    return (
        <div className='bg-gray-100 py-10 '>
            <div className='w-[1375px] mx-auto'>
                <div className='bg-white p-8'>

                    <div className='mb-6'>
                        <h2 className='text-xl text-start font-poppins font-semibold text-gray-700'>Favorite Product</h2>
                    </div>
                    {/* Product table  area */}
                    {
                        newFavarite.length !== 0 ? newFavarite.map(id => <FavoriteProduct
                            productId={id}
                            key={id}
                            handelRemoveFavoriteProduct={handelRemoveFavoriteProduct}
                        />)
                            : <EmptyMessage message={"Your cart is currently empty."} />
                    }
                </div>
            </div>
        </div>
    );
};

export default FavoriteConteiner;