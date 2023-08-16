import { createSlice } from "@reduxjs/toolkit";

const storeCartData = localStorage.getItem("STYCart") !== null ? JSON.parse(localStorage.getItem("STYCart")) : []
const storeFavariteCartData = localStorage.getItem("STYFavCrt") !== null ? JSON.parse(localStorage.getItem("STYFavCrt")) : []

const initialState = {
    Carts: storeCartData,
    favarite: storeFavariteCartData,
}

const addCartSlice = createSlice({
    name: "addCart",
    initialState,
    reducers: {
        AddCartHendelar: (state, action) => {
            state.Carts = [...state.Carts, action.payload]
        },
        AddfavariteHendelar: (state, action) => {
            state.favarite = [...state.favarite, action.payload]
        },
        updateCartHendelar: (state, action) => {
            state.Carts = action.payload
        },
        updatefavariteHendelar: (state, action) => {
            state.favarite = action.payload
        }
    }
})
export default addCartSlice.reducer;
export const { AddCartHendelar, AddfavariteHendelar, updateCartHendelar, updatefavariteHendelar } = addCartSlice.actions