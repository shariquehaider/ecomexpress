import { userLoginRequest } from "@/store/userLogin";
import { type Dispatch } from "@reduxjs/toolkit";
import { userLoginPayload } from "@/interface/interaces";

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