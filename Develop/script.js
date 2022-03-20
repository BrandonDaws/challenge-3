// base vlues vars
var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!","@","$","*"];
var lowerCase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
// base propmts for password values


function generatePassword(){
  var password = [];
  var numberOfChars = parseInt( 
    prompt("How many characters for you want the password to be? between 8 and 128"))
    console.log(numberOfChars);

    var includeLowerCase = confirm("Do you want lower case letters?");if (includeLowerCase) {
       password = lowerCase.concat(parseInt(numberOfChars),lowerCase);
      }
      console.log(password);


    var includeUpperCase = confirm("do you want upper case letters?");
     if(includeUpperCase){
       password = upperCase.concat(parseInt(numberOfChars),lowerCase,upperCase);
     }
     console.log(password);

  
  var includeSpecialCharacters = confirm("do you want special characters?");if(includeSpecialCharacters){
    password = symbols.concat(parseInt(numberOfChars),lowerCase,upperCase,symbols);
  }
console.log(password.length);
 
  var includeNum = confirm("Do you want to include numbers?");
  if(includeNum){
    password = numbers.concat(parseInt(numberOfChars),lowerCase,upperCase,symbols);
  }


return password
 
}





  







// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordLength = parseInt(numberOfChars)
   for( var i =0; i <=numberOfChars; i++)
  var passwordText = document.querySelector("#password");
  Math.floor(Math.random() * generatePassword.length);
  



  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
