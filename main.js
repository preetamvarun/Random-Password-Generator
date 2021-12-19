const slider = document.getElementById('slider');
const passLength = document.getElementById('password-length');
const generatePassword = document.getElementById('generatePassword');
const displayResult = document.getElementById('displayOutput');
const includeNumbers = document.getElementById('includeNumbers');
const includeLetters = document.getElementById('includeLetters');
const includeSymbols = document.getElementById('includeSymbols');
let setNumbers = false, setLetters = false, setSymbols = false;
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let symbols = "~!@#$%^&*()_+><?/|\,.:;";


function displayOutput(){
    console.log(`numbers = ${setNumbers} letters = ${setLetters} symbols = ${setSymbols}`);
    let Lstring = '', Nstring = '', Sstring = '', aggregateString = '', outputString = '';
    if(setLetters){
        // generate random letter string
        for(let i = 0; i < 8; i++){
            Lstring += letters.charAt(Math.floor(Math.random() * letters.length));
        }
    }
    if(setNumbers){
        // generate random numbers tring
        for(let i = 0; i < 8; i++){
            Nstring += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
    }
    if(setSymbols){
        // generate random symbols tring
        for(let i = 0; i < 8; i++){
            Sstring += symbols.charAt(Math.floor(Math.random() * symbols.length));
        }
    }
    aggregateString = Lstring + Nstring + Sstring;
    for(let i = 0; i < 8; i++){
        outputString += aggregateString.charAt(Math.floor(Math.random() * aggregateString.length));
    }
    displayResult.textContent = outputString;
}

includeLetters.addEventListener('click',function(e){
    setLetters ? includeLetters.style.justifyContent = 'flex-start' : 
    includeLetters.style.justifyContent = 'flex-end';
    setLetters = !setLetters;
    e.preventDefault();
});

includeNumbers.addEventListener('click',function(e){
    setNumbers ? includeNumbers.style.justifyContent = 'flex-start':
    includeNumbers.style.justifyContent = 'flex-end';
    setNumbers = !setNumbers;
    e.preventDefault();
});

includeSymbols.addEventListener('click',function(e){
    setSymbols ? includeSymbols.style.justifyContent = 'flex-start':
    includeSymbols.style.justifyContent = 'flex-end';
    setSymbols = !setSymbols;
});


generatePassword.addEventListener('click',displayOutput);