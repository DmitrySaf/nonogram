import { createSlice } from '@reduxjs/toolkit';

interface LevelInitialState {
  level: number,
  health: number,
  mode: string
}

const initialState: LevelInitialState = {
  level: 1,
  health: 3,
  mode: 'block'
};

const levelsSlice = createSlice({
  name: 'levels',
  initialState,
  reducers: {
    loseHealth: state => { state.health -= 1 },
    restoreHealth: state => { state.health = 3},
    setMode: (state, action) => { state.mode = action.payload }
  }
});

const { actions, reducer } = levelsSlice

export default reducer;
export const { loseHealth, setMode, restoreHealth } = actions;
export type LevelState = ReturnType<typeof reducer>;
