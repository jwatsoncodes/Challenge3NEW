// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables defined
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!?@$#&*{}[],=-().+;'/\\^^";
var chosenCharacters = "";

// This function prompts to enter
function enterpassword() {
  var password = generatepassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//write password function prompts to write
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Adds eventlistener for event when clicked
generateBtn.addEventListener("click", writePassword)

//generate password should return the final password
function generatePassword(){
  
  var result = "";
  
  //Prompt to define how many characters between 8 and 128
  var length = prompt("How many characters in your random password? (between 8 and 128)");
  if(isNaN(length)){
    alert("Input a number");
    return generatePassword()
  }
  if(length<8 || length> 128){
    alert("choose numbers between 8 - 128!");
    return generatePassword()
  }
  
  //variables requesting which characters they want
  var hasUpper = confirm("Include upper case letters?");
  var hasLower = confirm("Include lower case letters?");
  var hasNumbers = confirm("Include numbers?");
  var hasSpecial = confirm("Include special characters?");
  
  //error alert if no character type is selected
  if(!hasUpper&&!hasLower&&!hasNumbers&&!hasSpecial){
    alert("You must at least choose 1 character type!");
    return generatePassword()
  }

  if(hasUpper){
    chosenCharacters += upper
  }
  if(hasLower){
    chosenCharacters += lower
  }

  if(hasNumbers) {
    chosenCharacters += numbers
  }

  if(hasSpecial) {
    chosenCharacters += special
  }

for (var i = 0; i < length; i++) {
  result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
}
return result;

}