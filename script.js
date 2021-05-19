// #generate refers to the button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Generate a password using the generatePassword function
  var password = generatePassword();

  // Write the passwordText to the text box
  var passwordText = document.querySelector("#password");

  // Assign the "password" value created from the generatePassword function to the passwordText to associated to the text box
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// create function to generate a series of pop-ups
function generatePassword(){


  // Create arrays to reference later
  const letters_lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const letters_upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const numberArray = ["0","1","2","3","4","5","6","7","8","9"];
  const specialArray = ["!","@","#","$","%","^","&","*","-","+","=",">","<",".","/","?","~","`",";",":",","];
  const pwArraySelection = [""];

// Create array to add available/allowable characters to later
  const passwordText = [""];
  var currentPwLength = 0;

    // Generate pop-ups once function is run
    let pwLength = prompt("How many characters do you want your password to be? 8-128");

    // Check if entered value is less than 8, more than 128, blank, or a string text, like "ten"
    // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
    while (pwLength < 8 || pwLength>128 || pwLength===false || isNaN(pwLength+1) === true){
      pwLength = prompt("Please enter a number between 8-128");
    }
    
    // generate pop-ups for letters caps, numbers and special-chars and length of password and store those answers
    let lowerLetter = prompt("Do you want your password to contain lower case letters? yes/no");
    if (lowerLetter.toLowerCase() == "yes") {
      // Find a random number between 0 and the length of the array and designate it as a variable
      // Reference:https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
      const getRandomLowerLetter = Math.floor(Math.random() * letters_lower.length);
      // Attach the letter associated to the random position within the array to the passwordText array
      // Reference: https://www.samanthaming.com/tidbits/49-2-ways-to-merge-arrays/
      passwordText.push(letters_lower[getRandomLowerLetter]);
      // Attach the entire character array associated with the question topic to an array to be used later
      pwArraySelection.push(...letters_lower);
      // Add 1 to the current character length
      currentPwLength += 1;
    }

    let upperLetter = prompt("Do you want your password to contain upper case letters? yes/no");
    if (upperLetter.toLowerCase() == "yes") {
      const getRandomUpperLetter = Math.floor(Math.random() * letters_upper.length);
      passwordText.push(letters_upper[getRandomUpperLetter]);
      pwArraySelection.push(...letters_upper);
      currentPwLength += 1;
    }

    let number = prompt("Do you want your password to contain numbers? yes/no");
    if (number.toLowerCase() == "yes") {
      const getRandomNumber = Math.floor(Math.random() * numberArray.length);
      passwordText.push(numberArray[getRandomNumber]);
      pwArraySelection.push(...numberArray);
      currentPwLength += 1;
    }

    let special = prompt("Do you want your password to contain special characters? yes/no");
    if (special.toLowerCase() == "yes") {
      const getRandomSpecial = Math.floor(Math.random() * specialArray.length);
      passwordText.push(specialArray[getRandomSpecial]);
      pwArraySelection.push(...specialArray);
      currentPwLength += 1;
    }
    
    // If the user declines all of the character types, an error message will pop up indicating that at least one type will be required and the password will be returned as a blank string
    if (lowerLetter.toLowerCase() !== "yes" && upperLetter.toLowerCase() !== "yes" && number.toLowerCase() !== "yes" && special.toLowerCase() !== "yes"){
      alert("Please select at least one of the character types: Lowercase Letter, Uppercase Letter, Number, or Special Character")
      return password = "";
    }

  // varify that the type of character is allowed based on questions asked in the pop-ups
  for (i=currentPwLength; i<pwLength;i++){
    const getRandomCharacter = Math.floor(Math.random() * pwArraySelection.length);
    passwordText.push(pwArraySelection[getRandomCharacter]);
  }
  // Return the variable "passwordText" that has been created in the function to "password" in the writePassword function
  // Reference: https://www.w3schools.com/jsref/jsref_join.asp  
  return password = passwordText.join("");
}
