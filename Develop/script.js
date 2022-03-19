// base vlues vars
var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!","@","$","*"];
var characterCodes = Array.from(Array(26)).map((_, i) => i + 97);
var lowerCase = characterCodes.map(code => String.fromCharCode(code));
var upperCase = lowerCase.map(letter => letter.toUpperCase())
// base propmts for password values

var includeLowerCase = confirm("Do you want loswer case letters?");
var includeUpperCase = confirm("do you want upper case letters?");
var includeSpecialCharacters = confirm("do you want special characters?");
var includeNum = confirm("Do you want to include numbers?");
var numberOfChars = parseInt( 
  prompt("How many characters for you want the password to be? "))

var password="";
function generatePassword(){
  var finalCharacterArray = [];

  if(includeLowerCase){
    finalCharacterArray = 
    finalCharacterArray.concat
    }
    console.log(finalCharacterArray)
  if(upperCase){
    finalCharacterArray =
    finalCharacterArray.concat
  }
  

  if (includeSpecialCharacters){
    finalCharacterArray =
    finalCharacterArray.concat
  }

  if(includeNum){
    finalCharacterArray =
    finalCharacterArray.concat
  }

  return finalCharacterArray
}

  





generatePassword();






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
