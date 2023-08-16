import { apiSlice } from "../Api/apiSlice";

export const sliderApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getslider: builder.query({
            query: () => "/slider"
        }),
        createSlider: builder.mutation({
            query: (data) => ({
                url: "/slider",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const slider = await queryFulfilled
                    dispatch(
                        apiSlice.util.updateQueryData(
                            "getslider",
                            undefined,
                            (draft) => {
                                draft.push(slider.data.data)
                            }
                        )
                    )
                } catch (error) {

                }

            }
        }),
        updateSlider: builder.mutation({
            query: ({ id, data }) => ({
                url: `/slider/${id}`,
                method: "PATCH",
                body: {
                    "status": data
                }
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    await queryFulfilled
                    dispatch(
                        apiSlice.util.updateQueryData(
                            "getslider",
                            undefined,
                            (draft) => {
                                const newSlider = draft.find(item => item._id === arg.id)
                                newSlider.status = arg.data
                            }
                        )
                    )
                } catch (error) {

                }

            }
        })
    })
})

export const { useCreateSliderMutation, useGetsliderQuery, useUpdateSliderMutation } = sliderApi