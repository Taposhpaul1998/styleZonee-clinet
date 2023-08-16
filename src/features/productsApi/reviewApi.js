import { apiSlice } from "../Api/apiSlice";

export const reviewApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getReviewByProductId: builder.query({
            query: (id) => `/review?productId=${id}`
        }),
        createReview: builder.mutation({
            query: (data) => ({
                url: "/review",
                method: "POST",
                body: data
            })
        })
    })
})
export const { useGetReviewByProductIdQuery, useCreateReviewMutation } = reviewApiSlice