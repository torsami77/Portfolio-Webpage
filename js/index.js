"use strict";
let toggleMenu = () => {
  if(document.querySelector('#nav-links').style.opacity == 0){
    document.querySelector('#nav-links').style.opacity = 1;
    document.querySelector('#nav-links').style.pointer.events = 'auto'
  } else {
    document.querySelector('#nav-links').style.opacity = 0;
    document.querySelector('#nav-links').style.pointer.events = 'none';
  }
}