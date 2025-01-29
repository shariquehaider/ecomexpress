import { userLoginRequest, userLoginSuccess } from "@/store/userLogin";
import { type Dispatch } from "@reduxjs/toolkit";
import { userLoginPayload, userRegisterPayload } from "@/interface/interaces";
import { userRegisterFailed, userRegisterRequest } from "@/store/userRegister";
import { error } from "console";

export const userLoginDispatchAction = (payload: userLoginPayload) => async (dispatch: Dispatch) => {
  dispatch(userLoginRequest());
  try {
    const response = await fetch("http://localhost:8000/api/login", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export const userRegisterDispatchAction = (payload: userRegisterPayload) => async (dispatch: Dispatch) => {
  dispatch(userRegisterRequest())
  try {
    const response = await fetch("http://localhost:8000/api/register", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error)
    } else {
      dispatch(userLoginSuccess(data.message))
    }
  } catch (error) {
    dispatch(userRegisterFailed(error))
  }
}