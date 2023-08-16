import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    location: "Out of Dhaka"
}

const locationAreaSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        updateLocation: (state, action) => {
            state.location = action.payload
        }
    }
})

export default locationAreaSlice.reducer

export const { updateLocation } = locationAreaSlice.actions