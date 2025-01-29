import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  error: null,
  user: null
}

const userRegisterSlice = createSlice({
  name: 'userRegister',
  initialState,
  reducers: {
    userRegisterRequest(state){
      state.isLoading = true;
      state.error = null;
      state.user = null;
    },
    userRegisterSuccess(state, action){
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },
    userRegisterFailed(state, action){
      state.isLoading = false;
      state.error = action.payload;
      state.user = null;
    }
  }
});

export const { userRegisterRequest, userRegisterSuccess, userRegisterFailed } = userRegisterSlice.actions;

export default userRegisterSlice.reducer;
