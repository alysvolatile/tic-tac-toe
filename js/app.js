// KNOWN BUGS
// reset button NOT working

//TBD
// Clean up checking for win state by implementing gameBoard obj
// Stop game and declare winner once either playerScore = 3
// create game mode where computer plays as P2

// create object to track win state
const gameBoard = {
}

// set up win conditions
// on click, create key with divNumber and value of currentPlayer name

//creates turn counter!
let turnCounter = 1;
let currentPlayer = 'PLAYER ONE'

// set variables for all square divs
const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const div3 = document.querySelector('#div3');
const div4 = document.querySelector('#div4');
const div5 = document.querySelector('#div5');
const div6 = document.querySelector('#div6');
const div7 = document.querySelector('#div7');
const div8 = document.querySelector('#div8');
const div9 = document.querySelector('#div9');

// define text blocks
const whoseTurn = document.querySelector('#whose-turn');
const resultPara = document.querySelector('#win-lose');
const scoreboard = document.querySelector('#scoreboard');
// define container and squareDivs
const container = document.querySelector('#container');
const squareDivs = document.getElementsByClassName('square');
const surpriseDiv = document.getElementById('surprise');

//declare game won var
let gameFinished = false;

// define players
let playerOne;
let playerTwo;
// need to declare player scores
let playerOneScore = 0;
let playerTwoScore = 0;

// create winner variable
let winner;

// this adds clickHandling to all divs
addClickHandling()

// create checkwinner function
const checkWinner = () => {
    //win conditions
    if (((div1.innerHTML === div2.innerHTML) && (div2.innerHTML === div3.innerHTML)) ||
        ((div4.innerHTML === div5.innerHTML) && (div5.innerHTML === div6.innerHTML)) ||
        ((div7.innerHTML === div8.innerHTML) && (div8.innerHTML === div9.innerHTML)) ||
        ((div7.innerHTML === div4.innerHTML) && (div4.innerHTML === div1.innerHTML)) ||
        ((div8.innerHTML === div5.innerHTML) && (div5.innerHTML === div2.innerHTML)) ||
        ((div9.innerHTML === div6.innerHTML) && (div6.innerHTML === div3.innerHTML)) ||
        ((div7.innerHTML === div5.innerHTML) && (div5.innerHTML === div3.innerHTML)) ||
        ((div9.innerHTML === div5.innerHTML) && (div5.innerHTML === div1.innerHTML)))
    {
        winner = currentPlayer;
        gameFinished = true;
        alertWinner();
        console.log (`${winner} wins`);
        if (winner === `PLAYER ONE`) {
            playerOneScore += 1;
        } else {
            playerTwoScore += 1;
        }
        scoreboard.innerHTML = `| PLAYER 1: ${playerOneScore} |<br /> | PLAYER 2: ${playerTwoScore} |`
    } else {
        return;
    } 
}

//create function to alert winner and update result text
const alertWinner = () => {
    if (currentPlayer === 'PLAYER TWO') {
    alert(`Forrester! Forrester! Doctor Clayton Forrester!`);
    } else {
    alert(`CROOOOOOOOOOOOOOOOOOOOOW!`)  
    }
    resultPara.innerText = 'Play Again?';
    whoseTurn.innerText = `${winner} wins!`;
    surpriseDiv.setAttribute('id','robots');
}

// add event listener to all divs
// define as function to call again if needed
function addClickHandling() {
    for (let i = 0; i < squareDivs.length; i++) {
        squareDivs[i].addEventListener('click', handleClick)
    }
}

// player turn changer
function takeTurns() {
    if ((turnCounter % 2) ==! 0) {
        currentPlayer = 'PLAYER ONE';
    } else {
        currentPlayer = 'PLAYER TWO';
    }
}

function handleClick(e) {
    //first, let's test if it's already been clicked!
if (e.target.classList.contains('clicked')) {
        console.log('already clicked');
} else {
    // Adds appropriate image to clicked square
    e.target.classList.add('clicked');
    // WORK ON IMPLEMENTING THIS WITH gameBoard object
    // this declares clicked div id 
    const currentDivID = e.target.id;
    // need to figure how to a new key + value pair for these 
    // key name = currentDivId
    // valueName = currentplayer
    // e.target.id will return the id of the clicked square!
    if (currentPlayer === 'PLAYER ONE') {
        e.target.classList.add('playerOne');
        e.target.innerHTML = `<span>${currentPlayer}</span>`;
    } else {
        e.target.classList.add('playerTwo');
        e.target.innerHTML = `<span>${currentPlayer}</span>`;
    }
    if (turnCounter > 4) {
        checkDraw();
        checkWinner();
        checkIfFinished();
    }
    turnCounter++;
    takeTurns();
    if (gameFinished === false) {
        whoseTurn.innerHTML = `${currentPlayer}'s turn!`;
    }
}
}

// Detect Draw function
const clickedDivs = document.getElementsByClassName('clicked');
const checkDraw = () => {
    if (squareDivs.length === clickedDivs.length) {
    console.log('tis a draw');
    gameFinished = true;
    whoseTurn.innerText = `No one wins. I hope you're happy.`;
    resultPara.innerText = 'You better restart and try harder, pal.'
    }
}   


