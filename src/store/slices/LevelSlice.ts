/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface LevelInitialState {
  health: number,
  mode: string,
  accomplishment: string
}

const initialState: LevelInitialState = {
  health: 3,
  mode: 'block',
  accomplishment: '',
};

const levelsSlice = createSlice({
  name: 'levels',
  initialState,
  reducers: {
    loseHealth: (state) => { state.health -= 1; },
    initAccomplishment: (state, action: { payload: number }) => { state.accomplishment = ''.padStart(action.payload, '0'); },
    updateAccomplishment: (state, { payload }: { payload: number }) => {
      const { accomplishment } = state;
      state.accomplishment = `${accomplishment.substring(0, payload)}1${accomplishment.substring(payload + 1)}`;
    },
    returnToDefaults: () => initialState,
    setMode: (state, action: { payload: string }) => { state.mode = action.payload; },
  },
});

const { actions, reducer } = levelsSlice;

export default reducer;
export const {
  loseHealth,
  setMode,
  updateAccomplishment,
  initAccomplishment,
  returnToDefaults,
} = actions;
export type LevelState = ReturnType<typeof reducer>;
