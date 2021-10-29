//Question

/* 

    Exceeding words are words where the gap between two adjacent characters is increasing.
    The gap is the distance in ascii

    Example:

    input = update
    output = False

    Explanation :
    from u to p: 5
    from p to d: 12
    from d to a: 3
    from a to t: 19
    from t to e: 15

    5,12,3,19,15 is not increasing.
    The word "update" is not an Exceeding Word

*/

const exceeding = (text) => {
    if (typeof(text) != "string") throw new Error("text must be string")

    let arr = [];
    let exceed = false;

    // Get differences
    for(i = 0; i < text.length; i++){
        if(i !== text.length-1){
            let first = text.charCodeAt(i)
            let second = text.charCodeAt(i+ 1)

            //  Get absolue value
            let diff = Math.abs(first - second)

            // Push diff to array
            arr.push(diff)
        }
    }

    // Check if the difference is increasing
    for(i = 0;i < arr.length; i++){
        if(i !== arr.length-1){
            if(arr[i] > arr[i+1]){
            exceed = false;
            break;
            } else{
            exceed = true;
            }
        }
    }

    return exceed;
}

// Test
let test = "update";

console.log(exceeding(test))

//@devcruz