// reset button semiDONE
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => {
    console.log(resetButton);
    location.reload();
    // these functions will reset things
    // resetting is working but it's always alerting to a win on next click now?
    // resetGameState();
    // resetText();
    // emptyDivs();
    // resetDivs();
    // addClickHandling();
    //remove robot class from surprise div
    surpriseDiv.removeAttribute('id','robots');
})

// reset functionality
const clearDivs = () => {
    while (container.firstChild) {
        container.firstChild.remove();
    }
}

const createDivs = () => {
    for (let i = 1; i < 10; i++) {
        const div = document.createElement('div');
        div.setAttribute('id',`div${i}`);
        //sets Class
        div.setAttribute('class', 'square');
        // appends to container
        div.innerHTML = `<span>${i}</span>`;
        container.appendChild(div);
        addClickHandling()
    }
}

const resetText = () => {
    resultPara.innerText = '';
    whoseTurn.innerHTML = `${currentPlayer}'s turn!`
}

const resetGameState = () => {
    gameFinished = false;
    currentPlayer = 'PLAYER ONE';
    turnCounter = 1;
    winner = undefined;
}

function checkIfFinished () {
    if (gameFinished === true) {
        console.log(gameFinished);
        // add 'clicked' class to all empty divs
        // this will stop further clicks from happening!!!
        for (let i = 0; i < squareDivs.length; i++) {
            if (!(squareDivs[i]).classList.contains('clicked')) {
                squareDivs[i].classList.add('clicked');    
            }
        }
    } else {
        console.log(`Game not yet finished!`);
    };
}

//dupe of what we have with two functions above
function resetDivs() {
container.innerHTML = '<div class="square" id="div1"><span>1</span></div><div class="square"id="div2"><span>2</span></div><div class="square"id="div3"><span>3</span></div><div class="square"id="div4"><span>4</span></div><div class="square"id="div5"><span>5</span></div><div class="square"id="div6"><span>6</span></div><div class="square"id="div7"><span>7</span></div><div class="square"id="div8"><span>8</span></div><div class="square"id="div9"><span>9</span>';
}

// function to randomly choose unclicked square
function chooseRandom() {
    // need to generate array of divs that are unclicked
    const unclicked = document.querySelectorAll('.square:not(.clicked)');
    // randomly select one of those
    const randomIndex = Math.floor(Math.random() * unclicked.length);
    const unclickedSelection = unclicked[randomIndex];
    return unclickedSelection;
}

//define AI button
const computerButton = document.querySelector('#MCP');
// add event handler to it
computerButton.addEventListener('click', (e) => {
    console.log(chooseRandom());
    computerSelects();
})

//computer plays and changes turn
function computerSelects() {
    resultPara.innerText = 'Thinking...';
    let computerChoice = chooseRandom();
    console.log(computerChoice);
    const timeDelay = 1200;
    setTimeout(function() {
        computerChoice.classList.add('playerTwo');
        computerChoice.classList.add('clicked');
        computerChoice.innerHTML = `<span>${currentPlayer}</span>`;
        checkDraw();
        checkWinner();
        checkIfFinished();
        resultPara.innerText = ''
        turnCounter += 1;
        // this changes the current player!
        if ((turnCounter % 2) ==! 0) {
            currentPlayer = 'PLAYER ONE';
        } else {
            currentPlayer = 'PLAYER TWO';
        }
        // checks to see if game is done
        if (gameFinished === false) {
            whoseTurn.innerHTML = `${currentPlayer}'s turn!`;
        }
    }, timeDelay)
    ;
}

function emptyDivs () {
    div1.innerHTML = `<span>1</span>`;
    div2.innerHTML = `<span>2</span>`;
    div3.innerHTML = `<span>3</span>`;
    div4.innerHTML = `<span>4</span>`;
    div5.innerHTML = `<span>5</span>`;
    div6.innerHTML = `<span>6</span>`;
    div7.innerHTML = `<span>7</span>`;
    div8.innerHTML = `<span>8</span>`;
    div9.innerHTML = `<span>9</span>`;
    for (let i = 0; i < squareDivs.length; i++) {
        //if div classList contains either p1 or p2;
        if (squareDivs[i].classList.contains('playerOne') || squareDivs[i].classList.contains('playerTwo') || squareDivs[i].classList.contains('clicked')) {
        // remove playerOne and playerTwo classes from all
            squareDivs[i].classList.remove('clicked');            
            squareDivs[i].classList.remove('playerOne');
            squareDivs[i].classList.remove('playerTwo');
        }
    }
}

let gameMode;

function autoPlay() {
    gameMode = 'autoPlay';
    while (winner === undefined) {
        if (currentPlayer === 'PLAYER TWO') {
            computerSelects()
            } else {
            console.log('waiting');
            }
    }
}

// CREATE GAME FUNCTION THAT ALWAYS RUNS computerSelects() when player 2 is current player!
// 1. create button
// 2. event handler that runs the function