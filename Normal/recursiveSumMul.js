const sumMul = (arr) => {

    if (arr.length == 0) return []
	
	const cal = (nums, operation) => {
		let temparr = []
		
		switch (operation) {
			case '+' :
				for (let i = 0; i < nums.length; i += 2) temparr.push(nums[i] + (nums[i + 1] || 0))
				break;
			case '*' :
				for (let i = 0; i < nums.length; i += 2) temparr.push(nums[i] * (nums[i + 1] || 0))
				break;
		}
		
		return temparr
	}

    let i = 1;

    while (arr.length > 1) {
        if(i % 2 == 1) arr = cal(arr, '+')
        else arr = cal(arr, '*')
        i++;
    }

	return arr[0]
}

console.log(sumMul([1,2,3,4,5,6,7,8]))