const counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const likes = document.querySelector('.likes');

let timer = setInterval(() => {
      counter.innerText = parseInt(counter.innerText) + 1;
}, 1000);

minus.addEventListener('click', () => {
      counter.innerText = parseInt(counter.innerText) - 1;
} );

plus.addEventListener('click', () => {
      counter.innerText = parseInt(counter.innerText) + 1;
} );

heart.addEventListener('click', () => {
      const num = parseInt(counter.innerText);
      const li = document.querySelector(`[data-num="${num}"]`);
      if (li) {
            const span = li.querySelector('span');
            span.innerText = parseInt(span.innerText) + 1;
      } else {
            const newLi = document.createElement('li');
            newLi.setAttribute('data-num', num);
            newLi.innerHTML = `${num} has been liked <span>1</span> time`;
            likes.appendChild(newLi);
      }
} );

pause.addEventListener('click', () => {
      clearInterval(timer);
} );