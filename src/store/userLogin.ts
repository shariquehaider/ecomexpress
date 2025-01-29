import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  error: null,
  isAuthenticated: localStorage.getItem('token') ? true : false
}


const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {
    userLoginRequest(state){
      state.isLoading = true;
      state.error = null;
      state.isAuthenticated = false;
    },
    userLoginSuccess(state){
      state.isLoading = false;
      state.error = null;
      state.isAuthenticated = true;
    },
    userLoginFailed(state, action){
      state.isLoading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    userLogout(state){
      state.isLoading = false;
      state.error = null;
      state.isAuthenticated = false;
    }
  }
})

export const { userLoginRequest, userLoginSuccess, userLoginFailed, userLogout } = userLoginSlice.actions;

export default userLoginSlice.reducer;
