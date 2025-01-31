import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  error: null,
  userDetails: null
}

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    userDetailsRequest(state) {
      state.isLoading = true;
      state.error = null;
      state.userDetails = null;
    },
    userDetailsSuccess(state, action){
      state.isLoading =false;
      state.error = null;
      state.userDetails = action.payload
    },
    userDetailsFailed(state, action){
      state.error = action.payload;
      state.isLoading = false;
      state.userDetails = null;
    }
  }
})

export const { userDetailsRequest, userDetailsSuccess, userDetailsFailed } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
