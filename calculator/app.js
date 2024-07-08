let btns = document.querySelectorAll('.btn');
let display = document.querySelector('input');

btns.forEach((btn) => {
    btn.addEventListener('click',()=>{
        let val = btn.innerText;
        display.value += val;
    });
});

let equals = document.querySelector('.equal');
equals.addEventListener('click',()=>{
    display.value = eval(display.value);
});

let erase = document.querySelector('.erase');
erase.addEventListener('click',()=>{
    display.value = "";
});