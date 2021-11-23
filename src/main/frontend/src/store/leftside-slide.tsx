import { createSlice } from "@reduxjs/toolkit";
import { RootState } from './index';

// Define a type for the slice state
interface ToggleState {
  isVisibleLeftSideMenu: boolean;
}

// Define the initial state using that type
const initialState: ToggleState = {
  isVisibleLeftSideMenu: false,
};

const sliceLeftMenu = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.isVisibleLeftSideMenu = !state.isVisibleLeftSideMenu;
    },
  },
});

console.log(sliceLeftMenu.reducer);

export const {toggle} = sliceLeftMenu.actions;
export const selectCount = (state: RootState) => state.ui

export default sliceLeftMenu.reducer
