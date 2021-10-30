// Question 
/* 

    In this Kata, we will check if a string contains consecutive letters as they appear 
    in the English alphabet and if each letter occurs only once.

    Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

    For example: 
    solve("abc") = True, because it contains a,b,c
    solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
    solve("dabc") = True, because it contains a, b, c, d
    solve("abbc") = False, because b does not occur once.
    solve("v") = True

*/

const consLetter = (text) => {
    if(typeof(text) !== "string") throw new Error("Argument must be string");

    let status = true;
    text = text.toLowerCase();
    let stringarr = Array.from(text).sort();
    
    for (let i = 0; i < stringarr.length; i++) {
        if (i !== stringarr.length - 1) {
            if ((stringarr[i].charCodeAt(0)) == (stringarr[i+1].charCodeAt(0) - 1)) {
                status = true;
            } else{
                status = false;
                break;
            }
        }
    }

    return status;
}

console.log(consLetter("bced"))