const btn = document.querySelectorAll('button');

// Choice of random words
let words = ['janitor', 'reference', 'zion', 'subway', 'faithful', 'anagram', 'rainforest', 'canine', 'festival'];

let wordLetters = [];

// List of all letters in the alphabet to choose from
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y' , 'z'];

// Creates buttons for each letter of alphabet
let buttons = () => {
    alphaButtons = document.getElementById('buttons');

    // For loop for each letter
    for (let i = 0; i <alphabet.length; i++) {
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
        wordLetters.push(randomWordGen[i]);
        wordSpan = document.createElement('span');
        wordSpan.innerHTML = '*';
        wordSpace.appendChild(wordSpan);
    }

    console.log(wordLetters);
}

// Checks for letter in word that has been generated each time a button has been pressed

//Currently not working :(
btn.forEach((select) => {
    select.addEventListener('click', (e) => {
        if (wordLetters.includes(e.target.id)) {
            console.log('YAY');
        }

        else {
            console.log('NAY');
        }
    })
})


randomWord();

buttons();
