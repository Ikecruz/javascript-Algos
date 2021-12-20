/* 
    
  Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.
  
  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array. For
  instance, the numbers [1, 3, 4] form a subsequence of the array
  [1, 2, 3, 4], and so do the numbers [2, 4]. Note
  that a single number in an array and the array itself are both valid
  subsequences of the array.


  SAMPLE INPUT 
  array = [5, 1, 22, 25, 6, -1, 8, 10];
  sequence = [1, 6, -1, 10];

  SAMPLE OUTPUT 
  true


*/

function isValidSubsequence(array, sequence) {
    let newar = [];
  
    newar = array.filter(ele => sequence.includes(ele));

    let status = true;

    for(let i = 0; i < sequence.length; i++){
        if(newar[i] !== sequence[i]) {
            status = false;
            break;
        }
    }

    return status;
}

// TEST

let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10];

console.log(isValidSubsequence(array, sequence));