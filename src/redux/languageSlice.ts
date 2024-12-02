// languageSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface Language {
  id: any | null; // id can be a string or null
  name: any;
}
interface LanguageState {
  language: string;
}
// Check localStorage for the saved language, default to 'English' if not found
const initialLanguage = localStorage.getItem('selectedLanguage') || 'French';

const initialState: LanguageState = {
  language: initialLanguage, // Default language
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
export type { LanguageState }; // Ensure you're exporting the type