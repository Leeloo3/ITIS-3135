'use strict';
/*  json data is from https://api.sampleapis.com/ */

const root = document.documentElement;
const iced = document.addEventListener(".icedBtn");
const hot = document.addEventListener(".hotBtn");

function buttonClick(event){
    const btn = event.target;
    
    const icedData = fetch("./data/iced.json");
    console.log(icedData);
    
}