import { configureStore } from "@reduxjs/toolkit";
import levels from './slices/LevelSlice';

const store = configureStore({
  reducer: levels,
})

export default store;
