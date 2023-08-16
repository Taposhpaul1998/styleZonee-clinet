import { createSlice } from "@reduxjs/toolkit"

const userAuth = localStorage.getItem("auth") !== null ? JSON.parse(localStorage.getItem("auth")) : undefined

const initialState = {
    auth: userAuth,
    user: {}
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.auth = action.payload
        },
        logOutUser: (state) => {
            localStorage.removeItem('auth')
            state.auth = undefined
        },
        saveUserInRedux: (state, action) => {
            state.user = action.payload
        },
        updateUserInRedux: (state, action) => {
            const updateUser = action.payload
            const user = state.user
            user.name = updateUser.name
            user.phoneNumber = updateUser.phoneNumber
            user.district = updateUser.district
            user.address = updateUser.address
        }
    }
})

export default userSlice.reducer

export const { loginUser, logOutUser, saveUserInRedux, updateUserInRedux } = userSlice.actions