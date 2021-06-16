// Connects the button to the funtion displayMessage.
document.getElementById('button').addEventListener('click', displayMessage)

function displayMessage () {
  // Lets it so that if you click the button, the paragraph text will turn into the new paragraph text below.
  document.getElementById('paragraph').innerHTML = 'How to play: First, observe the image of the jelly bean jar. Next make a guess in the input box of how many jelly beans you think are in the jar and click the button. If you guessed too high or too low, you can guess again.'
}

// Connects the new button to the makeGuess function. Makes new variable called userGuess.
document.getElementById('button-two').addEventListener('click', makeGuess)
let userGuess = 0

function makeGuess () {
  // Connects the userGuess variable to the input box and lets the program read the text inputted as an integer.
  userGuess = document.getElementById('input').value
  userGuess = parseInt(userGuess)

  // Compares the integer inputted by user with the number of jelly beans in the jar and tells user if their integer is too high or too low.
  const answer = 1623
  if (userGuess < answer) {
    document.getElementById('answer').innerHTML = 'Guess too low, try again!'
  } else if (userGuess > answer) {
    document.getElementById('answer').innerHTML = 'Guess to high, try again!'
  } else if (userGuess === answer) {
    document.getElementById('answer').innerHTML = 'You got it, great job! Head back to main page to play some more games.'
  } else {
    document.getElementById('answer').innerHTML = 'Invalid guess, try again!'
  }
}

// Connects the button to the funtion displayHint.
document.getElementById('hint-button').addEventListener('click', displayHint)

function displayHint () {
  // Lets it so that if you click the button, the paragraph text will turn into the new paragraph text below and give user a hint.
  document.getElementById('hint-text').innerHTML = 'Hint: The number of jelly beans is less than 1700 and more than 1600.'
}
