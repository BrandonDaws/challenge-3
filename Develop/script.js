// base vlues vars
var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!","@","$","*"];
var lowerCase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];

// base propmts for password values


function generatePassword(){
  var password = []
  
     var includeLowerCase = confirm("Do you want lower case letters?");if (includeLowerCase) {
       password.splice(0,0,lowerCase );
    }
      console.log(password);


    var includeUpperCase = confirm("do you want upper case letters?");
     if(includeUpperCase){
       password.splice(0,0, upperCase);
     }
     console.log(password);

  
  var includeSpecialCharacters = confirm("do you want special characters?");if(includeSpecialCharacters){
    password.splice(0,0,symbols);
  }
console.log(password);
 
  var includeNum = confirm("Do you want to include numbers?");
  if(includeNum){
    password.splice(0,0,numbers);
  }
  

  var numberOfChars = parseInt( 
    prompt("How many characters for you want the password to be? between 8 and 128"));
     if(numberOfChars < 8 || numberOfChars > 128){
       alert("Password must be between 8 and 128 characters!!");
       generatePassword();
     }
     console.log(numberOfChars);
     for(var  password =0; password<numberOfChars; password++);
     console.log(password)

 


  
return password

 
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
