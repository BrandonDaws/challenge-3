// base vlues vars
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbols = ["!", "@", "$", "*"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

// base propmts for password values


function generatePassword() {
  // string that DOM is expecting for actual password
  var newPass = "";
  // shell for everything that goes into password, this is NOT final password
  var password = [];

  var includeLowerCase = confirm("Do you want lower case letters?");
   if (includeLowerCase) {
    password.push(lowerCase);
  }
 // console.log(password);


  var includeUpperCase = confirm("do you want upper case letters?");
  if (includeUpperCase) {
    password.push(upperCase);
  }
  //console.log(password);


  var includeSpecialCharacters = confirm("do you want special characters?"); 
  if (includeSpecialCharacters) {
    password.push(symbols);
  }
  //console.log(password);

  var includeNum = confirm("Do you want to include numbers?");
  if (includeNum) {
    password.push(numbers);
  }


  var numberOfChars = parseInt(
    prompt("How many characters for you want the password to be? between 8 and 128"));
  if (numberOfChars < 8 || numberOfChars > 128) {
    alert("Password must be between 8 and 128 characters!!");
    prompt("How many characters for you want the password to be? between 8 and 128");
  }
  //console.log(numberOfChars);
// for loop to manage all the user data. loops over num of chars that user inputs, increasing until we reach the # they specified.
  for (let i = 0; i < numberOfChars; i++) {
    // password array times the length 
    var potentialpass = Math.floor(Math.random() * (password.length));
    // randomizes the actual chars in the pass word. 
    var potentialChar = Math.floor(Math.random() * (password[potentialpass].length));

// takes all that info in the for loop, makes a var equal to itslef plus the end results of math, so tht we create a STRING that acts as the password.
    var newPass = newPass + password[potentialpass][potentialChar];
  }
  return newPass
 
  console.log(newPass);

}



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
