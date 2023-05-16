import { configureStore } from "@reduxjs/toolkit";
import { songsApi } from "./features/songs/slices/songsApiSlice";

const store = configureStore({
  reducer: {
    [songsApi.reducerPath]: songsApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (gDM) => gDM().concat(songsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
