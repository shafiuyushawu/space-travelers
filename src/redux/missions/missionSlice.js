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
      return thunkAPI.rejectWithValue({ message: 'Something went wrong' });
    }
  },
);

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    missionStatus: (state, { payload: { missionId } }) => {
      const newMissions = state.missions.map((mission) => {
        if (mission.mission_id === missionId) {
          return { ...mission, member: true };
        }
        return mission;
      });
      return { ...state, missions: newMissions };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMission.fulfilled, (state, action) => {
        const missions = action.payload.map((mission) => ({ ...mission, member: false }));
        return {
          ...state,
          isLoading: false,
          missions,
        };
      })
      .addCase(fetchMission.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload.message,
      }))
      .addCase(fetchMission.pending, (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }));
  },
});

export const { missionStatus } = missionSlice.actions;
export default missionSlice.reducer;
