import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface GuidState {
  currentGuid: string;
  history: { guid: string; timestamp: string }[];
}

const initialState: GuidState = {
  currentGuid: '',
  history: [],
};

const guidSlice = createSlice({
  name: 'guid',
  initialState,
  reducers: {
    generateGuid(state) {
      const newGuid = uuidv4();
      const timestamp = new Date().toISOString();
      state.currentGuid = newGuid;
      state.history.unshift({ guid: newGuid, timestamp });
    },
    clearHistory(state) {
      state.history = [];
    },
  },
});

export const { generateGuid, clearHistory } = guidSlice.actions;
export default guidSlice.reducer;