'use strict';
/*  json data is from https://api.sampleapis.com/ */

const root = document.documentElement;
const iced = document.querySelector(".icedBtn");
const hot = document.querySelector(".hotBtn");

function buttonClick(event){
    const btn = event.target;

    iced.addEventListener('click', async () => {
        try {
            const response = await fetch('./data/iced.json');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching iced coffee data:', error);
        }
    });
}

// buttonClick();


// document.addEventListener('DOMContentLoaded', () => {
//     const icedCoffeeButton = document.querySelector('button:nth-of-type(1)');
//     const hotCoffeeButton = document.querySelector('button:nth-of-type(2)');

//     icedCoffeeButton.addEventListener('click', () => {
//         fetch('./data/iced.json')
//             .then(response => response.json())
//             .then(data => console.log(data))
//             .catch(error => console.error('Error fetching iced coffee data:', error));
//     });

//     hotCoffeeButton.addEventListener('click', () => {
//         fetch('./data/hot.json')
//             .then(response => response.json())
//             .then(data => console.log(data))
//             .catch(error => console.error('Error fetching hot coffee data:', error));
//     });
// });