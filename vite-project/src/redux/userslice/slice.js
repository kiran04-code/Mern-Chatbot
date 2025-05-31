import { createSlice } from "@reduxjs/toolkit";

// ❌ Typo: initialSate → ✅ initialState
const initialState = {
  currentUser: null,
  erroemessage:null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
 
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
    },

    signInFail: (state,action) => {
      state.erroemessage = action.payload

    },
  },
});

// ✅ Export actions and reducer
export const { signInSuccess, signInFail } = userSlice.actions;
export default userSlice.reducer;
