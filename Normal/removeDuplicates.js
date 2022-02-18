
// Question
/*  
    Remove elements that appears more than once in an array 
    (Eg) [1, 1, 2, 1, 4, 5, 5, 4, 6] returns [2, 6]
    1, 4, 5 got removed cause they appear more than once
*/

// Test array
const testArr = [2, 3, 6, 7, 2, 3 ,6 , 6, 10]

// Solution 1
const removeDup = (arr) => {
    
    return arr.filter(char => arr.filter(newchar => newchar == char).length == 1 )

}

console.log(removeDup(testArr))

// dev @Ikecruz