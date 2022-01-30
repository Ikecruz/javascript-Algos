/*

    Given a string of words, you need to find the highest scoring word.

    Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

    You need to return the highest scoring word as a string.

    If two words score the same, return the word that appears earliest in the original string.

    All letters will be lowercase and all inputs will be valid.

*/

const high = (words) => {
    let newwords = words.split(' ').map(word => word.split('').map(char => word.charCodeAt(word.indexOf(char)) - 96).reduce((a,b) => a + b,0))

    let position = newwords.indexOf(Math.max(...newwords))

    return words.split(' ')[position]
}

console.log(high("take me to semynak"))