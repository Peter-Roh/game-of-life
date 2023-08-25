import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { colorVariants } from "../common/value";

export type ColorState = {
  color: keyof typeof colorVariants;
};

const initialState: ColorState = {
  color: "rose",
};

export const colorSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<keyof typeof colorVariants>) => {
      state.color = action.payload;
    },
  },
});

export const { setColor } = colorSlice.actions;
export default colorSlice;
