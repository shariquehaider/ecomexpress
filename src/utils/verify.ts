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

export function isValidPassword(password: string) {
  const length = hasMinimumLength(password);
  const upperCaseLetter = hasUppercaseLetter(password)
  const digit =  hasDigit(password);
  const specialCharacter = hasSpecialCharacter(password)
  return {length, upperCaseLetter, digit, specialCharacter}
}

function hasMinimumLength(password: string): boolean {
  return password.length >= 8;
}

function hasUppercaseLetter(password: string): boolean {
  const regex = /[A-Z]/;
  return regex.test(password);
}

function hasDigit(password: string): boolean {
  const regex = /\d/;
  return regex.test(password);
}

function hasSpecialCharacter(password: string): boolean {
  const regex = /[@$!%*?&]/;
  return regex.test(password);
}