let images = document.querySelectorAll('img')

let idx = 0;

let nxtImg = ()=>{
    images[idx].classList.remove('active');
    idx = (idx + 1) % images.length;
    images[idx].classList.add('active');
}

let prevImg = ()=>{
    images[idx].classList.remove('active');
    idx = (idx - 1 + images.length) % images.length;
    images[idx].classList.add('active');
}

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

prev.addEventListener('click',prevImg);
next.addEventListener('click',nxtImg);