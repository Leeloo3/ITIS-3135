'use strict';
/*  json data is from https://api.sampleapis.com/ */

document.addEventListener('DOMContentLoaded', () => {

    const iced = document.querySelector(".icedBtn");
    const hot = document.querySelector(".hotBtn");

    iced.addEventListener('click', async () => {
        try {
            const response = await fetch('./data/iced.json');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching iced coffee data:', error);
        }
    });

    hot.addEventListener('click', async () => {
        try {
            const response = await fetch('./data/hot.json');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching hot coffee data:', error);
        }
    });
});