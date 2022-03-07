// Assignment Code
var generateBtn = document.querySelector("#generate");

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
  //set all variables to a clean slate
  var selectedCharTypes= [];
  var passwordLength;
  var genPass = '';
  
  var charTypeIndex;
  var randomCharIndex;
  var randomNumber;

  //keep prompoitng user to n=input a password length that is a number and between 8 and 128
  while (passwordLength === undefined || isNaN(parseInt(passwordLength)) || parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
    passwordLength = prompt("How long would you like your password to be? Please enter a number between 8 and 128.");

    // if the user presses cancel, then the password generating function will be canceled
    if (passwordLength === null) {
      return
    }
  }
  
  //continuosly prompt user to accept at least one criteria 
  while (selectedCharTypes.length === 0) {
    //get the types of characters to put into the password
    if (confirm("would you like upper case letters in your password?")) {
    selectedCharTypes.push("upperLetter");
    }

    if (confirm("would you like lower case letters in your password?")) {
      selectedCharTypes.push("lowerLetter");
    }

    if (confirm("would you like numbers in your password?")) {
      selectedCharTypes.push("number");
    }
  
    if (confirm("would you like special characters in your password?")) {
      selectedCharTypes.push("specialChar");
    }

    if (selectedCharTypes.length === 0) {
      alert("You havent selected any criteria. Please select at least one criteria to generate a password.")
    }

  }

  //convert desired password length to a numbber type
  passwordLength = parseInt(passwordLength);

  //iterate for every character in the desired length of the password
  for (var i = 0; i < passwordLength; i++) { 
    //choose a random type by generating a random number to index into a list of selected chharacter types
    charTypeIndex = Math.floor(Math.random()*(selectedCharTypes.length));
    
    //depending on the character type and randomised index, randomly choose a character of that type and appennd it to the running password
    if (selectedCharTypes[charTypeIndex] === 'upperLetter'){ //if an upper case character
      randomCharIndex = Math.floor(Math.random()*25);
      genPass = genPass + lowerLetters[randomCharIndex].toUpperCase();

    } else if (selectedCharTypes[charTypeIndex] === 'lowerLetter'){ // if a lower case character
      randomCharIndex = Math.floor(Math.random()*25);
      genPass = genPass + lowerLetters[randomCharIndex];

    } else if (selectedCharTypes[charTypeIndex] === 'number') { //if a number
      randomNumber = Math.floor(Math.random()*9);
      genPass = genPass + randomNumber;

    } else { // else it will be a special character
      randomCharIndex = Math.floor(Math.random()*8);
      genPass = genPass + specialChars[randomCharIndex];

    }
  }

  //retrun the final generated password
  return genPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
