"use strict";
/*  json data is from https://api.sampleapis.com/ */

document.addEventListener('DOMContentLoaded', () => {

    const iced = document.querySelector(".icedBtn");
    const hot = document.querySelector(".hotBtn");

    iced.addEventListener('click', async () => {
        try {
            const response = await fetch('./data/iced.json');
            const data = await response.json();
            // console.log(data);
            addDrinks(data);
        } catch (error) {
            console.error('Error fetching iced coffee data:', error);
        }
    });

    hot.addEventListener('click', async () => {
        try {
            const response = await fetch('./data/hot.json');
            const data = await response.json();
            // console.log(data);
            addDrinks(data)
        } catch (error) {
            console.error('Error fetching hot coffee data:', error);
        }
    });
});

function addDrinks(drinks) {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    drinks.forEach(drink => {
        const article = document.createElement('article');
        article.classList.add('card');

        const img = document.createElement('img');
        img.src = drink.image;
        img.alt = drink.title;
        article.appendChild(img);

        const drinkContent = document.createElement('div');
        drinkContent.classList.add('drinkContent');

        const title = document.createElement('h3');
        title.textContent = drink.title;
        drinkContent.appendChild(title);

        const description = document.createElement('p');
        description.textContent = `${drink.description} Ingredients include:`;
        drinkContent.appendChild(description);

        const ingredientsContainer = document.createElement('div');
        ingredientsContainer.classList.add('ingredients');
        drink.ingredients.forEach(ingredient => {
            const ingredientDiv = document.createElement('div');
            ingredientDiv.classList.add('ingredient');
            ingredientDiv.textContent = ingredient;
            ingredientsContainer.appendChild(ingredientDiv);
        });

        drinkContent.appendChild(ingredientsContainer);
        article.appendChild(drinkContent);
        container.appendChild(article);
    });
}
