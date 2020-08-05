/*----- constants -----*/
// Define required constants
const players = {
    'null': null,
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
// Message 
const msg = document.getElementById('msg');

/*----- event listeners -----*/
// Handle a player clicking a square
document.querySelector('tbody').addEventListener('click', handleClick);
// Handle a player clicking the replay button
document.getElementById('replay').addEventListener('click', init);

/*----- functions -----*/
// 
init();

function handleClick(evt) {
    // store index of cell clicked
    const idx = parseInt(cells.indexOf(evt.target));
    // Checking if clicked cell is filled or game is over
    if (board[idx] || win !== null) return;
    // Set value of board at index of cell to variable turn
    board[idx] = turn;
    // alternate turns by multiplying turn by -1 (player 1 player -1)
    turn *= -1;
    // update win value by invoking win condition function
    win = winCondition();
    // invoke render function
    render();
};
// Reset board and set turn to player 1 or 'X' then invoke render
function init() {
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    win = null;
    render();
};

function winCondition() {
    // loop through each of the winning combos arrays
    for (let i = 0; i < winningCombos.length; i++) {
        // total up the three board positions using the three indexes in the current commbo, convert to absolute value (any negative to posivite)
        //JS: this condition inside the parens in the line below was getting long!
        //JS: I moved it on to separate lines to make it easier for me to follow your logic! :)
        if (Math.abs(
            board[winningCombos[i][0]] + 
            board[winningCombos[i][1]] + 
            board[winningCombos[i][2]]) 
            === 3
        ) 
        return board[winningCombos[i][0]];
        // if total is 3, we have a winner
    };
    if (board.includes(null)) return null;
    return 'T';
};

function render() {
    // Iterating through board to update with a value of the turn in players object
    // JS: consider renaming c here to an explicit name like cell or choice
    board.forEach(function(c, idx) {
        cells[idx].textContent = players[c];
    });
    // Print win, tie, or turn message
    if (win === 'T') {
        msg.innerHTML = 'Tie game!';
    } else if (win) {
        msg.innerHTML = `Winner is ${players[win].toUpperCase()}!`;
    } else {
        msg.innerHTML = `${players[turn].toUpperCase()}'s Turn`;
    }
};

