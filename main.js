const slider = document.getElementById('slider');
const passLength = document.getElementById('password-length');
const generatePassword = document.getElementById('generatePassword');
const displayResult = document.getElementById('displayOutput');
const includeNumbers = document.getElementById('includeNumbers');
const includeLetters = document.getElementById('includeLetters');
const includeSymbols = document.getElementById('includeSymbols');
let setNumbers = false, setLetters = false, setSymbols = false, length;
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let symbols = "~!@#$%^&*()-_=+{[}]\|:;'<,>.?/";

slider.oninput = function(){
    passLength.textContent = this.value;
}

function displayOutput(){
    length = Number(passLength.textContent.trim());
    let Lstring = '', Nstring = '', Sstring = '', aggregateString = '', outputString = '';
    if(setLetters){
        // generate random letter string
        for(let i = 0; i < length; i++){
            Lstring += letters.charAt(Math.floor(Math.random() * letters.length));
        }
    }
    if(setNumbers){
        // generate random numbers tring
        for(let i = 0; i < length; i++){
            Nstring += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
    }
    if(setSymbols){
        // generate random symbols tring
        for(let i = 0; i < length; i++){
            Sstring += symbols.charAt(Math.floor(Math.random() * symbols.length));
        }
    }
    aggregateString = Lstring + Nstring + Sstring;
    for(let i = 0; i < length; i++){
        outputString += aggregateString.charAt(Math.floor(Math.random() * aggregateString.length));
    }
    displayResult.textContent = outputString;
}

function setStyles(status,Content){
    if(status){
        Content.style.backgroundColor = '#14244C';
        Content.firstElementChild.style.backgroundColor = '#B7BDC7';
        Content.firstElementChild.style.transform = 'translateX(0px)';
    } else{
        Content.style.backgroundColor = '#206FF4';
        Content.firstElementChild.style.backgroundColor = '#fff';
        Content.firstElementChild.style.transform = 'translateX(15px)';
    }

}

includeLetters.addEventListener('click',function(e){
    setStyles(setLetters,includeLetters);
    setLetters = !setLetters;
    e.preventDefault();
});

includeNumbers.addEventListener('click',function(e){
    setStyles(setNumbers,includeNumbers);
    setNumbers = !setNumbers;
    e.preventDefault();
});

includeSymbols.addEventListener('click',function(e){
    setStyles(setSymbols,includeSymbols);
    setSymbols = !setSymbols;
    e.preventDefault();
});

generatePassword.addEventListener('click',displayOutput);