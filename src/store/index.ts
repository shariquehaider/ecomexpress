import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "@/store/userLogin";
import userRegisterReducer from "@/store/userRegister";
import userDetailsReducer from "@/store/userDetails";

const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer
  }
});

export default store;