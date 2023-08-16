import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/Api/apiSlice';
import FilterSlice from '../features/FiltersSlice/FilterSlice';
import LocationAreaSlice from '../features/LocatinAreaSlice/LocationAreaSlice';
import AddCartSlice from '../features/OrderApi&Favarit&CartSlice/AddCartSlice';
import UserSlice from '../features/userApi/UserSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    Cart: AddCartSlice,
    Filters: FilterSlice,
    Location: LocationAreaSlice,
    user: UserSlice
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware)
});
