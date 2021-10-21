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

console.log(withdraw(137));