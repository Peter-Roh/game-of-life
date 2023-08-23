import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ColorState = {
  color: string;
};

const initialState: ColorState = {
  color: "rose",
};

export const colorSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
});

export const { setColor } = colorSlice.actions;
export default colorSlice;
