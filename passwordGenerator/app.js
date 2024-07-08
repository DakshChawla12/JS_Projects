const passWordBox = document.querySelector('#password');
const btn = document.querySelector('.generate');
const copyBtn = document.querySelector('.copy');

const rangeInput = document.querySelector('#customRange1');
const rangeValue = document.querySelector('#rangeValue');



const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]></-=";

const allChars = uppercase+lowercase+number+symbols;

function createPassword(){

    const len = parseInt(rangeInput.value, 10);
    let passWord = "";
    while(len > passWord.length){

        passWord += allChars[Math.floor(Math.random()*allChars.length)];
    
    }

    passWordBox.value = passWord;

}

async function copyToClipboard() {
    try {
        await navigator.clipboard.writeText(passWordBox.value);
        alert('Password copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

function updateRangeValue() {
    rangeValue.textContent = rangeInput.value;
}

rangeInput.addEventListener('input', updateRangeValue);

btn.addEventListener('click',createPassword);
copyBtn.addEventListener('click',copyToClipboard);