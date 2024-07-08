let gameSequence = [];
let userSequence = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener('keypress',()=>{
    if(!started){
        console.log("game started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },150);
}
function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(function(){
        btn.classList.remove('userFlash');
    },150);
}

function levelUp(){

    userSequence = [];

    level++;
    h2.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random()*3);
    let randColor = btns[randIndx];
    let randomBtn = document.querySelector(`.${randColor}`);

    gameSequence.push(randColor);
    console.log(gameSequence);

    gameFlash(randomBtn);
}

function checkAns(idx){

    console.log(level);
    if(userSequence[idx] === gameSequence[idx]){
        if(userSequence.length === gameSequence.length){
            setTimeout(levelUp,800);
        }
        console.log("same");
    }
    else{
        h2.innerHTML = `Game over!! your score was <b>${level}</b>. <br>Press any key to continue;`
        reset();
    }

}

function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute('id');
    console.log(userColor);
    userSequence.push(userColor);

    checkAns(userSequence.length-1);

}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}

function reset(){
    started = false;
    gameSequence = [];
    userSequence = [];
    level = 0;
}