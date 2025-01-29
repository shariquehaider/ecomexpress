export const verifyEmail = (email: string, confirmEmail: string): boolean => {
  if (email === confirmEmail) {
    return true
  }  
  return false
} 

export const verifyPassword = (password: string, confirmPassword: string): boolean => {
  if (password === confirmPassword) {
    return true;
  }
  return false;
}