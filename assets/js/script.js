// Arrays with all char sets
var upperCaseOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numberOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']; 
var specCharOptions = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '/', '}'];

// Variables for password options
var selections = [];
var selectionsString;
var pwLength; 
var upperCase; 
var lowerCase; 
var number; 
var specChar; 


// Prompt user:
var generatePassword = function() {
  pwLength = window.prompt("Please input a password length from 8 to 120.")
  console.log(pwLength);
  if (!pwLength) {
    window.alert("You must enter a password length.")
  } else if (pwLength < 8) {
    window.alert("You must select a minimum length of 8 characters.")
  } else if (pwLength > 120) {
    window.alert("You must select a length less than 120 characters.")
  } else {
    upperCase = confirm("Would you like Upper Case letters?")
    lowerCase = confirm("Would you like Lower Case letters?")
    number = confirm("Would you liek numebrs?")
    specChar = confirm("Would you like special characters?")
  }

  // check if user selected at least one option
  if (!upperCase && !lowerCase && !number && !specChar) {
    window.alert("You must select at least one option!")
  } 

  // add user choices to the selections array for use in generator
  if (upperCase) {
    selections.push(upperCaseOptions);
    console.log(selections);
  }
  if (lowerCase) {
    selections.push(lowerCaseOptions);
    console.log(selections);
  }
  if (number) {
    selections.push(numberOptions);
    console.log(selections);
  }
  if (specChar) {
    selections.push(specCharOptions);
    console.log(selections);
  }

  var selectionsString = selections.toString();
  console.log(selectionsString);
  
  var passwordOutput = "";

  // Generate password
  for (i = 0; i < pwLength; i++) {
    var arrayMath = Math.floor(Math.random() * selectionsString.length);
    var placeholder = selectionsString[arrayMath];
    passwordOutput += placeholder();
  }
  return passwordOutput; 
}

// Make a reset function



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
