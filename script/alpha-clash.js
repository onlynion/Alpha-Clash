// function play(){
//   // Objective-1: Hide the home screen . To hide the home screen add the class "hidden" to the home scetion
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   // Objective-2: Show the playground . To show the playground remove the class "hidden" from the playground scetion
//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");
// }

function handleKeyboardKeyupEvent(event){
    const playerPressed = event.key;
    
    // Stop the game if player press 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // Get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);

    if(playerPressed === expectedAlphabet){
      // Update Score

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

    //   // Step-1: Get the current score
    //   const currentScoreElement = document.getElementById("current-score");
    //   const currentScoreText = currentScoreElement.innerText;
    //   const currentScore = parseInt(currentScoreText);

    //   // Step-2: Increase the score by 1
    //   const newScore = currentScore + 1;

    //   // Step-3: Show the update score
    //   currentScoreElement.innerText = newScore;

      // Start a new round
      removeBackgroundColorById(expectedAlphabet);
      continueGame();
    }

    else{
      // Update life

        const currenTLife = getTextElementValueById('current-life');
        const updatedLife = currenTLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }

    //   // Step-1: Get the current life number
    //     const currentLifeElement = document.getElementById('current-life');
    //     const currentLifeText = currentLifeElement.innerText;
    //     const currenTLife = parseInt(currentLifeText);

    //   // Step-2: Reduce the life count
    //     const newLife = currenTLife-1;

    //   // Step-3: Display the updated life count
    //   currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyboardKeyupEvent);

function continueGame(){
    // Step-1: Generate a random alphabet
    const alphabet = getARandomAlphabet();

    // Set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // Set bg color
    setBgColor(alphabet);
}

function play(){

    // Hide everything show only the play gorund
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    continueGame();

    // Reset score & life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // Update final score
    // Step-1: get the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // Clear the last selected alphabet highlight
    const currentAlphabet = getElememtTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}