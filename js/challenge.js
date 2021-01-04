let form = document.querySelector('form');
let input = document.getElementById('comment-input');
let commentArea = document.getElementById('list');
let counterId = document.getElementById('counter');
let likes = document.querySelector('ul');
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
let submit = document.getElementById('submit');


minus.addEventListener('click', () =>{
    counter--;
    counterId.innerHTML = counter;
});

plus.addEventListener('click', () =>{
    counter++;
    counterId.innerHTML = counter;
});

heart.addEventListener('click', (e) =>{
  let like = document.createElement('li');
  let msg = `${counter} was clicked ${e.detail} times`;
  like.innerHTML = msg;
  if (e.detail > 1){
    like.innerHTML = msg;
  } else {
    likes.append(like);
  }
});

pause.addEventListener('click', () =>{
  pauseState = !pauseState;
  if (pauseState === false){
    pause.textContent = 'pause';
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
    
  } else if (pauseState === true) {
    pause.textContent = 'resume';
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
  }
});