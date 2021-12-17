let slider = document.getElementById('slider');
let passLength = document.getElementById('password-length');

slider.oninput = function(){
    passLength.textContent = this.value;
}