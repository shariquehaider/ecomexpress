import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  tabName: "#settings"
}

const tabSlice = createSlice({
  name: "tabName",
  initialState,
  reducers: {
    setTab(state, action){
      state.tabName = action.payload
    }
  }
});


export const { setTab } = tabSlice.actions
export default tabSlice.reducer
