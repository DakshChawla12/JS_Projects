let hrs = document.querySelector('.hrs .hr');
let mins = document.querySelector('.mins .min');
let secs = document.querySelector('.secs .sec');

setInterval(()=>{

    let date = new Date();
    hrs.innerHTML = date.getHours()-12;
    mins.innerHTML = date.getMinutes();
    secs.innerHTML = date.getSeconds();
},1000);


//****************************************************** 

let display = document.querySelector('.counter');

let start = document.querySelector('.startBtn');
let stop = document.querySelector('.stopBtn');
let reset = document.querySelector('.resetBtn');
let getTime = document.querySelector('.getTimeBtn');

let counter = 0;
let intervalId;

start.addEventListener('click',()=>{
    intervalId = setInterval(()=>{
        display.innerHTML = counter++;
    },1000);
});

stop.addEventListener('click',()=>{
    clearInterval(intervalId);
});

reset.addEventListener('click',()=>{
    counter = 0;
    display.innerHTML = '0';
    clearInterval(intervalId);
});

getTime.addEventListener('click',()=>{
    document.querySelector('.timer').innerHTML = 
    `you stopped at ${counter}`;
});

