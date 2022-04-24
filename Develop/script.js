// Assignment Code
const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  return 10;
};

// Criteria Values

/* const getPasswordCriteria = () => {
  return [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  ];
}; */

const lowercaseLetters = ["abcdefghijklmnopqrstuvwxyz"];
const uppercaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const numbers = ["0123456789"];
const specialCharacters = ["!#$%&'()*+,-./:;<=>?@[]^_`{|}~`"];

const createRandomPassword = () => {
  // return "kdUE28(@d0";
};

// main function to generate the random password
const generatePassword = () => {
  /* // get the password length
  const passwordLength = getPasswordLength();

  // get the password criteria
  const passwordCriteria = getPasswordCriteria();

  // create random password
  const password = createRandomPassword(passwordLength, passwordCriteria);

  return password; */

  // Getting the Input HTML element, and storing it in a variable.
  const numberInput = document.querySelector("#number-input");

  if (numberInput.value < 8 || numberInput.value > 128) {
    window.alert("Invalid Password Length");
  }
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
