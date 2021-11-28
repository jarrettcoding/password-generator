// need variable for inputs and characters

// Arrays with all char sets
var mainOptions = [
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'], 
  ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '/', '}']
]

// Variables for password options
var selections = []
var pwLength; 
var upperCase; 
var lowerCase; 
var number; 
var specChar; 

// add user choices to the selections array for use in generator
if (upperCase) {selections.concat(mainOptions[0])}
if (lowerCase) {selections.concat(mainOptions[1])}
if (number) {selections.concat(mainOptions[2])}
if (specChar) {selections.concat(mainOptions[3])}

// Prompt user:
var generatePassword = function() {
  pwLength = window.prompt("Please input a password length from 8 to 120.")
  if (pwLength < 8) {
    window.alert("You must select a minimum length of 8 characters.")
  } else if (pwLength > 120) {
    window.alert("You must select a length less than 120 characters.")
  } else {
    upperCase = confirm("Would you like Upper Case letters?")
    lowerCase = confirm("Would you like Lower Case letters?")
    number = confirm("Would you liek numebrs?")
    specChar = confirm("Would you like special characters?")
  }
}

for (i = 0; i < pwLength; i++) {
  
}

// Make a reset function

// make a no values selected option




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
