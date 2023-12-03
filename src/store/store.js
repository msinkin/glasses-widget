import { configureStore } from "@reduxjs/toolkit";

import stepReducer from "../slice/stepSlice";

export const store = configureStore({
    reducer: {
        step: stepReducer
    }
});
