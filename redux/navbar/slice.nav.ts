'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
}

const navSlice = createSlice({
    name: 'navbar',
    initialState: () => {
        return initialState;
    },
    reducers: {
        setIsOpen: (state) => {
            state.isOpen=!state.isOpen
        },
    }
});
const navReducer = navSlice.reducer;
export default navReducer;
export const { setIsOpen } = navSlice.actions;
