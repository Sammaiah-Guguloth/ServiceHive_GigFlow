import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";
import {
  REGISTER_URL,
  LOGIN_URL,
  LOGOUT_URL,
  ME_URL,
} from "../../api/apis"

// REGISTER
export const registerUserThunk = createAsyncThunk(
  "auth/register",
  async (
    formData: { name: string; email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axiosInstance.post(REGISTER_URL, formData);
      return data.user;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

// LOGIN
export const loginUserThunk = createAsyncThunk(
  "auth/login",
  async (
    formData: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axiosInstance.post(LOGIN_URL, formData);
      return data.user;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

// LOGOUT
export const logoutUserThunk = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axiosInstance.post(LOGOUT_URL);
      return true;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Logout failed"
      );
    }
  }
);

// GET_ME
export const getMeThunk = createAsyncThunk(
    "auth/me",
    async (_, { rejectWithValue }) => {
      try {
        const { data } = await axiosInstance.get(ME_URL);
        return data.user;
      } catch (error: any) {
        return rejectWithValue(
          error.response?.data?.message || "Not authenticated"
        );
      }
    }
  );
  