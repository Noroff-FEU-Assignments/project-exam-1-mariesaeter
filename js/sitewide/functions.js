// FUNCTIONS TO USE IN FORM VALIDATIONS

// input length
// inputValue = length of input
// len = minimum required length
export function checkLength(inputValue, len) {
  if (inputValue.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

// function for validating email
// email = input email to check
// regEx from lesson javascript 1 4.4 Form validation
export function checkEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const matchEmail = regEx.test(email);
  return matchEmail;
}
