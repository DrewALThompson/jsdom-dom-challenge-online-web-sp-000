let form = document.querySelector('form');
let input = document.getElementById('comment-input');
let commentArea = documet.getElementById('list');
let counterId = document.getElementById('counter');
let counter = 0;

document.addEventListener("DOMContentLoaded", () => {
  
  let form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let input = document.getElementById('comment-input');
    let comment = document.createElement('p');
    let inputValue = input.value;
    
    if (inputValue !== '') {
      comment.innerHTML = inputValue;
      commentArea.append(comment);
      input.value = '';
    }
  });
});