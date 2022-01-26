/*

    A pangram is a sentence that contains every single letter of the alphabet at least once. 
    For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
    because it uses the letters A-Z at least once (case is irrelevant).

    Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
    Ignore numbers and punctuation.

*/

const isPangram = (texts) => {
    let alphas = "abcdefghijklmnopqrstuvwxyz";
  
    texts = texts.toLowerCase().split('').filter(char => alphas.includes(char)).join('');
  
    return alphas.split('').filter(char => !texts.includes(char)).length == 0;
}

console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));