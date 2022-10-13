import { createSlice } from '@reduxjs/toolkit';

interface LevelInitialState {
  level: number,
  health: number,
  mode: string,
  accomplishment: string
}

const initialState: LevelInitialState = {
  level: 1,
  health: 3,
  mode: 'block',
  accomplishment: ''.padStart(100, '0')
};

const levelsSlice = createSlice({
  name: 'levels',
  initialState,
  reducers: {
    loseHealth: state => { state.health -= 1 },
    restoreHealth: state => { state.health = 3},
    updateAccomplishment: (state, action: {payload: number}) => {
      const { accomplishment } = state;
      const { payload } = action;

      state.accomplishment = accomplishment.substring(0, payload) + '1' + accomplishment.substring(payload + 1)
    },
    setMode: (state, action: {payload: string}) => { state.mode = action.payload }
  }
});

const { actions, reducer } = levelsSlice

export default reducer;
export const { loseHealth, setMode, restoreHealth, updateAccomplishment } = actions;
export type LevelState = ReturnType<typeof reducer>;
