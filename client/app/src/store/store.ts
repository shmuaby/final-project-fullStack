import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/users/userSlice";
import organizationsSlice from "../features/organizations/organizationsSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
    organizations: organizationsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
