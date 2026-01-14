import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";
import { BIDS_URL } from "../../api/apis";


 // CREATE A BID
export const createBidThunk = createAsyncThunk(
  "bids/create",
  async (
    data: {
      gigId: string;
      message: string;
      price: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post(BIDS_URL, data);
      return response.data.bid;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to submit bid"
      );
    }
  }
);

// GET BIDS FOR A GIG
export const getBidsForGigThunk = createAsyncThunk(
    "bid/getForGig",
    async (gigId: string, { rejectWithValue }) => {
      try {
        const { data } = await axiosInstance.get(`${BIDS_URL}/${gigId}`);
        console.log("bids : " , data);
        return data;
      } catch (error: any) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to fetch bids"
        );
      }
    }
  );
  
  // HIRE BID
  export const hireBidThunk = createAsyncThunk(
    "bid/hire",
    async (bidId: string, { rejectWithValue }) => {
      try {
        const { data } = await axiosInstance.patch(
          `${BIDS_URL}/${bidId}/hire`
        );
        return data;
      } catch (error: any) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to hire bid"
        );
      }
    }
  );
