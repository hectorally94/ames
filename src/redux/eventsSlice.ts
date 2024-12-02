// eventsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: "",
  selectedType: "",
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },
  },
});

export const { setSelectedCategory, setSelectedType } = eventsSlice.actions;
export default eventsSlice.reducer;
