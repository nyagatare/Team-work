const bgArticle = document.querySelector('.bg-article');
const closePopUp = document.querySelector('.close');
const body = document.querySelector('.body');
closePopUp.addEventListener('click', () => {
    bgArticle.style.display = 'none';
    body.classList.toggle = 'dont-scroll';
});
const articleTitle = document.querySelector('.title');
const articleParag = document.querySelector('#article1');
const writeTitle = document.querySelector('.write-title');
const writeArticle = document.querySelector('.write-article');
const editBtn = document.querySelector('#edit');
editBtn.addEventListener('click', () => {
    writeTitle.value = articleTitle.textContent;
    writeArticle.value = articleParag.textContent;
    bgArticle.style.display = 'flex';
    body.classList.toggle = 'dont-scroll';
});