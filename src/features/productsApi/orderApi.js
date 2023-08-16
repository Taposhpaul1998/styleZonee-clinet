import { apiSlice } from "../Api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrders: builder.query({
            query: (selectedDate) => `/orders/data/${selectedDate}`
        }),
        getSingelOrder: builder.query({
            query: (id) => ({
                url: `/orders/${id}`
            }),
        }),
        createOrder: builder.mutation({
            query: (data) => ({
                url: "/orders",
                method: "POST",
                body: data
            })
        }),
        updateOrder: builder.mutation({
            query: ({ id, data }) => ({
                url: `/orders/${id}`,
                method: "PATCH",
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    await queryFulfilled
                    dispatch(
                        apiSlice.util.updateQueryData(
                            "getSingelOrder",
                            arg.id,
                            (draft) => {
                                draft.status = arg.data.status
                                draft.employerName = arg.data?.employerName
                                draft.cancelNote = arg.data?.cancelNote
                            }
                        )
                    )
                    dispatch(
                        apiSlice.util.updateQueryData(
                            "getAllOrders",
                            undefined,
                            (draft) => {
                                const updateOrder = draft.find(item => item._id === arg.id)
                                console.log(JSON.stringify(updateOrder));
                                updateOrder.status = arg.data.status
                            }
                        )
                    )
                } catch (error) {

                }

            }
        })
    })
})

export const { useGetAllOrdersQuery, useCreateOrderMutation, useGetSingelOrderQuery, useUpdateOrderMutation } = orderApi