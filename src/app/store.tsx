// 'use client'
import bikeSlice from "@/features/bikeSlice/bikeSlice";
import cartSlice from "@/features/cartSlice/cartSlice";
import categorySlice from "@/features/categorySlice/categorySlice";
import counterSlice from "@/features/counterSlice/counterSlice";
import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';


const store = configureStore({
    reducer: {
       categories: categorySlice,
       bikes: bikeSlice,
       counter: counterSlice,
       cart: cartSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

