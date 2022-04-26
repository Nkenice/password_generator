// Assignment Code
const generateBtn = document.querySelector("#generate");

//Get password length
const getPasswordLength = () => {
  const length = prompt("Choose password length");
  if (length == null || length == "") {
    alert("Field can't be empty");
    getPasswordLength();
  }
  if (isNaN(length)) {
    alert("please enter a number!");
    getPasswordLength();
  }
  if (length < 8 || length > 128) {
    alert("Choose a number between 8 and 128");
    getPasswordLength();
  }
  console.log(length);
  return length;
};


  //Criteria Values  
  const lowercaseLetters = ["abcdefghijklmnopqrstuvwxyz"];
  const uppercaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const numbers = ["0123456789"];
  const specialCharacters = ["!#$%&'()*+,-./:;<=>?@[]^_`{|}~`"];
  const passwordValue='';

  // Write password to the #password input
// function enterpassword() {
//   const password = generatepassword;
//   const passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

function generatePassword() {
  // passwordLength
  const getPasswordLength = prompt("Please choose a number between 8 and 128)");

    //Create object of array to store the true / false based on teh user input
    const password = [
      { lowerCase: confirm("Add Lowercase?") },

      { upperCase: confirm("Add Uppercase?") },

      { Number: confirm("Add Number?") },

      { specialCharacter: confirm("Add Special Character?") },
    ];

    const createRandomPassword = () => {
      return createRandomPassword
    };
    
    // main function to generate the random password
    const generatePassword = () => {
      passwordValue='';
      /* // get the password length
      const passwordLength = getPasswordLength();
    
      // get the password criteria
      const passwordCriteria = getPasswordCriteria();
    
      // create random password
      const password = createRandomPassword(passwordLength, passwordCriteria);
    
      return password; */
    
     
    
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);