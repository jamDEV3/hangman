const btn = document.querySelectorAll('button');
const alphaButtons = document.getElementById('buttons');

// Choice of random words
let words = ['janitor', 'reference', 'zion', 'subway', 'faithful', 'anagram', 'rainforest', 'canine', 'festival', 'hexagon', 'portcullis', 'delicate', 'upon', 'panagea'];

let wordLetters = [];

let mistakeCount = [];

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

// Generates random word from 'words' list
let randomWord = () => {
    let randomGen = Math.floor(Math.random() * words.length);
    let randomWordGen = words[randomGen];
    console.log(randomWordGen);
    let wordSpace = document.getElementById('word');

    // Displays encrypted word
    for (let i = 0; i < randomWordGen.length; i++) {
        
        // Adds all letters from word to another list
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

        if (wordLetters.includes(e.target.id)) {
            console.log('YAY');
            correctLet = e.target.id;

            for (i = 0; i < wordLetters.length; i++) {
                if (wordLetters[i] == correctLet) {
                    replaceLet = document.getElementById(i);
                    replaceLet.innerHTML -= '*';
                    replaceLet.innerHTML = correctLet;
                }
            }

            for (i = 0; i < alphabet.length; i++) {
                if (alphabet[i] == correctLet) {
                    buttonInactive = document.getElementById(correctLet);
                    buttonInactive.disabled = true;
                }
            }
        }

        else {
            mistakeCount.push("x");
            mis = mistakeCount.length;
            hangmanDraw(mis);
        }
    });

    console.log(wordLetters);
}

let hangmanDraw = (wrongAnswer) => {
    let c = document.getElementById('myCanvas');
    let ctx = c.getContext("2d");
        
    switch (wrongAnswer) {
        case 1:
            ctx.beginPath();
            ctx.moveTo(100, 100);
            ctx.lineTo(200, 100);
            ctx.stroke();
            break;

        case 2:
            ctx.beginPath();
            ctx.moveTo(100, 0);
            ctx.lineTo(100, 100);
            ctx.stroke();
            break;

        case 3:
            ctx.beginPath();
            ctx.moveTo(100, 0);
            ctx.lineTo(150, 0);
            ctx.stroke();
            break;
        
        case 4:
            ctx.beginPath();
            ctx.moveTo(150, 0);
            ctx.lineTo(150, 25);
            ctx.stroke();
            break;

        case 5:
            ctx.beginPath();
            ctx.arc(150, 30, 5, 0, 2 * Math.PI);
            ctx.stroke();
            break;

        case 6:
            ctx.beginPath();
            ctx.moveTo(150, 35);
            ctx.lineTo(150, 60);
            ctx.stroke();
            break;

        case 7:
            ctx.beginPath();
            ctx.moveTo(150, 40);
            ctx.lineTo(140, 40);
            ctx.stroke();
            break;

        case 8:
            ctx.beginPath();
            ctx.moveTo(150, 40);
            ctx.lineTo(160, 40);
            ctx.stroke();
            break;

        case 9:
            ctx.beginPath();
            ctx.moveTo(150, 60);
            ctx.lineTo(140, 70);
            ctx.stroke();
            break;

        case 10:
            ctx.beginPath();
            ctx.moveTo(150, 60);
            ctx.lineTo(160, 70);
            ctx.stroke();
            console.log("GAME OVER");
            break;
    }
}

buttonGen();

randomWord();

hangmanDraw();

// Checks for letter in word that has been generated each time a button has been pressed
