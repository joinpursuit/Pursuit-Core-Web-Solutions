const readline = require('readline-sync');

function contains(arr, target) {
  return !arr.every(elem => elem !== target)
}

class Game {
  constructor(word) {
    this.word = word
    this.guessedLetters = []
    this.guessCount = 0
    this.guessLimit = 6
  }
  logCurrentDisplayWord() {
    let wordToDisplay = ""
    for (let letter of this.word) {
      if (contains(this.guessedLetters, letter)) {
        wordToDisplay += letter
      } else {
        wordToDisplay += "_"
      }
    }
    console.log(wordToDisplay)
  }
  makeGuess(letter) {
    if (contains(this.guessedLetters, letter)) {
      console.log("You've already guessed that letter")
      return
    }
    this.guessedLetters.push(letter)
    this.guessCount++
    if (this.playerVictory()) {
      console.log(`You win!  You took ${this.guessCount} guesses`)
    } else {
      if (this.guessCount >= this.guessLimit) {
        console.log(`You lose!  The word was ${this.word}`)
      }
    }
  }
  logGuessesRemaining() {
    console.log(`You have ${this.guessLimit - this.guessCount} guesses remaining`)
  }
  playerVictory() {
    return this.word.split("").every(letter => contains(this.guessedLetters, letter))
  }
}

function playGame() {
  let myGame = new Game("apple")
  while (myGame.guessCount < myGame.guessLimit && !myGame.playerVictory()) {
    console.log()
    myGame.logCurrentDisplayWord()
    console.log()
    console.log(`Guessed letters: ${myGame.guessedLetters}`)
    console.log()
    myGame.logGuessesRemaining()
    let letter = getValidLetterGuess()
    myGame.makeGuess(letter)
  }
}

function getValidLetterGuess() {
  let letter = ""
  while (!letter) {
    let input = readline.question("Please enter your guess: ")
    if (guessIsValid(input)) {
      letter = input
    } else {
      console.log("Please enter a valid letter")
    }
  }
  return letter.toLowerCase()
}

function guessIsValid(letter) {
  return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
}

playGame()
