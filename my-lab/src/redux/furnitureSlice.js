import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  error: null,
};

const furnitureSlice = createSlice({
  name: 'furniture',
  initialState,
  reducers: {
    addFurniture(state, action) {
      state.items.push(action.payload);
    },
    updateFurniture(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      } else {
        state.error = 'Furniture item not found';
      }
    },
    removeFurniture(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { addFurniture, updateFurniture, removeFurniture, setError } = furnitureSlice.actions;
export default furnitureSlice.reducer;
