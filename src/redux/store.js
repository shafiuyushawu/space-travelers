import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionSlice from './missions/missionSlice';
import rocketReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionSlice,
    rockets: rocketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
