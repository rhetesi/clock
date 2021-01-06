/* eslint-disable linebreak-style */
function timer() {
  const date = new Date();
  const display = document.querySelector('.clock__display');
  const time = date.toLocaleTimeString('hu-HU', { hour12: false });
  display.textContent = '';
  display.insertAdjacentText('beforeend', time);
}

// eslint-disable-next-line no-unused-vars
const myTimer = setInterval(timer, 1000);
