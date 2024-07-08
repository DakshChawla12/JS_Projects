let imageEl = document.querySelector('#bg-img');

window.addEventListener('scroll',()=>{
    update();
});

function update(){
    imageEl.style.opacity = 1 - window.pageYOffset/900;
    imageEl.style.backgroundSize = 100 - window.pageYOffset/12 + '%';
}