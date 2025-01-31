import { userLoginFailed, userLoginRequest, userLoginSuccess } from "@/store/userLogin";
import { type Dispatch } from "@reduxjs/toolkit";
import { userLoginPayload, userRegisterPayload } from "@/interface/interaces";
import { userRegisterFailed, userRegisterRequest, userRegisterSuccess } from "@/store/userRegister";
import { redirect } from "react-router-dom";
import { userDetailsFailed, userDetailsRequest, userDetailsSuccess } from "@/store/userDetails";
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

export const userDetailsDispatchAction = () => async (dispatch: Dispatch) => {
  dispatch(userDetailsRequest())
  try {
    const token = localStorage.getItem('token')
    const response = await fetch("http://localhost:8000/api/account", {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    if (response.status == 200) {
      dispatch(userDetailsSuccess(data))
    } else {
      throw new Error(data.error)
    }
  } catch (error) {
    dispatch(userDetailsFailed(error))
  }
}