// Assignment Code
var generateBtn = document.querySelector("#generate");
// var wrapper =document.queryselector(".wrapper");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var uppercaseLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters ="abcdefghijklmnopqrstuvwxyz";
var numbers ="1234567890";
var specialCharacters ="!#$%&'()*+,-./:;<=>?@[]_`{|}~";
var passwordOption ="";
var password ="";


function generatePassword() {
  let passwordlength =prompt("How long do you want your password? Choose between 8-128 characters");
  if(passwordlength <8) {
    alert ("password should be minimum 8 characrters.");
    return null;  
  };

  if(passwordlength >128) {
    alert ("password should be maximum of 128 characters");
    return null;
  };

  if(isNaN(passwordlength)) {
    alert ("please enter numerical value");
    return null;
  }

  let uppercase =confirm("Would you like uppercase letters?");
  if (uppercase) {
    passwordOption +=uppercaseLetters;
  }

  let lowercase =confirm("Would you like lowercase letters?");
    if (lowercase) {
      passwordOption +=lowercaseLetters;
    }

  let numbersConfirm =confirm("Would you like numbers?");
   if (numbersConfirm) {
    passwordOption +=numbers;
   }
   
  let specialCharactersConfirm =confirm("Would you like special characters?");
   if (specialCharactersConfirm) {
    passwordOption +=specialCharacters;
   }

   for (var i=0;i<passwordlength;i++) {
    password +=passwordOption.charAt(Math.floor(Math.random() * passwordOption.length));
   }
   return password

  // console.log(passwordOption)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
