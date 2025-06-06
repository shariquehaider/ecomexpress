import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "@/store/userLogin";
import userRegisterReducer from "@/store/userRegister";
import userDetailsReducer from "@/store/userDetails";
import tabNameReducer from "@/store/tabName";
import { changePasswordReducer, updateAddressReducer } from "./changeProfile";

const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    tabName: tabNameReducer,
    changePassword: changePasswordReducer,
    updateAddress: updateAddressReducer
  }
});

export default store;