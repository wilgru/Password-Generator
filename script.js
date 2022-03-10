//Assignment Code
var generateBtn = document.querySelector("#generate");

//characters by type
var lowerLetters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]
var specialChars = [
  '/',
  '*',
  '&',
  '%',
  '^',
  '$',
  '#',
  '@',
  '!'
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//generate password function
function generatePassword() {
  //set all variables to a clean slate ready for new user input
  var desiredCharTypes= [];
  var desiredPassLen;
  var generatedPass = '';
  
  // vars for iterations later on
  var charTypeIndex;
  var randomCharIndex;
  var randomNumber;

  //keep prompoitng user to input a password length that is a number and between 8 and 128
  while (desiredPassLen === undefined || isNaN(parseInt(desiredPassLen)) || parseInt(desiredPassLen) < 8 || parseInt(desiredPassLen) > 128) {
    desiredPassLen = prompt("1/5 - How long would you like your password to be? Please enter a number between 8 and 128.");

    //if the user presses cancel, then the password generating function will stop here
    if (desiredPassLen === null) {
      return
    }
  }
  
  //continuosly prompt user to select at least one criterion 
  while (desiredCharTypes.length === 0) {
    //get the types of characters to put into the password
    if (confirm("2/5 - Would you like UPPER CASE letters in your password?")) {
      desiredCharTypes.push("upperLetter");
    }

    if (confirm("3/5 - Would you like LOWER CASE letters in your password?")) {
      desiredCharTypes.push("lowerLetter");
    }

    if (confirm("4/5 - Would you like NUMBERS in your password?")) {
      desiredCharTypes.push("number");
    }
  
    if (confirm("5/5 - Would you like SPECIAL CHARACTERS in your password?")) {
      desiredCharTypes.push("specialChar");
    }

    // alert user that they selected nothing
    if (desiredCharTypes.length === 0) {
      alert("Hey! You haven't selected any criteria. Please start select at least one criterion to generate a password. Click 'confirm' to start again.")
    }

  }

  //convert desired password length to a number type
  desiredPassLen = parseInt(desiredPassLen);

  //iterate for every character in the desired length of the password
  for (var i = 0; i < desiredPassLen; i++) { 
    //choose a random type by generating a random number to index into a list of selected character types
    charTypeIndex = Math.floor(Math.random()*(desiredCharTypes.length));
    
    //depending on the character type and randomised index, randomly choose a character of that type and appennd it to the running password
    if (desiredCharTypes[charTypeIndex] === 'upperLetter'){ //if an upper case character
      randomCharIndex = Math.floor(Math.random()*25);
      generatedPass = generatedPass + lowerLetters[randomCharIndex].toUpperCase();

    } else if (desiredCharTypes[charTypeIndex] === 'lowerLetter'){ // if a lower case character
      randomCharIndex = Math.floor(Math.random()*25);
      generatedPass = generatedPass + lowerLetters[randomCharIndex];

    } else if (desiredCharTypes[charTypeIndex] === 'number') { //if a number
      randomNumber = Math.floor(Math.random()*9);
      generatedPass = generatedPass + randomNumber;

    } else { // else it will be a special character
      randomCharIndex = Math.floor(Math.random()*8);
      generatedPass = generatedPass + specialChars[randomCharIndex];

    }
  }

  //retrun the final generated password
  return generatedPass;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
