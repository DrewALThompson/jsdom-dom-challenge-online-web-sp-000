let form = document.querySelector('form');
let input = document.getElementById('comment-input');
let commentArea = document.getElementById('list');
let counterId = document.getElementById('counter');
let counter = 0;
let pauseState = false;


document.addEventListener("DOMContentLoaded", () => {
  
  setInterval(function(){
    if (pauseState === false){
      counterId.innerHTML = counter;
      counter++;;
    }  
  }
  , 1000);
  
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
  if (pauseState === false){
    counter--;
    counterId.innerHTML = counter;
  } else if (pauseState === true) {
    alert('Buttons Cannot be pressed during Pause');
  }
});

plus.addEventListener('click', () =>{
  if (pauseState === false) {
    counter++;
    counterId.innerHTML = counter;
  } else if (pauseState === true) {
    alert('Buttons Cannot be pressed during Pause');
  }
});

pause.addEventListener('click', () =>{
  pauseState = !pauseState;
  if (pauseState === false){
    pause.textContent = 'pause';
  } else if (pauseState === true) {
    pause.textContent = 'resume';
  }
});