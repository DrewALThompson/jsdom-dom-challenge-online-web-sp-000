let form = document.querySelector('form');
let input = document.getElementById('comment-input');
let commentArea = documet.getElementById('list');
let counter = document.getElementById('counter');
let counter = 0;

document.addEventListener("DOMContentLoaded", () => {
  
  let form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
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