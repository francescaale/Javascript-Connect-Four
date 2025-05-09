var cellimages = document.getElementsByClassName("input");

// get the play area cell element
var playareacell = document.getElementById("areacell");

// define the image sources for the red and green discs
var redDiscImage = 'images/redDisc.jpeg';
var greenDiscImage = 'images/greenDisc.jpeg';
var coverImage = 'images/cover.png';

var play = true;

// initialize the arraystore array
var arraystore = [];

// initialize the current player variable
var currentPlayer = 1; //keep track of which player's turn it is in the game. It is initialized to 1, indicating that player 1 goes first.


// initialize the play area cell array
var row = 0; 
while (row < 4) { // loop through the rows

  arraystore[row] = []; // initialize a new row

  var column = 0; // initialize the column counter to 0

  while (column < 4) { // loop through the columns

    arraystore[row][column] = 0; // initialize the current cell to 0
    column++; // increment the column counter
  }
  row++; // increment the row counter
}



arrayTrackHorizontal = [
  ['03', '13', '23', '33'],
  ['02', '12', '22', '32'],
  ['01', '11', '21', '31'],
  ['00', '10', '20', '30']
];

arrayTrackVertical = [
  ['03', '02', '01', '00'],
  ['13', '12', '11', '10'],
  ['23', '22', '21', '20'],
  ['33', '32', '31', '30']
];

arrayTrackDiagonally = [
  ['00', '11', '22', '33'],
  ['30', '21', '12', '03']
];

winningArrays = [arrayTrackDiagonally, arrayTrackHorizontal, arrayTrackVertical];//winning arrays 


//function to when i click on a button different colour disc should be placed using the btnselect() function

function btnselect(x, y) {
  
 if (!play) { //if play is false
    return; //stop playing
  }

	buttonid ="position_"+ x + "_" + y;
	squareclicked=document.getElementById(buttonid);
  // change image of the button
  if (currentPlayer === 1) {
    squareclicked.src = redDiscImage; //when its player 1 turn, red disc appears
  } 
  else {
    squareclicked.src = greenDiscImage;//when its player 2 turn, green disc appears
  }
	
  // store the position of the player
    arraystore[y][x] = currentPlayer; // currentPlayer is a variable that keeps track of which player's turn it is
	


  // check if won function
  if (win()) {
    // Display win message
      document.getElementById("message").innerHTML = "Congratulations, you have won!";
      play = false; //  stop playing game
  }
  
  else {
    // toggle the current player
    if (currentPlayer === 1) {//if player 1 had his turn, it players 2 turn
      currentPlayer = 2;
    } 
    else {
      currentPlayer = 1; //its his turn
    }
    // disable the button
    squareclicked.onclick = null; // Remove the click event - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null
  }
}


function win() {
  // Iterate over each winning array
  var winningArrayIndex = 0;
  while (winningArrayIndex < winningArrays.length) {

    var currentWinningArray = winningArrays[winningArrayIndex];// Get the current winning array
    var positionIndex = 0; // Initialize position index

    // Iterate over each position in the winning array
    while (positionIndex < currentWinningArray.length) {
      
      var positions = currentWinningArray[positionIndex];// Get the positions for the current combination
      var positionInArray = 0; // Initialize position in the array
      var firstValue = null;// Initialize the first value encountered
      var allValuesMatch = true;// track if all values match

      // Iterate over each position in the combination
      while (allValuesMatch && positionInArray < positions.length) { 

        // Get the row and column of the current position
        var position = positions[positionInArray]; //get the position of the current player
        var row = parseInt(position[0]); // Extracts the row number from the position string.
        var col = parseInt(position[1]); // Extracts the column number from the position string.
        var value = arraystore[row][col]; // Get the value from the game grid

        // If it's the first value encountered, store it
        if (firstValue === null) {
          firstValue = value;
        } 

        // If the value is different from the first value or is empty (0), set to false
        else if (value !== firstValue || value === 0) { // operators https://javascript.info/logical-operators 
          allValuesMatch = false;
        }

        positionInArray++; // Move to the next position
      }

      // If all values match, return true - indicating a win
      if (allValuesMatch) {
        return true; 
      }

      
      positionIndex++; // Move to the next position combination
    }
    
    winningArrayIndex++; // Move to the next winning array
  }

  // If no win is found after iterating over all combinations, return false
  return false;
}


function reset() {
  location.reload(); //reset page - https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
  play = true; //set game state back to playing
}


//make it bigger when the user increases the row or column numbers


function grid() {
  // Get the row and column input elements
  var rowsInput = document.getElementById('rows');
  var columnsInput = document.getElementById('columns');

}