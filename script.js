// Assignment Code
var generateBtn = document.querySelector("#generate");

 // These variables will hold all the user's inputs entered below 
let userNumbers;
let userSymbols;
let userUcLetters;
let userLcLetters;

// This will contain all the variables from the users confirmed options 
let options;

// These variables will hold all following values for the possibly large random generated password 
// added quotations around the integers 
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", ":", ";"];
let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let smlLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 // To be used to push new array values into 
let passwordArray = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {

// created a variable named 'urPassword' to prompt the following message to store a value from the user 
  let urPassword = window.prompt('How many characters would you like your password? Choose between 8 and 128');

// if the user left the prompt empty before confirming, it will send an alert with the following message 
  if (!urPassword) {
    window.alert('This need a value') 

  // if password is below 8 OR higher than 128, then a prompt will display the following message to re-enter value
  // add a while loop to check if the user input on the window prompt is true 
  } else if (urPassword < 8 || urPassword > 128) {

      window.alert("You must choose between 8 and 128");
     
  };
  
    // these variables have been assigned within the function that will display the following confirm message to store as value 
  if (urPassword) {
       userNumbers = window.confirm("Will this contain numbers?");
       userSymbols = window.confirm("Will this contain special characters?");
       userUcLetters = window.confirm("Will this contain Uppercase letters?");
       userLcLetters = window.confirm("Will this contain Lowercase letters?");
  };

  
  if (!userNumbers && !userSymbols && !userUcLetters && !userLcLetters) {
    options = alert("You must choose a criteria!");
// creating an if statement when the user selects all the choices to generate password 
  } else if (userNumbers && userSymbols && userUcLetters && userLcLetters) {

    options = numbers.concat(symbols, letters, smlLetters) 
}  

// creating an if statement when the user selects only 3 choices
 else if (userSymbols && userNumbers && userUcLetters) {
    options = symbols.concat(numbers, letters);
}
else if (userSymbols && userNumbers && userLcLetters) {
    options = symbols.concat(numbers, smlLetters);
}
else if (userSymbols && userLcLetters && userUcLetters) {
    options = symbols.concat(smlLetters, letters);
}
else if (userNumbers && userLcLetters && userUcLetters) {
    options = numbers.concat(smlLetters, letters);
}
// creating an if statement when the user selects only 2 choices
else if (userSymbols && userNumbers) {
    options = symbols.concat(numbers);

} else if (userSymbols && userLcLetters) {
    options = symbols.concat(smlLetters);

} else if (userSymbols && userUcLetters) {
    options = symbols.concat(letters);
}
else if (userLcLetters && userNumbers) {
    options = smlLetters.concat(numbers);

} else if (userLcLetters && userUcLetters) {
    options = smlLetters.concat(letters);

} else if (userNumbers && userUcLetters) {
    options = numbers.concat(letters);
}
// creating an if statement when the user selects only 1 choice
else if (userSymbols) {
    options = symbols;
}
else if (userNumbers) {
    options = numbers;
}
else if (userLcLetters) {
    options = smlLetters;
}

else if (userUcLetters) {
    options = letters;
};


  // the for loops creates adds a counter up to the user input for character count 
  // the options variable will turn the entire length of the concatenated value into a random array 
  // the optionsArray variable will then push everything into the empty array above named: 'subPassword' 
  for (let i = 0; i < urPassword; i++){
    let optionsArray = options[Math.floor(Math.random() * options.length)];
    passwordArray.push(optionsArray);
  }

// finalPasswordwill now have all the password elements without a separator because of the object method 'join('')' 
  let finalPassword = passwordArray.join('');
  return finalPassword;
}

// this code was given by instructor, figure out what it is for 
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword) 
