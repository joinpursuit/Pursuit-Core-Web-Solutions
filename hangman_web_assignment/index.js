let hangmanGame = new HangmanGame(7)

document.addEventListener("DOMContentLoaded", () => {
    configureGuessButton()
    updateUI()
})

function configureGuessButton() {
    let button = document.querySelector("#guessButton")
    button.addEventListener("click", handleGuessButtonClick)
}

function handleGuessButtonClick() {
    console.log("Button clicked")
    let displayText = ""
    let inputLetter = getInputText()
    switch (hangmanGame.guessLetter(inputLetter)) {
        case HangmanGuessResults.BADINPUT.INVALIDLETTER:
            displayText = "Invalid letter"
            break
        case HangmanGuessResults.BADINPUT.ALREADYGUESSED:
            displayText = "You've already guessed that letter"
            break
        case HangmanGuessResults.GAMEOVER.VICTORY:
            displayText = "You win!"
            break
        case HangmanGuessResults.GAMEOVER.DEFEAT:
            displayText = "You lose!"
            document.querySelector("#currentDisplayWord").innerText = hangmanGame.wordToGuess
            break
        case HangmanGuessResults.CORRECT:
            displayText = "Correct"
            updateUI()
            break
        case HangmanGuessResults.INCORRECT:
            displayText = "Incorrect"
            updateUI()
            break
    }    
    document.querySelector("#gameMessagePara").innerText = displayText
}

function getInputText() {
    let letterInput = document.querySelector("#letterInput")
    return letterInput.value
}

function updateUI() {
    document.querySelector("#guessedLettersPara").innerText = hangmanGame.guessedLetters
    document.querySelector("#currentDisplayWord").innerText = hangmanGame.getDisplayText()
    document.querySelector("#guessesRemainingPara").innerText = hangmanGame.guessesRemaining + " Guesses remaining"
}