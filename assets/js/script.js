// need variable for inputs and characters

var mainOptions = [
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'], 
  ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '/', '}']
]

var selctions = []
var pwLength; 
var upperCase; 
var lowerCase; 
var number; 
var specChar; 

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
