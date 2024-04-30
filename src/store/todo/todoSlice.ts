import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Item, TodoState } from './types';

const initialState: TodoState = {
  items: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<Item>) => {
      state.items = state.items.filter(
        (item) => item.title != action.payload.title
      );
    },
  },
});

export const { addItem, removeItem } = todoSlice.actions;

export default todoSlice.reducer;
