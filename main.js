const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const moreBtn = document.querySelectorAll('.textBtn');
const texttitle = document.querySelectorAll('.item__text');

toggleBtn.addEventListener('click', () =>{
    menu.classList.toggle('active');
});
/*
moreBtn.addEventListener('click', () =>{
    moreBtn.classList.toggle('clicked');
    texttitle.classList.toggle('clamp');
})
*/
for( let i = 0; i < moreBtn.length; i++){
    moreBtn[i].addEventListener('click', ()=>{
        moreBtn[i].classList.toggle('clicked');
        texttitle[i].classList.toggle('clamp');
    })
}

