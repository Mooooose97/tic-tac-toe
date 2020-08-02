/*----- constants -----*/
// Define required constants
const players = {
    'null': 'null',
    '1': 'X',
    '-1': 'O'
};

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*----- app's state (variables) -----*/
// Define required variables to track the state of the game
let board;
let turn;
let win;

/*----- cached element references -----*/
// Store elements on the page that will be accessed in code more than once in variables 
// to make code more concise, readable and performant.
const cells = Array.from(document.querySelectorAll('td'));

/*----- event listeners -----*/
// Handle a player clicking a square
document.querySelector('#cell').addEventListener('click', handleClick);
// Handle a player clicking the replay button
document.getElementById('replay').addEventListener('click', init);

/*----- functions -----*/
// 
init();

function handleClick(evt) {
    console.log(evt.target);
};

function init() {

};

