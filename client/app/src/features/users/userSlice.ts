import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { volunteers } from "./interfaces/volunteerInterface";

export const getVolunteers = createAsyncThunk(
  "volunteers/getVolunteers",
  async () => {
    const response = await axios.get("http://localhost:4003/api/volunteers");
    return response.data;
  }
);

const volunteersSlice = createSlice({
  name: "volunteers",
  initialState: {
    volunteers: [] as volunteers[],
    status: "idle" as "idle" | "loading" | "failed",
  },
  reducers: {
    getVolunteersRequest: (state) => {
      state.status = "loading";
    },
    getVolunteersSuccess: (state, action: PayloadAction<volunteers[]>) => {
      state.status = "idle";
      state.volunteers = action.payload;
    },
    getVolunteersFailed: (state) => {
      state.status = "failed";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVolunteers.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getVolunteers.fulfilled, (state, action) => {
      state.status = "idle";
      state.volunteers = action.payload;
    });
    builder.addCase(getVolunteers.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const {
  getVolunteersRequest,
  getVolunteersSuccess,
  getVolunteersFailed,
} = volunteersSlice.actions;

export default volunteersSlice.reducer;
