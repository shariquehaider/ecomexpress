export interface userLoginPayload {
  username: string,
  password: string
}

export interface userRegisterPayload {
  username: string
  email: string,
  confirmEmail: string,
  password: string,
  confirmPassword: string,
  name: string
}

export interface newPassword {
  currentPassword: string,
  newPassword: string,
  confirmNewPassword: string
}