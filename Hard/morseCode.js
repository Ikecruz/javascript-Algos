// Question 1
/*
    The Morse code encodes every character as a sequence of "dots" and "dashes".

    For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−.

    The Morse code is case-insensitive, traditionally capital letters are used. 
    When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words.

    For example, the message `Decadev` in Morse code is -.. . -.-. .- -.. . ...-

    NOTE: Extra spaces before or after the code have no meaning and should be ignored. In addition to letters, digits and some punctuation, 
    there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. 
    These special codes are treated as single special characters, and usually are transmitted as separate words.
    Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

    For example.

    ```js
    decodeMorse("-.. . -.-. .- -.. . ...-");
    //should return "DECADEV"

    Use the constant `MORSE_CODE` below to translate.
*/

// Translator
const MORSE_CODE = {
    "-.-.--": "!",
    ".-..-.": '"',
    "...-..-": "$",
    ".-...": "&",
    ".----.": "'",
    "-.--.": "(",
    "-.--.-": ")",
    ".-.-.": "+",
    "--..--": ",",
    "-....-": "-",
    ".-.-.-": ".",
    "-..-.": "/",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "---...": ":",
    "-.-.-.": ";",
    "-...-": "=",
    "..--..": "?",
    ".--.-.": "@",
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "..--.-": "_",
    "...---...": "SOS",
};

const decodeMorse = (code) => {
    // Create an array of each code words so "--- -.-   ... .. .-." (OK SIR) turns to ['--- -.-', '... .. .-.'] (['OK', 'SIR'])
    let codeWordsArr = code.split('   ')

    // array for the final words to be returned
    let changedWordsArr = [];

    // final words to be returned
    let changedWords = '';

    // loop through the code words array 
    codeWordsArr.forEach(codeWord => {

        // Create an array of code characters from the current code word being looped through so "--- -.-" (OK) turns to ['---', '-.-'] (['O', 'K'])
        let codeCharArr = codeWord.split(' ')

        // array for the change word to be returned 
        let changedWord = [];

        // Loop through code character array
        codeCharArr.forEach(codeChar => {
            // translate code character to alphabetic character
            let changedChar = MORSE_CODE[codeChar];

            //Pushed changed character to changed word array
            changedWord.push(changedChar);
        })
        // Change the changed word array to a string
        changedWord = changedWord.join('')

        //pushed each translated word to the changed words array
        changedWordsArr.push(changedWord);
    });

    // Convert the changed words array to a string
    changedWords = changedWordsArr.join(' ');
    return changedWords;
}

// Test
// OK SIR
console.log(decodeMorse("-.. . -.-. .- -.. . ...-"))