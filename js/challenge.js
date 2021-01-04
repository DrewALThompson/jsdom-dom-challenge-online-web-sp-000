let form = document.querySelector('form');
let input = document.getElementById('comment-input');
let commentArea = documet.getElementById('list');
let counter = document.getElementById('counter');

document.addEventListener("DOMContentLoaded", () => {
  
  let counter = 0;
  
  form.addEventListener('submit', (event) => {
    let form = document.querySelector('form');
    let input = document.getElementById('comment-input');
    let commentArea = document.getElementById('list');
    let comment = document.createElement('p');
    event.preventDefault();
    let inputValue = input.value;
    if (inputValue != '') {
      comment.textContent
      input.value = '';
    };
  })
});