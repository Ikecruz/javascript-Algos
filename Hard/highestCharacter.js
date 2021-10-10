//Question 
/* 
    Display the highest character in a given string as seen below
    Look {L=1, o=2, k=1}
    Drill {D=1, r=1, i=1, l=2}
*/

// Test String
let str = "Drill"

const highestChar = (string) => {
	
    //Chnage string to lowercase
    string = string.toLowerCase();
  
    //Create array from String
    let arrayOfString = Array.from(string);
    
    /* Final array that will be returned with characters' and
        characters' count in it Eg {char: 'a', count: '2'}
    */
    let finalArr = [];
    
    //Check if character is in the final array already
    function charExists(char) {
        return finalArr.some(function(el) {
            return el.char === char;
        }); 
    }
    
    /* Loop through array to check occurrence of each character
        in the array
    */ 
    arrayOfString.forEach(element => {
    
        // create a charCounter variable that will hold the occurrence of each character
        let charCount = 0;
        //Temp object that will contain the char and it's occurrence
        let tempObj = {};
        
        //Loop through array again (Creating a duplicate of the array)
        arrayOfString.forEach(element2 => {
            if(element == element2){
                //Increment character count each time character is seen in duplicate array
                charCount++;
            }
        })
        
        tempObj.char = element;
        tempObj.Count = charCount;
        
        // check if character occurence has already been calculated then add to final array only when false
        if(!charExists(element)){
            finalArr.push(tempObj);
        }
    })
    
    return finalArr;
}

// Test
console.log(highestChar(str))

// dev @Ikecruz

// Solution 2

// dev @your-github-username


// Contributors can attempt same question with their own method
// Remember to add your github username :)