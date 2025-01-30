import { userLoginFailed, userLoginRequest, userLoginSuccess } from "@/store/userLogin";
import { type Dispatch } from "@reduxjs/toolkit";
import { userLoginPayload, userRegisterPayload } from "@/interface/interaces";
import { userRegisterFailed, userRegisterRequest, userRegisterSuccess } from "@/store/userRegister";
import { redirect } from "react-router-dom";

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
    if (response.status !== 200) {
      throw new Error(data.error)
    } else {
      localStorage.setItem('token', data.token)
      dispatch(userLoginSuccess());
      redirect("/")
    }
  } catch (error) {
    dispatch(userLoginFailed(error))
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
    if (response.status !== 201) {
      throw new Error(data.error);
    } else {
      dispatch(userRegisterSuccess(data))
    }
  } catch (error) {
    dispatch(userRegisterFailed(error))
  }
}