/*

    Given a string, return a new string that contains all the vowels of the given string first and 
    its consonants last; in the same order, and same casing.

    groupLetters(word)
    Parameters
    word: String - The given string

    Return Value
    String - A new string with vowels first and consonants last.

    Examples
    word Return Value
    "david" "aidvd"
    "" ""
    "mvp" "mvp"

*/

const groupLetters = (word) => {
    if (typeof(word) !== "string") throw new Error("Argument must be string")

    let vowelstr = "";
    let constr = "";
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            vowelstr += word[i];
        } else{
            constr += word[i];
        }
    }

    return vowelstr.concat(constr);
}

// Test

console.log(groupLetters("Adae"))