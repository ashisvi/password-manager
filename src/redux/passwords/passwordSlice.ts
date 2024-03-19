import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { savePasswordToAsyncStorage } from "@/utils/storage"

interface PasswordState {
  passwords: Password[]
}

const initialState: PasswordState = {
  passwords: [],
}

const passwordSlice = createSlice({
  name: "passwords",
  initialState,

  reducers: {
    loadPasswords(state, action: PayloadAction<Password[]>) {
      state.passwords = action.payload
    },
    addPassword(state, action: PayloadAction<Password>) {
      state.passwords.push(action.payload)
      savePasswordToAsyncStorage(state.passwords)
    },
    updatePassword(state, action: PayloadAction<Password>) {
      const { id } = action.payload
      const existingPasswordIndex = state.passwords.findIndex(
        (password) => password.id === id,
      )

      if (existingPasswordIndex !== -1) {
        state.passwords[existingPasswordIndex] = action.payload
      }
    },
    deletePassword(state, action: PayloadAction<string>) {
      state.passwords = state.passwords.filter(
        (password) => password.id !== action.payload,
      )
    },
  },
})

export const { loadPasswords, addPassword, updatePassword, deletePassword } =
  passwordSlice.actions

export default passwordSlice.reducer
