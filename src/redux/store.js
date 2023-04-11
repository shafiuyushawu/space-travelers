
import missionSlice from './missions/missionSlice';
import rocketReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionSlice,
    rockets: rocketReducer,
  },
});

export default store;
