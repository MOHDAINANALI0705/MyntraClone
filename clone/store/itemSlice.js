import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
  name: 'item',
  initialState: [],
  reducers: {
    addInitialItem: (state, actions) => {
      return actions.payload;
    }
  }
})

export const itemActions = itemSlice.actions;

export default itemSlice;