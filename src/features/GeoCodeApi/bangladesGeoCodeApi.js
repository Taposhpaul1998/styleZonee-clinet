import { apiSlice } from "../Api/apiSlice";


export const bangladeshGeoCodeApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDistricts: builder.query({
            query: () => "districts"
        })
    })
})

export const { useGetDistrictsQuery } = bangladeshGeoCodeApi