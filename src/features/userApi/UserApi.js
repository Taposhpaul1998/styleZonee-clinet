import { apiSlice } from "../Api/apiSlice";
import { loginUser, saveUserInRedux, updateUserInRedux } from "./UserSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => "/user",

        }),
        getUserByUid: builder.query({
            query: (uid) => ({
                url: `/user/${uid}`,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled
                    if (result) {
                        dispatch(saveUserInRedux(result?.data));
                    }
                } catch (error) {

                }
            }
        }),
        createUser: builder.mutation({
            query: (data) => ({
                url: "/user",
                method: "POST",
                body: { ...data }
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled
                    if (result) {
                        localStorage.setItem(
                            "auth",
                            JSON.stringify({
                                uid: result.data.data.user.uid,
                                accessToken: result.data.data.token,
                            })
                        )

                        dispatch(loginUser({
                            uid: result.data.data.user.uid,
                            accessToken: result.data.data.token
                        }))
                    }
                } catch (error) {

                }
            }
        }),
        updateUser: builder.mutation({
            query: ({ id, data }) => ({
                url: `/user/${id}`,
                method: "PATCH",
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    await queryFulfilled
                    dispatch(updateUserInRedux(arg.data))
                } catch (error) {

                }
            }
        }),
        updateRoll: builder.mutation({
            query: ({ id, data }) => ({
                url: `/user/roll/${id}`,
                method: "PATCH",
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    await queryFulfilled
                    dispatch(
                        apiSlice.util.updateQueryData(
                            "getAllUsers",
                            undefined,
                            (draft) => {
                                const updateUser = draft.find(item => item._id === arg.id)
                                updateUser.roll = arg.data.roll
                            }
                        )
                    )
                } catch (error) {

                }
            }
        }),
        userLogOut: builder.mutation({
            query: () => "/refresh/remove"
        })
    })
})

export const { useGetAllUsersQuery, useGetUserByUidQuery, useCreateUserMutation, useUpdateUserMutation, useUserLogOutMutation, useUpdateRollMutation } = userApi