interface Password {
  id: string;
  website: string;
  username: string;
  password: string;
  createdAt?: number;
  updatedAt?: number;
}

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PasswordState {
  passwords: Password[];
}

const initialState: PasswordState = {
  passwords: [],
};

const passwordSlice = createSlice({
  name: "passwords",
  initialState,

  reducers: {
    addPassword(state, action: PayloadAction<Password>) {
      state.passwords.push(action.payload);
    },
    updatePassword(state, action: PayloadAction<Password>) {
      const { id } = action.payload;
      const existingPasswordIndex = state.passwords.findIndex(
        (password) => password.id === id
      );

      if (existingPasswordIndex !== -1) {
        state.passwords[existingPasswordIndex] = action.payload;
      }
    },
    deletePassword(state, action: PayloadAction<string>) {
      state.passwords = state.passwords.filter(
        (password) => password.id !== action.payload
      );
    },
  },
});

export const { addPassword, updatePassword, deletePassword } =
  passwordSlice.actions;

export default passwordSlice.reducer;
