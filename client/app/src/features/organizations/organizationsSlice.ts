import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { organizations } from "./interfaces/organizationsInterface";

export const getOrganizations = createAsyncThunk(
  "organizations/getOrganizations",
  async () => {
    const response = await axios.get("http://localhost:4003/api/organizations");
    return response.data;
  }
);

const organizationsSlice = createSlice({
  name: "organizations",
  initialState: {
    organizations: [] as organizations[],
    status: "idle" as "idle" | "loading" | "failed",
  },
  reducers: {
    getOrganizationsRequest: (state) => {
      state.status = "loading";
    },
    getOrganizationsSuccess: (
      state,
      action: PayloadAction<organizations[]>
    ) => {
      state.status = "idle"; // Changed "succeeded" to "idle" to match type
      state.organizations = action.payload;
    },
    getOrganizationsFailed: (state) => {
      state.status = "failed";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOrganizations.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getOrganizations.fulfilled, (state, action) => {
      state.status = "idle"; // Changed "succeeded" to "idle" to match type
      state.organizations = action.payload;
    });
    builder.addCase(getOrganizations.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const {
  getOrganizationsRequest,
  getOrganizationsSuccess,
  getOrganizationsFailed,
} = organizationsSlice.actions;

export default organizationsSlice.reducer;
