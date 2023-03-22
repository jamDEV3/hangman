const btn = document.querySelectorAll('button');
const alphaButtons = document.getElementById('buttons');

// Choice of random words
let words = ['janitor', 'reference', 'zion', 'subway', 'faithful', 'anagram', 'rainforest', 'canine', 'festival'];

let wordLetters = [];

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
        }

        else {
            hangmanDraw();
        }
    });

    console.log(wordLetters);
}

let hangmanDraw = () => {

}

buttonGen();

randomWord();

hangmanDraw();

// Checks for letter in word that has been generated each time a button has been pressed
