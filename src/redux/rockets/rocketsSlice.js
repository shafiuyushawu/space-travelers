import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  isLoading: false,
  error: '',
};

const client = axios.create({
  baseURL: 'https://api.spacexdata.com/v4/',
});

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async (_, thunkAPI) => {
    try {
      const response = await client.get('rockets');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: 'Something went wrong' });
    }
  },
);

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      const rocketList = action.payload.map((rocket) => ({
        id: rocket.id,
        rocket_name: rocket.name,
        description: rocket.description,
        flickr_images: [...rocket.flickr_images],
      }));
      return ({
        ...state,
        isLoading: false,
        rockets: rocketList,
      });
    })
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        isLoading: true,
        error: '',
      }))
      .addCase(fetchRockets.rejected, (state, action) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
      }));
  },
});

export default rocketSlice.reducer;
