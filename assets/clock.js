'use strict';

function time() {
    const date = new Date();
    const display = document.querySelector('.clock__display');
    
    return date.toLocaleTimeString('hu-HU', { hour12: false })
    //console.log(date.toLocaleTimeString('hu-HU', { hour12: false })) 
}

let myTimer = setInterval(time, 1000);
//console.log(time());

//const timeOptions =