import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

type InitialState = {
  numOfIcecreams: number
}

const initialState:InitialState = {
  numOfIcecreams: 20,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action:PayloadAction<number>) => {
      state.numOfIcecreams += action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   // Use builder.addCase for each additional case
  //   builder.addCase("cake/ordered", (state) => {
  //     state.numOfIcecreams--;
  //   });
  //   // You can add more cases using builder.addCase here
  // },

  // another way
  extraReducers: (builder) => {
    // Use builder.addCase for each additional case
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecreams--;
    });
    // You can add more cases using builder.addCase here
  },

  // the following is deprecated
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numOfIcecreams--;
  //   },
  // },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
