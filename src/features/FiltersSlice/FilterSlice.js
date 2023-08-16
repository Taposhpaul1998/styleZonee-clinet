import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tag: "",
    category: "",
    search: "",
    sort: "-updatedAt",
    priceSort: undefined,
}

const filterSlice = createSlice({
    name: "Filters",
    initialState,
    reducers: {
        tagsFilters: (state, action) => {
            state.tag = action.payload
        },
        categoryFilters: (state, action) => {
            state.category = action.payload
        },
        priceFilters: (state, action) => {
            state.priceSort = action.payload
        },
        searchFilter: (state, action) => {
            state.search = action.payload
        },
        sortFilter: (state, action) => {
            state.sort = action.payload
        }
    }

})

export default filterSlice.reducer

export const { tagsFilters, categoryFilters, priceFilters, searchFilter, sortFilter } = filterSlice.actions