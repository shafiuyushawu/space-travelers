import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  isLoading: false,
  error: null,
};

const client = axios.create({
  baseURL: 'https://api.spacexdata.com/v3/',
});

export const fetchMission = createAsyncThunk(
  'missions/fetchMissions',
  async (_, thunkAPI) => {
    try {
      const response = await client.get('missions');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: 'Something went wrong' });
    }
  },
);

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMission.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        missions: action.payload,
      }))
      .addCase(fetchMission.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload.error,
      }))
      .addCase(fetchMission.pending, (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }));
  },
});

export default missionSlice.reducer;
