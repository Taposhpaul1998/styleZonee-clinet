import { apiSlice } from "../Api/apiSlice";

export const tagsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTags: builder.query({
            query: () => "/products"
        })
    })
})

export const { useGetTagsQuery } = tagsApi