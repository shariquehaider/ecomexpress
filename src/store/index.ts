import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "@/store/userLogin";
import userRegisterReducer from "@/store/userRegister";

const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer
  }
});

export default store;