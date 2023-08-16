import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddCartHendelar, AddfavariteHendelar } from '../../../../features/OrderApi&Favarit&CartSlice/AddCartSlice';
import Error from '../../../ui/Error';
import SelecteSize from './SelecteSize';
import SolidheartIcon from '../SolidheartIcon';
import { useNavigate } from 'react-router';

const OrderFavoriteBtn = ({ product }) => {
    const { _id, size, price, name, imageURL } = product || {}

    const dispatch = useDispatch();
    const [selectSize, setSelecteSize] = useState()
    const [error, setError] = useState()
    const [quantity, setQuantity] = useState(1)

    const navigate = useNavigate()

    const { Carts, favarite } = useSelector(state => state.Cart);
    const existing = favarite.find(item => item === _id)

    // handel add quantity and error 
    const handelQuantity = (quantity) => {
        if (quantity > 0) {
            setQuantity(quantity)
        }
    }

    // handle add cart and bey Now button 
    const handelAddcart = (data) => {
        const cartId = Math.floor(Math.random() * 10000 + 1)
        const totalPrice = price * quantity;

        const addCart = { quantity, size: selectSize, totalPrice, price, name, imageURL, id: cartId }
        if (selectSize.length === 0) {
            setError("Place select a size");
        } else {
            if (data === "add") {
                dispatch(AddCartHendelar(addCart))
            }
            if (data === "bey") {
                dispatch(AddCartHendelar(addCart))
                navigate('/checkout')
            }
        }
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    };

    // store cart and favarite data in sessionStorage 
    useEffect(() => {
        if (favarite.length !== 0) {
            localStorage.setItem("STYFavCrt", JSON.stringify(favarite))
        }
        if (Carts.length !== 0) {
            localStorage.setItem("STYCart", JSON.stringify(Carts))
        }
    }, [Carts, favarite])

    const handelAddFavorite = () => {
        if (existing !== _id) {
            dispatch(AddfavariteHendelar(_id))
        }
    };
    return (
        <div className='pb-4'>
            {/* size select area  */}
            <div>
                <SelecteSize
                    key={_id}
                    size={size}
                    selectSize={selectSize}
                    setSelecteSize={setSelecteSize}
                    setError={setError} />
                {
                    error && <div className='my-2'>
                        <Error message={error} />
                    </div>
                }
                <div className='py-4'>
                    <input
                        className='border border-gray-200 p-2 rounded-md w-12'
                        type="number"
                        name='quantity'
                        value={quantity}
                        onChange={(e) => handelQuantity(e.target.value)}
                    />
                    <button disabled={error} onClick={() => handelAddcart("add")} className=' mx-4 bg-gray-600 hover:bg-gray-800 transition text-base font-poppins font-semibold text-white py-2 px-3' > Add to cart</button>
                </div>
            </div>
            <button disabled={existing} onClick={handelAddFavorite} className={`border transition ${existing ? "" : "hover:text-gray-800 hover:border-gray-400"} border-gray-200 text-gray-500 font-poppins font-medium px-3 py-1 mb-3`}>
                {
                    existing ? <SolidheartIcon /> : <FontAwesomeIcon className='pr-1' icon={faHeart} />
                }Add to Favorite </button>
            <div>
                <button disabled={error} onClick={() => handelAddcart("bey")}>
                    <button className='border transition hover:text-gray-800 hover:border-gray-400 border-gray-200 text-gray-500 font-poppins font-medium px-3 py-1 mb-3'>
                        <FontAwesomeIcon className='pr-1' icon={faCartArrowDown} /> Bey now
                    </button>
                </button>
            </div>
        </div>
    );
};

export default OrderFavoriteBtn;