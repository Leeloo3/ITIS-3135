'use strict';

//constants
const totalQuestions = 5;
const base_url = `https://opentdb.com/api.php?amount=${totalQuestions}`;

//global variables
let url; //send fetch request to this url
let counter;
let score;
let correct;
let questions;

//get DOM elements
const cards = document.querySelectorAll('.card');
const categoryCard = cards[0];
const questionCard = cards[1];
const skeletonCard = cards[2];
const scoreCard = cards[3];

const categoryElements = Array.from(document.querySelectorAll('.category-item'));
const playBtn = document.querySelector('button');
const submitBtn = questionCard.querySelector('button');
const playAgainBtn = scoreCard.querySelector('button');
const questionHeaders = questionCard.querySelectorAll('span');
const questionText = questionCard.querySelector('.question-text');
const questionBody = questionCard.querySelector('.card-body');
const scoreElements = scoreCard.querySelectorAll('.stat');


categoryElements.forEach(item=>item.addEventListener('click', clickCategory));

function clickCategory(e){
    e.target.classList.toggle('selected');
    categoryElements.forEach(item=>{
        if(item.classList.contains('selected')&& item!== e.target)
            item.classList.remove('selected');
    });
}

playBtn.addEventListener('click', initGame);

function initGame() {
    //reset global variables
    counter = 0;
    score = 0;
    correct = 0;
    questions = [];
    url = base_url;

    /*  Write down your code here to update the URL according to selected category,
        hide the category card and show the skeleton card.

        Then call the getQuestions function to move on

        If the user doesn't select any category, show an alert to choose a category    
    */

    const selectedCategory = document.querySelector('.category-item.selected');
    if (!selectedCategory) {
        alert('Please choose a category!');
        return;
    }

    const categoryId = selectedCategory.dataset.category;
    url = `${base_url}&category=${categoryId}`;
    categoryCard.classList.add('hidden');
    skeletonCard.classList.remove('hidden');
    getQuestions();

}

async function getQuestions() {
    try {
        const response = await fetch(url);
        if(!response.ok)
            throw Error(`Error: ${response.url} ${response.statusText}`);
        const data = await response.json();
        if(data.response_code === 0){
            /*
                Write your code here to process the data and then show the questions.

                Hint: you can call the other functions to do that
            */
           processQuestions(data);
            showQuestions();
        } else {
            throw Error('Error: Cannot fetch questions from the API');
        }
    } catch (error) {
        console.log(error);
    }
}

function processQuestions(data) {
    /*
        Write your code here to process the json data to populate the global variable "questions" so that
        it contains the necessary information such as, the question itself, difficulty level, answers, correct answers.

        Hint: Create a question object and populate its properties (text, level, answers, correctAnswer) and then just push that object to the global variable
        "questions"

        Make sure to add the correct answer to the choices at random location so that it is not always the same index
        for the right answer.
    */

    questions = data.results.map(result => {
        const questionObj = {
            text: result.question,
            level: result.difficulty,
            answers: [],
            correctAnswer: Math.floor(Math.random() * 4)
        };

        questionObj.answers[questionObj.correctAnswer] = result.correct_answer;

        let index = 0;
        result.incorrect_answers.forEach(answer => {
            while (questionObj.answers[index] !== undefined) {
                index = Math.floor(Math.random() * 4);
            }
            questionObj.answers[index] = answer;
        });
        return questionObj;
    });
    
}

function showQuestions() {
    submitBtn.disabled = false;
    let optionElements = questionCard.querySelectorAll('.option-item');
    optionElements.forEach(element=>element.remove());

    const question = questions[counter];
    questionHeaders[0].textContent = `Question: ${counter+1} / ${totalQuestions}`;
    questionHeaders[1].textContent = `Level: ${question.level}`;
    questionHeaders[2].textContent = `Score: ${score}`;
    questionText.innerHTML = question.text;
    const fragment = document.createDocumentFragment();
    question.answers.forEach(answer=>{
        const option = document.createElement('div');
        option.innerHTML = answer;
        option.classList.add('option-item');
        fragment.append(option);
    });

    questionBody.insertBefore(fragment, submitBtn);
    skeletonCard.classList.add('hidden');
    questionCard.classList.remove('hidden');

    optionElements = questionCard.querySelectorAll('.option-item');
    optionElements.forEach(item=>item.addEventListener('click', e=>{
        optionElements.forEach(element=>{
            if(element.classList.contains('selected'))
                element.classList.remove('selected');
        });

        e.target.classList.add('selected');
    }));

    optionElements.forEach(element => {
        element.classList.remove('correct', 'wrong');
    });
}

submitBtn.addEventListener('click', submitAnswer);

function submitAnswer() {
    submitBtn.disabled = true;
    const answerSubmitted = questionBody.querySelector('.selected');
    
    if (!answerSubmitted) {
        alert('Please select an answer before submitting.');
        submitBtn.disabled = false;
        return;
    }

    const selectedAnswer = answerSubmitted.textContent;
    const correctAnswer = questions[counter].answers[questions[counter].correctAnswer];

    if (selectedAnswer === correctAnswer) {
        correct++;
        if (questions[counter].level === "easy") {
            score += 10;
        } else if (questions[counter].level === "medium") {
            score += 20;
        } else if (questions[counter].level === "hard") {
            score += 30;
        }
        answerSubmitted.classList.add('correct'); // Marking correct answer
    } else {
        answerSubmitted.classList.add('wrong');
    }

    const allAnswers = questionBody.querySelectorAll('.option-item');
    allAnswers[questions[counter].correctAnswer].classList.add('correct'); // Ensuring correct answer is marked

    setTimeout(nextQuestion, 1500);
}


function nextQuestion() {
    counter++;

    if(counter < totalQuestions)
        showQuestions();
    else
        showScore();
}

function showScore() {
    scoreElements[0].textContent = `Correct Answers: ${correct}`;
    scoreElements[1].textContent = `Score: ${score}`;

    questionCard.classList.add('hidden');
    scoreCard.classList.remove('hidden');
}

playAgainBtn.addEventListener('click', ()=>{

    /*
        Write your code here to implement the Play Again button
    */
    counter = 0;
    score = 0;
    correct = 0;
    questions = [];
    submitBtn.disabled = false;

    // Clear any classes from previous question
    const allAnswers = questionBody.querySelectorAll('.option-item');
    allAnswers.forEach(answer => {
        answer.classList.remove('selected', 'wrong', 'correct');
    });

    // Hide the score card and show the category card
    scoreCard.classList.add('hidden');
    categoryCard.classList.remove('hidden');
});