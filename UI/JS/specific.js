const commentBtn=document.querySelector('#comment');
let commentText=document.querySelector('.add-comment');
const commentBox=document.querySelector('.comment-box');
commentBtn.addEventListener('click',()=>{
	commentBox.insertAdjacentHTML('beforebegin',` <h4>You commented</h4>
                         <p> ${commentText.value}</p>`);
	commentText="";
});