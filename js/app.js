// spend 30 mins-1 hr planning out how this will be approached
// create game board
// easier way to test draw conditions - start at the middle going down: down middle, up left, down right
const container = document.querySelector('#container');
const squareDivs = document.getElementsByClassName('square');
console.log(squareDivs);
// set variables for all square divs
const divOne = document.querySelector('#id1');
const divTwo = document.querySelector('#id2');
const divThree = document.querySelector('#id3');
const divFour = document.querySelector('#id4');
const divFive = document.querySelector('#id5');
const divSix = document.querySelector('#id6');
const divSeven = document.querySelector('#id7');
const divEight = document.querySelector('#id8');
const divNine = document.querySelector('#id9');


// reset button on click should reset inner html for container

// on square click, we want to
//  1. set background of div to either crow (image1) or forrester (image2) by
//      change class (player1 or player2)!!!
//  2. change the "turn order" variable to either Player 1 or Player 2
//      2a. This should also change the "player1/player2 turn" text
//  3. change over the background image to either image1 or image2
//  4. WE WILL NEED A "MOVETRACKER" VARIABLE
//  5. We will need to disable further clicks

// if x or o, use while loop

// we want to evaluate a win condition after each turn
// what does a win condition look like? 8 win conditions
// the same image in the following combinations
//  1,2,3
//  4,5,6
//  7,8,9
//  7,4,1
//  8,5,2
//  9,6,3
//  7,5,3
//  9,5,1
// can use loop to check! (.square[i])
// we can use classes to check - if 1,2,3 are the same class, then they win!
// const checkWinner = () => {
//     // win condition
//     if ()
// }

// on WIN condition, what do we want it to do?
// 1. update the message that says "PLAYER ONE WIN!/PLAYER TWO WIN!"
// 2. Update Player 1 / Player 2 Scoreboard
// 3. If player1 or player2 score = 3, declare winner!
//  3a. Update final 'div' text with final score
// 4. Disable further clicks

// Add a little div at the very bottom of the viewport
// on mouseover, the robots come up/slide up

// BONUS:
// track players wins over time
// add simple AI that has the computer pick an random empty square
// Make your computer seem more human by adding a short time delay between your turn and the computer's turn.

// SUPER DUPER BONUS
// Add an AI that can beat you every time with the mini-max algorithm.


