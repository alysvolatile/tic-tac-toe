// BUG
// NEED TO DISABLE ALL CLICKS ON BOARD AFTER WIN
// removeEventHandler?


// Figure out how to use reset button without refreshing whole page
// Stop game and declare winner once either playerScore = 3
// Create simple function that chooses and selects empty square at random
    // CREATE FUNCTION
    // CREATE BUTTON 
    // LINK FUNCTION TO BUTTON
// Add time delay bw your turn and computer turn
// create a mini-max algo SUPER BONUS
    // https://towardsdatascience.com/how-a-chess-playing-computer-thinks-about-its-next-move-8f028bd0e7b1

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
        console.log(winner);
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
}

// add event listener to all divs
for (let i = 0; i < squareDivs.length; i++) {
    squareDivs[i].addEventListener('click', function handleClick(e) {
        //first, let's test if it's already been clicked!
        if (squareDivs[i].classList.contains('clicked')) {
        console.log('clicked');
    } else {
        // Adds appropriate image to clicked square
        squareDivs[i].classList.add('clicked');
        if (currentPlayer === 'PLAYER ONE') {
            squareDivs[i].classList.add('playerOne');
            squareDivs[i].innerHTML = `<span>${currentPlayer}</span>`;
        } else {
            squareDivs[i].classList.add('playerTwo');
            squareDivs[i].innerHTML = `<span>${currentPlayer}</span>`;
        }
        checkDraw();
        checkWinner();
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
    }
    })
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

if (gameFinished === true) {
    for (let i = 0; i < squareDivs.length; i++) {
        squareDivs[i].removeEventListener('click', handleClick, true)
};
}

// reset button semiDONE
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => {
    console.log(resetButton);
    location.reload();
    }
)
// functionality for reset button!
// 1. this should removes all divs
const removeDivs = () => {
    while (container.firstChild) {
        container.firstChild.remove();
    }
}
// 2. AND THEN recreate them
const createDivs = () => {
    for (let i = 1; i < 10; i++) {
        const div = document.createElement('div');
        div.setAttribute('id',`div${i}`);
        //sets Class
        div.setAttribute('class', 'square');
        // appends to container
        container.appendChild(div);
    }
}

// 3. problem to solve: click event - the "one time only" thing is messing with us!!

//POTENTIAL SOLUTION Disable further clicks
    // for (let i = 0; i < squareDivs.length; i++) {
    //     squareDivs[i].classList.add(null);
    // }
