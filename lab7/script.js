
'use strict';

const root = document.documentElement;
const buttons = document.querySelectorAll(".accordian-label");

function buttonClick(event){
    const btn = event.target;
    btn.classList.toggle("open");
    const content = btn.nextElementSibling;
    
}