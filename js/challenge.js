let form = document.querySelector('form');
let input = document.getElementById('comment-input');
let counter = document.getElementById('counter')

document.addEventListener("DOMContentLoaded", () => {
  
  let counter = 0
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputValue = input.value;
    if (inputValue != '') {
      liItem.innerText = inputValue;
      ulAll.append(liItem);
      input.value = '';
    };
  })
});