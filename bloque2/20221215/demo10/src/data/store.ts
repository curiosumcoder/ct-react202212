import { configureStore } from "@reduxjs/toolkit";
import cartSlide from "./cartSlide";
import logger from "redux-logger";

const store = configureStore({
    reducer: {
        cart: cartSlide.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store