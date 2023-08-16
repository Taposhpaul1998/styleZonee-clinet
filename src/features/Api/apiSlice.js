import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { logOutUser, loginUser } from "../userApi/UserSlice"

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
    credentials: 'include',
    prepareHeaders: async (headers, { getState }) => {
        const token = getState().user?.auth?.accessToken
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result?.error?.status === 403) {
        // send refresh token to get new access token 
        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        if (refreshResult?.data) {
            const { user, accessToken } = refreshResult?.data?.data
            api.dispatch(loginUser({ accessToken, uid: user.uid }))
            // retry the original query with new access token 
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOutUser())
        }
    }

    return result
}

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({})
})
