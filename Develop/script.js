// Assignment Code
const generateBtn = document.querySelector("#generate");

//Get password length
const getPasswordLength = () => {
  const len = prompt("Enter your preferred password length");
  if (len == null || len == "") {
    alert("Field can't be empty");
    getPasswordLength();
  }
  if (isNaN(len)) {
    alert("You must input a number!");
    getPasswordLength();
  }
  if (len < 8 || len > 128) {
    alert("length should be between 8 and 128");
    getPasswordLength();
  }
  console.log(len);
  return len;
};

//Password Criteria
const getPasswordCriteria = () => {
  //ask user to confirm their password
  const hasUpper = confirm("To include uppercase, press 'OK'?");
  const hasLower = confirm("To include lower case, press 'OK'?");
  const hasNumbers = confirm("To include numbers, press 'OK'?");
  const hasSpecial = confirm("To include special characters, press 'OK'?");

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const special = "!@,#$%&*{}[]/\\+=";

  //Validate password criteria
  if (!hasUpper && !hasLower && !hasNumbers && !hasSpecial) {
    alert("You must at least select 1 character type!");
    return generatePassword();
  }
  const chosenCharacters = [];
  if (hasLower) {
    chosenCharacters[0] = lower;
  }
  if (hasUpper) {
    chosenCharacters[1] = upper;
  }
  if (hasNumbers) {
    chosenCharacters[2] = numbers;
  }
  if (hasSpecial) {
    chosenCharacters[3] = special;
  }
  console.log(chosenCharacters);
  return chosenCharacters;
};
