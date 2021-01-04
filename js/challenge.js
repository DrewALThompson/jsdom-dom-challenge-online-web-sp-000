let form = document.querySelector('form');
let input = document.getElementById('comment-input');
let commentArea = document.getElementById('list');
let counterId = document.getElementById('counter');
let counter = 0;


document.addEventListener("DOMContentLoaded", () => {
  
  function increment() {
    counterId.innerHTML = counter;
    counter++
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
let paused = false;

document.addEventListener('click', () =>{
  if (minus.clicked === true){
    console.log("clicked")
    counter--;
    counterId.innerHTML = counter;
  } else if (plus.clicked === true) {
    counter++;
    counterId.innerHTML = counter;
  } else if (pause.clicked === true ) {
    paused = !paused;
    while (paused === true) {
      
    }
  } else if (heart.clicked === true ) {
    
  } else if (document.querySelectorAll('button').clicked === true){
    console.log('clicked')
  }
});