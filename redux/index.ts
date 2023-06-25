'use client'
import { configureStore } from "@reduxjs/toolkit";
import navReducer from '@/redux/navbar/slice.nav';
const store=configureStore({
    reducer:{
        navbar: navReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;


