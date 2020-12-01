'use strict';

function time() {
    const date = new Date();
    const display = document.querySelector('.clock__display');
    const time = date.toLocaleTimeString('hu-HU', { hour12: false });
    display.textContent = '';
    display.insertAdjacentText('beforeend', time) 
}

let myTimer = setInterval(time, 1000);
