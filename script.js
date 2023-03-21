let words = ['janitor', 'reference', 'zion', 'subway', 'faithful', 'anagram', 'rainforest', 'canine', 'festival'];

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y' , 'z'];

let buttons = () => {
    alphaButtons = document.getElementById('buttons');

    for (let i = 0; i <alphabet.length; i++) {
        letters = document.createElement('button');
        letters.innerHTML = alphabet[i].toUpperCase();
        alphaButtons.appendChild(letters);
    }
}

let randomWord = () => {
    let randomGen = Math.floor(Math.random() * words.length);
    let randomWordGen = words[randomGen];
    console.log(randomWordGen);
}

randomWord();

buttons();