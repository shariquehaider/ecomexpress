import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  error: null,
  message: "Don't have a account yet? Register Here!"
}

const userRegisterSlice = createSlice({
  name: 'userRegister',
  initialState,
  reducers: {
    userRegisterRequest(state){
      state.isLoading = true;
      state.error = null;
      state.message = initialState.message;
    },
    userRegisterSuccess(state, action){
      state.isLoading = false;
      state.error = null;
      state.message = action.payload;
    },
    userRegisterFailed(state, action){
      state.isLoading = false;
      state.error = action.payload;
      state.message = "";
    }
  }
});

export const { userRegisterRequest, userRegisterSuccess, userRegisterFailed } = userRegisterSlice.actions;

export default userRegisterSlice.reducer;
