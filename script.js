// script.js

const words = ["example", "javascript", "coding", "challenge"];
let currentWord = "";
let tries = 0;
let mistakes = 0;

function scrambleWord(word) {
  // Scramble and return the scrambled word
  let arr = word.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr.join('')

}


function generateRandomWord() {
  // Generate and display scrambled word
  let randomIndex = Math.floor(Math.random() * words.length);
  let word = words[randomIndex];

  //Scramble the word
  let scrambled = scrambleWord(word);

  // Display the scrambled word in the .word-box element
  document.querySelector('.word-box').textContent = scrambled;

  // Optionally, store the original word for checking guesses
  currentWord = word;
}

function createInputFields(length) {
  // Create number of input fields according to the number of letters
  const inputBox = document.querySelector('.input-box');
  inputBox.innerHTML = ''; // clear previous inputs

  for(let i = 0; i < length; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.maxLength = 1;
    input.className = 'guess-input';
    input.addEventListener('input', handleInput);
    inputBox.appendChild(input);
  }
}

function handleInput(event) {
  // Handle input change event
}

function resetGame() {
  // Handle game reset button
}

document
  .getElementById("randomButton")
  .addEventListener("click", generateRandomWord);
document.getElementById("resetButton").addEventListener("click", resetGame);

// Initial load
generateRandomWord();