import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { authApi } from "../api/auth";

export const store = configureStore({
  reducer: { reducers, [authApi.reducerPath]: authApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type ReducersType = ReturnType<typeof store.getState>;
