import { userLoginPayload, userRegisterPayload } from '@/interface/interaces';
import { useState } from 'react';
import { userLoginDispatchAction, userRegisterDispatchAction } from '@/disptacher/user';
import store from '@/store';
import { useToast } from "@/hooks/use-toast"
import { verifyEmail, verifyPassword } from '@/utils/verify';

type TabValue = 'login' | 'register'
function useRegister() {
  const { toast } = useToast()
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
    const { name, value } = event.currentTarget;
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
    const { name, value } = event.currentTarget;
    setRegisterDetails(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  const handleRegisterClick = () => {
    const isEmailVerified: boolean = verifyEmail(registerDetails.email, registerDetails.confirmEmail);
    const isPasswordVerified: boolean = verifyPassword(registerDetails.password, registerDetails.confirmPassword);
    if (isEmailVerified && isPasswordVerified) {
      store.dispatch(userRegisterDispatchAction(registerDetails))
    } else {
      toast({
        description: "Email or Password incorrect!"
      })
    }
  }

  const tabValueHandler = (value: TabValue) => {
    setTabValue(value)
  }
  return { tabValue, loginDetails, registerDetails, tabValueHandler, handleLogin, handleRegister, handleLoginClick, handleRegisterClick }
}

export default useRegister


