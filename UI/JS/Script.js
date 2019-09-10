const popupMess = document.querySelector('.create-art');
const bgArticle = document.querySelector('.bg-article');
const closePopUp = document.querySelector('.close');
const body = document.querySelector('.body');
popupMess.addEventListener('click', () => {
    bgArticle.style.display = 'flex';
    body.classList.toggle = '.dont-scroll';
    writeTitle.focus();
});
closePopUp.addEventListener('click', () => {
    bgArticle.style.display = 'none';
    body.classList.toggle = 'dont-scroll';
});
const postNew = document.querySelector('#btn1');
let writeTitle = document.querySelector('.write-title');
postNew.addEventListener('click', () => {
    bgArticle.style.display = 'none';
    body.classList.toggle = 'dont-scroll';
});
const editBtn= document.querySelector('#edit');
editBtn.addEventListener('click',()=>{
  bgArticle.style.display = 'flex';
    body.classList.toggle = 'dont-scroll';
});


