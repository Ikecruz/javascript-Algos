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
    let result = [];

    let hundreds, twenties, nines, ones;
    hundreds=twenties=nines=ones=0;

    //get number of hundreds
    if (amount >= 100) {
        while (amount >= 100) {
            amount -= 100;
            hundreds += 1;
        }
    }

    //get number of twenties
    if (amount >= 20) {
        while (amount >= 20) {
            amount -= 20;
            twenties += 1;
        }
    }

    //get number of nines
    if (amount >= 9) {
        while (amount >= 9) {
            amount -= 9;
            nines += 1;
        }
    }

    //get number of nines
    if (amount >= 1) {
        while (amount >= 1) {
            amount -= 1;
            ones += 1;
        }
    }

    result.push(hundreds, twenties, nines, ones)

    return result;
}

//Test
console.log(withdraw(230));