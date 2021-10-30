/* An atm has 100, 20, 9, and 1 Naira bills (NGN) available to be dispensed.  
    Given an amount between 0 and 10,000 Naira (inclusive) and asaiming that the ATM wants to use as few bills as possible, 
    determine  the minimal number of 100, 20, 9, and 1 dollar bills the ATM needs to dispense (in that order).
    Here's the specification for the withdraw method you'll complete. 
*/

// Withdraw  (amount) 

// Parameters 
// Amount: Number - amount of money to withdraw. Assume that the amount is always divisible into 100, 20, 9, and 1 bills.

// Return value
// Array  <Number> An array of 4 integers representing the number of 100, 20, 9, and 1 Naira bills needed to complete the withdraw  (in that order). Constraints: 0《amount《10,000.

// Examples 
// Amount         return value
// 1049              [10,2,1,0]
// 130                [1,1,1,1]

const withdraw = (amount) => {

    let hundreds, twenties, nines, ones;
    hundreds=twenties=nines=ones=0;

    hundreds = Math.floor(amount/100);
    let rem = amount % 100;

    twenties = Math.floor(rem/20);
    rem = rem % 20;

    nines = Math.floor(rem/9);
    rem = rem % 9;

    ones = rem;

    return [hundreds, twenties, nines, ones];
}

//Test
console.log(withdraw(1049));