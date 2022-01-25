/*

    Winter is coming, you must prepare your ski holidays. 
    The objective of this kata is to determine the number of pair of gloves 
    you can constitute from the gloves you have in your drawer.

    Given an array describing the color of each glove, 
    return the number of pairs you can constitute, 
    assuming that only gloves of the same color can form pairs.

    EG:

    input = ["red", "green", "red", "blue", "blue"]
    result = 2 (1 red pair + 1 blue pair)

    input = ["red", "red", "red", "red", "red", "red"]
    result = 3 (3 red pairs)

*/

const numberOfPairs = (gloves) => {
  
    let arr = gloves.map((glove) => {
      let newglove = gloves.filter(c => glove == c);
      gloves = gloves.filter(c => c != glove );
      return newglove;
    })
    
    arr = arr.filter(child => (child.length % 2 == 0) && (child.length != 0));
    
    return arr.map(child => Math.floor(child.length / 2)).reduce((a,b) => a + b, 0)
}

console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"]));