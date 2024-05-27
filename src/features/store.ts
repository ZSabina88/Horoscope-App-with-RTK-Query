import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { horoscopeApi } from "./signApiSlice";

const store = configureStore({
    reducer: {
        [horoscopeApi.reducerPath]: horoscopeApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(horoscopeApi.middleware),
});

setupListeners(store.dispatch);

export default store;