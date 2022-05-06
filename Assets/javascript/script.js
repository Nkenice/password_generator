// Assignment Code
const generateBtn = document.querySelector("#generate");

//Get password length
const getPasswordLength = () => {
  const length = prompt("Enter password length");
  if (length == null || length == "") {
    alert("Field can't be empty");
    getPasswordLength();
  }
  if (isNaN(length)) {
    alert("You must input a number!");
    getPasswordLength();
  }
  if (length > 128 || length < 8) {
    alert("please choose a number between 8 and 128");
    getPasswordLength();
  }
  return length;
};

//Password Criteria
const getPasswordCriteria = () => {
  //ask user to confirm their password criteria
  const hasUpperCase = confirm("To include uppercase, press 'OK'");
  const hasLowerCase = confirm("To include lower case, press 'OK'");
  const hasNumbers = confirm("To include numbers, press 'OK'");
  const hasSpecialCharacters = confirm(
    "To include special characters, press 'OK'"
  );

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const special = "!@,#$%&*{}[]/\\+=";

  if (!hasUpperCase && !hasLowerCase && !hasNumbers && !hasSpecialCharacters) {
    alert("You must at least select 1 character type!");
    return generatePassword();
  }
  const chosenCharacters = [];
  if (hasLowerCase) {
    chosenCharacters[0] = lower;
  }
  if (hasUpperCase) {
    chosenCharacters[1] = upper;
  }
  if (hasNumbers) {
    chosenCharacters[2] = numbers;
  }
  if (hasSpecialCharacters) {
    chosenCharacters[3] = special;
  }
  return chosenCharacters;
};

const createRandomPassword = (length, chosenValues) => {
  let result = "";
  let text = chosenValues.toString();
  for (var i = 0; i < length; i++) {
    result += text.charAt(Math.floor(Math.random() * text.length));
  }
  return result;
};

// main function to generate the random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();

  // get the password criteria
  const passwordCriteria = getPasswordCriteria();

  // create random password
  const password = createRandomPassword(passwordLength, passwordCriteria);

  return password;
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
