<h1>The Psychic Game </h1>

let userQuestion = "Guess which letter I'm thinking of.";
console.log(userQuestion);
let randomLetter = 

function randLetter( ) {

var letters =
    ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");

var letter = letters[Math.floor(Math.random()*letters.length)];

return letter

}

$('#letter').html(randLetter())