const slider = document.getElementById('slider');
const passLength = document.getElementById('password-length');
const includeNumbers = document.getElementById('includeNumbers');
const includeLetters = document.getElementById('includeLetters');
const includeSymbols = document.getElementById('includeSymbols');
const generatePassword = document.getElementById('generatePassword');
const displayResult = document.getElementById('displayOutput');
let setNumbers = false, setLetters = false, setSymbols = false;
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let symbols = "~!@#$%^&*()_+><?/|\,.:;";

includeNumbers.addEventListener('click',function(){
    setNumbers = !setNumbers;
});

includeSymbols.addEventListener('click',function(){
    setSymbols = !setSymbols;
})

includeLetters.addEventListener('click',function(){
    setLetters = !setLetters;
})

function displayPassword(){
    let finalString = "", numbersString = "", lettersString = "", symbolsString = "";
    // generate NUMBERS STRING If setNumbers is true
    if(setNumbers){
        for(let i = 0; i < 4; i++){
            numbersString += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
    }
    // generate SYMBOLS STRING if setSymbols is true
    if(setSymbols){
        for(let i = 0; i < 4; i++){
            symbolsString += symbols.charAt(Math.floor(Math.random() * symbols.length));
        }
    }
    // generate LETTERS STRING if setLetters is true
    if(setLetters){
        for(let i = 0; i < 4; i++){
            lettersString += letters.charAt(Math.floor(Math.random() * letters.length));
        }
    }
    finalString = numbersString + lettersString + symbolsString;
    console.log(finalString);
}

generatePassword.addEventListener('click',displayPassword);

