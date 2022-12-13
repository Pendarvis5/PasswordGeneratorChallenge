// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterlength = 8;
var PossibleOutcomes = [];
var specialCharacters = ["!","@","#","$","%","^","&","*","+","?","<",">","/"];
var Numeric = ["1","2","3","4","5","6","7","8","9","0"];
var lowercase = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var uppercase = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];

//password that will be generated 
function generatePassword(){
    var password = "";
    for(var i=0; i < characterlength; i++){
        var choice = Math.floor(Math.random() * PossibleOutcomes.length);
        password = password + PossibleOutcomes[choice];
    }

    return password;
    

}

//prompts for choices
function userPrompt(){
    characterlength = parseInt(prompt("How many characters for your password? 8-128 characters"));
    if(isNaN(characterlength) || characterlength < 8 || characterlength > 128) {
        alert("Password invalid! Try again!");
        return false;
    }

    if(confirm("Would you like Uppercase letters in your password?")) {
        PossibleOutcomes = PossibleOutcomes.concat(uppercase);
    }

    if(confirm("Would you like lowercase letters in your password?")) {
        PossibleOutcomes = PossibleOutcomes.concat(lowercase);
    }

    if(confirm("Would you like numbers in your password?")) {
        PossibleOutcomes = PossibleOutcomes.concat(Numeric);
    }

    if(confirm("Would you like Special Characters in your password?")) {
        PossibleOutcomes = PossibleOutcomes.concat(specialCharacters);
    }

    return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
    var Correct = userPrompt();
    

    if(Correct){

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    }


    
}
