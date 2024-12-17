const showModal = document.querySelectorAll('.show-modal');
const closemodalbtn = document.querySelector('.close-modal');
const hidden = document.querySelector('.hidden');



for (let i = 0; i<showModal.length; i++) 
showModal[i]. addEventListener('click', function(){
console.log('button clicked')
hidden.classList.remove('hidden')
})

closemodalbtn.addEventListener('click', function(){
   hidden.classList.add('hidden')
})