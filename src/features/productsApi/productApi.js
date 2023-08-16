import { apiSlice } from "../Api/apiSlice";

export const productsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (query) => query

        }),
        getProductsWithFullData: builder.query({
            query: () => "/products/stock?sort=-createdAt"
        }),
        getProduct: builder.query({
            query: (id) => ({
                url: `/products/${id}`
            })
        }),
        getRelatedProducts: builder.query({
            query: ({ category }) => `/products?category=${category}`
        }),
        getLatestProducts: builder.query({
            query: () => "/products?sort=-createdAt"
        }),
        getTopSellandViewProducts: builder.query({
            query: () => "/products"
        }),
        getFavariteProduct: builder.query({
            query: (id) => ({
                url: "/products/favarite",
                headers: {
                    "id": JSON.stringify(id)
                }
            }),
        }),
        createProduct: builder.mutation({
            query: (data) => ({
                url: "/products",
                method: "POST",
                body: data
            })
        }),
        updateProductById: builder.mutation({
            query: ({ id, data }) => ({
                url: `/products/${id}`,
                method: "PATCH",
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    await queryFulfilled
                    dispatch(
                        apiSlice.util.updateQueryData(
                            "getProductsWithFullData",
                            undefined,
                            (draft) => {
                                const { name, description, quantity, size, tags, offer } = arg.data || {}
                                const product = draft.find(item => item._id === arg.id)
                                product.name = name
                                product.description = description
                                product.quantity = quantity
                                product.size = size
                                product.tags = tags
                                product.offer = offer
                            }
                        )
                    )
                    dispatch(
                        apiSlice.util.updateQueryData(
                            "getProduct",
                            arg.id,
                            (draft) => {
                                const { name, description, quantity, size, tags, offer } = arg.data || {}
                                const product = draft
                                product.name = name
                                product.description = description
                                product.quantity = quantity
                                product.size = size
                                product.tags = tags
                                product.offer = offer
                            }
                        )
                    )
                } catch (error) {

                }

            }
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    await queryFulfilled
                    dispatch(
                        apiSlice.util.updateQueryData(
                            "getProductsWithFullData",
                            undefined,
                            (draft) => {
                                return draft = draft.filter(item => item._id !== arg)
                            }
                        )
                    )
                } catch (error) {

                }

            }
        })
    })
})
export const { useGetAllProductsQuery, useGetProductQuery, useCreateProductMutation, useGetFavariteProductQuery, useGetProductsWithFullDataQuery, useDeleteProductMutation, useUpdateProductByIdMutation, useGetRelatedProductsQuery, useGetLatestProductsQuery, useGetTopSellandViewProductsQuery } = productsApi;
