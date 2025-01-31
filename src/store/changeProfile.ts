import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  error: null,
  response: null
}

const changePasswordSlice = createSlice({
  name: 'changePassword',
  initialState,
  reducers:
  {
    changePasswordRequest(state) {
      state.isLoading = true;
      state.error = null;
      state.response = null;
    },
    changePasswordSuccess(state, action){
      state.isLoading = false;
      state.response = action.payload
    },
    changePasswordFailed(state, action){
      state.isLoading = false;
      state.error = action.payload
    }
  }
});


export const { changePasswordRequest, changePasswordSuccess, changePasswordFailed } = changePasswordSlice.actions;

export const changePasswordReducer = changePasswordSlice.reducer