// Question
/* 

    Given an integer x, return true if x is palindrome integer.

    An integer is a palindrome when it reads the same backward as forward. 
    For example, 121 is palindrome while 123 is not.

    Example 1:
    Input: x = 121
    Output: true

    Example 2:
    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-.
    Therefore it is not a palindrome.

    Example 3:
    Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/

const isPalindrome = (x) => {
    newx = Array.from(x.toString());
    newx = newx.reverse();
    newx = parseInt(newx.join(''));
    if (newx === x) return(true)
    else return(false)
};

// Test
console.log(isPalindrome(121));
