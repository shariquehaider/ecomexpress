import { useState } from 'react'

type TabValue = 'login' | 'register'
function useRegister() {
  const [tabValue, setTabValue] = useState<TabValue>("login");
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: ""
  });
  const [registerDetails, setRegisterDetails] = useState({
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
    console.log(loginDetails)
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

  const tabValueHandler = (value: TabValue) => {
    setTabValue(value)
  }
  return {tabValue, loginDetails, registerDetails, tabValueHandler, handleLogin, handleRegister, handleLoginClick}
}

export default useRegister