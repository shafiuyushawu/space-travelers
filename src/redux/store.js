import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './missions/missionSlice';
import rocketReducer from './rockets/rocketsSlice';

const store = configureStore({
  missions: missionSlice,
  rockets: rocketReducer,
});
export default store;
