import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";
import { GIGS_URL } from "../../api/apis";

export const postGigThunk = createAsyncThunk(
  "gigs/post",
  async (
    data: {
      title: string;
      description: string;
      budget: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post(GIGS_URL, data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to post gig"
      );
    }
  }
);

// GET MY POSTED GIGS
export const getMyGigsThunk = createAsyncThunk(
    "gigs/getMyGigs",
    async (_, { rejectWithValue }) => {
      try {
        const { data } = await axiosInstance.get(GIGS_URL, {
          params: { mine: true },
        });

        // console.log("data : " , data);
  
        return data.gigs;
      } catch (error: any) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to fetch gigs"
        );
      }
    }
  );

  /**
 * GET ALL OPEN GIGS (Browse)
 */
export const getGigsThunk = createAsyncThunk(
    "gigs/getAll",
    async (search: string | undefined, { rejectWithValue }) => {
      try {
        const { data } = await axiosInstance.get(GIGS_URL, {
          params: search ? { search } : {},
        });
  
        // backend returns { gigs }
        return data.gigs;
      } catch (error: any) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to fetch gigs"
        );
      }
    }
  );
