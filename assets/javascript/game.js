//@ts-check
//create an array of letters
let emptArr = [];
const guessList = 10;
let letterChoice =
    ["a","b","c","d","d","f",
    "g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z"];
let wins = 0;
let losses = 0;
let letterGuess = '';


//pick a random letter from the array of letters
var letters = letters[Math.floor(Math.random() * letters.length)];
//console.log(random letter)
return letters;

//checks guess with random letter
function letterMatch(guess, losses) {
    let matchPosition = [];
    for (let i=0; i < letterGuess.length; i++){
        if (guess ==== letterGuess.charAt(i)) {
            matchPosition.push(i);
            console.log(matchPosition);
        }
        else if (!matchPosition.length && i === letterGuess.length-1) {
            losses.push(guess);
            console.log(losses)
        }
    }
}


//set up answerArray to show how many letters they are using _'s

var answerArray =[];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

//create a variable to hold the number of remainingGuesses to be guessed
var remainingGuesses = word.length;

//   *******THE GAME LOOP ************

// While there are letters left to be guessed
while (remainingGuesses > 0){

    //show the player progress
    alert(answerArray.join(" "));

    //get a guess from the player
    var guess = prompt ("Press any key to get started!");

    //if the guess is blank
    if (guess === null){
        //exit the game loop
        break;
    //if the guess is more than one letter or no letters

    }else if (guess.length !== 1){
        //alert them to guess a single letter;
        alert("Please enter a single letter.");
        //valid guess
    } else { 
        //update the game state with the guess
        for (var j=0; j < word.length; j++){
            //if the letter they guessed is in the word
            //at that point or index
            if (word[j] === guess) {
                //update answer array with the letter they guessed
                //at that point 
                answerArray[j] = guess; remainingLetters--;
                //substract one from remaining letters
                remainingLetters--;
            }
        }
    }
    // **** End of Game Loop***
}
//Show player answer
alert(answerArray.join(" "));
//Congratulations
alert ("Good job! The answer was " + word);

var word = Pickword ();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var pickWord = function (word) {
    //Return answer array
};
var showPlayerProgress = function (answerArray){
    //show player progress
};
var getGuess = function (guess, word, answerArray) {
    //update answerArray
};
var showAnswerAndCongratulatePlayer = function (answerArray) {
    //show answer and congratulate
};
while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
        break;
    }else if (guess.length !== 1) {
        alert("Enter single letter.");
    } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}
showAnswerAndCongratulatePlayer(answerArray);