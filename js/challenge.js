let form = document.querySelector('form');
let input = document.getElementById('comment-input');
let commentArea = document.getElementById('list')
let ulAll = document.createElement('ul');
let liItem = document.createElement('li');
let counter = document.getElementById('counter')

document.addEventListener("DOMContentLoaded", () => {
  
  let counter = 0
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputValue = input.value;
    commentArea.append(ulAll);
    if (inputValue != '') {
      liItem.innerText = inputValue;
      ulAll.append(liItem);
      input.value = '';
    };
  })
});