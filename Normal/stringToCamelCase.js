/*

    Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
    The first word within the output should be capitalized only if the original word was capitalized 
    (known as Upper Camel Case, also often referred to as Pascal case).

    EXAMPLES:
    A) "the-stealth-warrior" gets converted to "theStealthWarrior"
    B) "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

const toCamelCase = (str) => {
    // returned an empty string when str is empty
    if(!str) return '';
    
    //splited the string into array based on the seperator
    str.includes('-') ? str = str.split('-') : str.includes('_') ? str = str.split('_') : console.log('none');
  
    // looped through each word
    for (let i =0 ; i < str.length; i++){
      
      //skipped the first word
      if(i < 1) continue;
      
      //made an array from each word
      str[i] = str[i].split('');
      
      // got the first character and converted it to uppercase
      str[i].unshift(str[i].shift().toUpperCase());
      
      // converted the array back to string
      str[i] = str[i].join('');
    }
  
    //converted the array back to string
    return str.join('');
}