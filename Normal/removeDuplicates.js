
// Question
/*  
    Remove elements that appears more than once in an array 
    (Eg) [1, 1, 2, 1, 4, 5, 5, 4, 6] returns [2, 6]
    1, 4, 5 got removed cause they appear more than once
*/

// Test array
const arr = [2, 3, 6, 7, 2, 3 ,6 , 10]

// Solution 1
const solution1 = (array) => {
    // Create a new array that will contain the elements that only appeared once
    newarr = [];

    // Loop through array
    for (let i = 0; i < array.length; i++) {
        // Set count for each array element (Since it's a loop count is 0 for each element)
        let count = 0;

        // Loop through array again (Like creating a duplicate of the array so we can compare the element we're looping with all elements in the array)
        for (let j = 0; j < array.length; j++) {
            
            // Increment the element's count whenever element is found in the duplicate array
            if (array[i] == array[j]) {
                count++;
            }

        }

        // Add the element to the new array if it occured only once
        if (count === 1) {
            newarr.push(array[i])
        }
    }

    return newarr;
}

console.log(solution1(arr))

// dev @Ikecruz



// Solution 2
const solution2 = (arr) => {
    // creates new array
    newarr = [];
  
    //loop through array
    for(let i = 0; i < arr.length; i++) {
    
        //if the new array has the element in it, it should remove the element cause it's not unique
        if(newarr.includes(arr[i])){
        newarr = newarr.filter(r => r != arr[i])
        } else{
            // else it should add it cause it's not in the new array (meaning it's unique)
            newarr.push(arr[i])
        }
    }
  
  return newarr;
}


console.log(solution2(arr))
// dev @Ikecruz