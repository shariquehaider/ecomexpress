import { userLoginPayload, userRegisterPayload } from '@/interface/interaces';
import { useState } from 'react';
import { userLoginDispatchAction, userRegisterDispatchAction } from '@/disptacher/user';
import store from '@/store';

type TabValue = 'login' | 'register'
function useRegister() {
  const [tabValue, setTabValue] = useState<TabValue>("login");
  const [loginDetails, setLoginDetails] = useState<userLoginPayload>({
    username: "",
    password: ""
  });
  const [registerDetails, setRegisterDetails] = useState<userRegisterPayload>({
    username: "",
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: ""
  });

  const handleLogin = (event: React.FormEvent<HTMLInputElement>) => {
    const {name, value} = event.currentTarget;
    setLoginDetails(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  const handleLoginClick = () => {
    store.dispatch(userLoginDispatchAction(loginDetails));
  }


  const handleRegister = (event: React.FormEvent<HTMLInputElement>) => {
    const {name, value} = event.currentTarget;
    setRegisterDetails(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  const handleRegisterClick = () => {
    store.dispatch(userRegisterDispatchAction(registerDetails))
  }

  const tabValueHandler = (value: TabValue) => {
    setTabValue(value)
  }
  return {tabValue, loginDetails, registerDetails, tabValueHandler, handleLogin, handleRegister, handleLoginClick, handleRegisterClick}
}

export default useRegister


