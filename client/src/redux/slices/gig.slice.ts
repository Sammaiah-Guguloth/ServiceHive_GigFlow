import { createSlice } from "@reduxjs/toolkit";
import { getGigsThunk, getMyGigsThunk } from "../thunks/gig.thunk";

interface Gig {
  _id: string;
  title: string;
  description: string;
  budget: number;
  status: string;
}

interface GigState {
  myGigs: Gig[];
  browseGigs: Gig[];
  loading: boolean;
  error: string | null;
}

const initialState: GigState = {
  browseGigs:[],
  myGigs: [],
  loading: false,
  error: null,
};

const gigSlice = createSlice({
  name: "gig",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMyGigsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMyGigsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.myGigs = action.payload;
      })
      .addCase(getMyGigsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // BROWSE GIGS
      .addCase(getGigsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGigsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.browseGigs = action.payload;
      })
      .addCase(getGigsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default gigSlice.reducer;
