import { createSlice } from "@reduxjs/toolkit";

const cartSlide = createSlice({
    name: 'cart',
    initialState: {
        items: Array()
    },
    reducers: {
        addToCart : (state, action) => {
            state.items = [action.payload, ...state.items]
        },
        removeFromCart : (state, action) => {
            state.items = state.items.filter(i => i !== action.payload)
        },
        clearCart : (state) => {
            state.items = []
        }
    }
})

export default cartSlide