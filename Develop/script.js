// Assignment Code
const generateBtn = document.querySelector("#generate");

function generatePassword() {
  // passwordLength
  const getPasswordLength = prompt("Please choose a number between 8 and 128)");

  /*Verify if chosen lenght is greater or equal to 8 and less than or equal to 128 */
  if (num <= 128 && num >= 8) {
    //Create object of array to store the true / false based on teh user input
    const password = [
      { lowerCase: confirm("Add Lowercase?") },

      { upperCase: confirm("Add Uppercase?") },

      { Number: confirm("Add Number?") },

      { specialCharacter: confirm("Add Special Character?") },
    ];

    //Criteria Values

    * const getPasswordCriteria = () => {
      return [
        "abcdefghijklmnopqrstuvwxyz",
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "0123456789",
        " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
      ];
    }; 
    
    const lowercaseLetters = ["abcdefghijklmnopqrstuvwxyz"];
    const uppercaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    const numbers = ["0123456789"];
    const specialCharacters = ["!#$%&'()*+,-./:;<=>?@[]^_`{|}~`"];
    
    const createRandomPassword = () => {
      // return "kdUE28(@d0";
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
    
    