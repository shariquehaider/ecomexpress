import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "@/store/userLogin";

const store = configureStore({
  reducer: {
    userLogin: userLoginReducer
  }
});

export default store;