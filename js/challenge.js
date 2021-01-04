let form = document.querySelector('form');
let input = document.getElementById('comment-input');
let commentArea = document.getElementById('list');
let counterId = document.getElementById('counter');
let counter = 0;
let paused = false;


document.addEventListener("DOMContentLoaded", () => {
  
  function increment() {
    while(paused === false){
      counterId.innerHTML = counter;
      counter++;
    }
  }
  setInterval(increment, 1000);
  
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

let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let pause = document.getElementById('pause');
let heart = document.getElementById('heart');


minus.addEventListener('click', () =>{
  counter--;
  counterId.innerHTML = counter;
});

plus.addEventListener('click', () =>{
  counter--;
  counterId.innerHTML = counter;
});

pause.addEventListener('click', () =>{
  paused = !paused;
});