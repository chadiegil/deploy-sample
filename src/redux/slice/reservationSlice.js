import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reservationData: {},
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    SAVE_RESERVATION(state, action) {
      state.reservationData = action.payload;
      console.log(action.payload);
    },
  },
});

export const { SAVE_RESERVATION } = reservationSlice.actions;

export const selectReservation = (state) => state.reservation.reservationData;

export default reservationSlice.reducer;
