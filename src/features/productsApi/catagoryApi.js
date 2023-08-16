import { apiSlice } from "../Api/apiSlice";

export const catagoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCatagory: builder.query({
            query: () => "/catagory"
        }),
        getCatagoryId: builder.query({
            query: (id) => `/catagory/${id}`
        }),
        createCatagory: builder.mutation({
            query: (data) => ({
                url: "/catagory",
                method: "POST",
                body: data
            })
        }),
        updateCatagory: builder.mutation({
            query: ({ id, data }) => ({
                url: `/catagory/${id}`,
                method: "PATCH",
                body: {
                    "quantity": data + 1
                }
            })
        })
    })
})

export const { useCreateCatagoryMutation, useGetAllCatagoryQuery, useGetCatagoryIdQuery, useUpdateCatagoryMutation } = catagoryApi