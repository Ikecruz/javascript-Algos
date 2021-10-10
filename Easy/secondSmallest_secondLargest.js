//Question 
/* 
    Given an array of numbers return the second smallest and second largest numbers in an array
    Eg [2, 3, 4, 9, 7] => [3, 7]
*/

// Test Array 

const arr = [2, 2, 3, 5, 6, 9];

const minMax = (array) => {
    // Remove duplicates
    let newarray = [];

    array.forEach(element => {
        if(!newarray.includes(element)){
            newarray.push(element);
        }
    });

    let finalArr = []
    
    // Get the maximum number in array and remove it from the array
    let max =  Math.max(...newarray)
    newarray = newarray.filter(value => value != max)

    // Get the minimum number in array and remove it from the array
    let min = Math.min(...newarray)
    newarray = newarray.filter(value => value != min)

    /* Get the maximum number in array and push to the final array 
        This is the second largest number in array since the largest has been removed
    */
    max = Math.max(...newarray)
    newarray = newarray.filter(value => value != max)


    /* Get the minimum number in array and push to the final array 
        This is the second smallest number in array since the smallest has been removed
    */
    min = Math.min(...newarray)
    newarray = newarray.filter(value => value != min)

    finalArr.push(min, max)

    return finalArr;
}

// Test
console.log(minMax(arr))

// dev @Ikecruz

// Solution 2

// dev @your-github-username


// Contributors can attempt same question with their own method
// Remember to add your github username :)