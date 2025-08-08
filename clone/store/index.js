import { configureStore } from '@reduxjs/toolkit';
import itemSlice from './itemSlice';
import fetchStatusSlice from './fetchStatusSlice';
import BagSlice from './BagSlice';

const MyntraStore = configureStore({
  reducer: {
    item: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: BagSlice.reducer
  }
})

export default MyntraStore;