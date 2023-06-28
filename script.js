const btn = document.querySelectorAll('button');
const alphaButtons = document.getElementById('buttons');

// Choice of random words
let words = ['janitor', 'reference', 'zion', 'subway', 'faithful', 'anagram', 'rainforest', 'canine', 'festival', 'hexagon', 'portcullis', 'delicate', 'upon', 'pangaea'];

let wordLetters = [];

let mistakeCount = [];

let letterCount = [];

// List of all letters in the alphabet to choose from
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y' , 'z'];

// Creates buttons for each letter of alphabet
let buttonGen = () => {

    // For loop for each letter
    for (i = 0; i <alphabet.length; i++) {
        letters = document.createElement('button');
        letters.innerHTML = alphabet[i].toUpperCase();
        letters.id = alphabet[i];
        alphaButtons.appendChild(letters);
    }
}

let winGame = () => {

    // When all letters have been guessed correctly, win the game

    if (letterCount.length == 0) {
        alert("You win!");
    }
}

let loseGame = () => {

    // When all stages of the hangman have been displayed, lose the game
    alert("You lose!");
}

// Generates random word from 'words' list
let randomWord = () => {
    let randomGen = Math.floor(Math.random() * words.length);
    let randomWordGen = words[randomGen];
    let wordSpace = document.getElementById('word');

    // Displays encrypted word
    for (let i = 0; i < randomWordGen.length; i++) {
        
        // Adds all letters from word to another list
        letterCount.push('*');
        wordSpan = document.createElement('span');
        wordSpan.id = i;
        wordLetters.push(randomWordGen[i]);
        wordSpan.innerHTML += '*';
        wordSpace.appendChild(wordSpan);

    }

    // Button listener
    alphaButtons.addEventListener('click', (e) => {

        //Preventative measure to make sure click isn't assigned to the div container instead of the buttons
        const isButton = e.target.nodeName === 'BUTTON';
        if (!isButton) {
            return;
        }

        // Declares button press event with letter in alphabet
        letterChoice = e.target.id;
        buttonChoice = document.getElementById(letterChoice);

        if (wordLetters.includes(e.target.id)) {

            for (i = 0; i < wordLetters.length; i++) {

                    replaceLet = document.getElementById(i);

                    if (wordLetters[i] == letterChoice) {
                    replaceLet.innerHTML -= '*';
                    replaceLet.innerHTML = letterChoice;
                    letterCount.pop('*');

                    winGame();
                }
            }
        }

        // If the button pressed isn't found in the word, mistake is made
        else {
            mistakeCount.push("x");
            mistake = mistakeCount.length;

            // Runs hangman draw function
            hangmanDraw(mistake);
        }
        
        // Deactivates button choice on press
        buttonChoice.disabled = true;

    });

}

let hangmanDraw = (wrongAnswer) => {
    let c = document.getElementById('myCanvas');
    let ctx = c.getContext("2d");
        
    switch (wrongAnswer) {
        case 1:
            ctx.beginPath();
            ctx.moveTo(75, 150);
            ctx.lineTo(225, 150);
            ctx.stroke();
            break;
        
        case 2:
            ctx.beginPath();
            ctx.moveTo(75, 0);
            ctx.lineTo(75, 150);
            ctx.stroke();
            break;

        case 3:
            ctx.beginPath();
            ctx.moveTo(75, 0);
            ctx.lineTo(225, 0);
            ctx.stroke();
            break;
        
        case 4:
            ctx.beginPath();
            ctx.moveTo(225, 0);
            ctx.lineTo(225, 37.5);
            ctx.stroke();
            break;

        case 5:
            ctx.beginPath();
            ctx.arc(225, 45, 7.5, 0, 2 * Math.PI);
            ctx.stroke();
            break;

        case 6:
            ctx.beginPath();
            ctx.moveTo(225, 52.5);
            ctx.lineTo(225, 90);
            ctx.stroke();
            break;

        case 7:
            ctx.beginPath();
            ctx.moveTo(225, 60);
            ctx.lineTo(210, 60);
            ctx.stroke();
            break;

        case 8:
            ctx.beginPath();
            ctx.moveTo(225, 60);
            ctx.lineTo(240, 60);
            ctx.stroke();
            break;

        case 9:
            ctx.beginPath();
            ctx.moveTo(225, 90);
            ctx.lineTo(210, 105);
            ctx.stroke();
            break;

        case 10:
            ctx.beginPath();
            ctx.moveTo(225, 90);
            ctx.lineTo(240, 105);
            ctx.stroke();
            loseGame();
            break;
    }
}

buttonGen();

randomWord();

hangmanDraw();

// Checks for letter in word that has been generated each time a button has been pressed
