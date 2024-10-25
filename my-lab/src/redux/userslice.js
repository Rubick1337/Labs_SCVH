import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    updateUser(state, action) {
      const { id, updates } = action.payload;
      const index = state.users.findIndex(user => user.id === id);
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...updates }; // Обновляет только указанные поля
      } else {
        state.error = 'User not found';
      }
    },
    removeUser(state, action) {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { addUser, updateUser, removeUser, setError } = userSlice.actions;
export default userSlice.reducer;
