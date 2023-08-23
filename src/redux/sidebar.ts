import { createSlice } from "@reduxjs/toolkit";

export type SidebarState = {
  isOpen: boolean;
};

const initialState: SidebarState = {
  isOpen: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleOpen } = sidebarSlice.actions;
export default sidebarSlice;
