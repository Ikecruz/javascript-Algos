/*

	Given an array of 2k integers (for some integer k, which will be betwen 0 and 5 inclusive), perform the following operations until the array contains only one element:

	On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
	On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.
	After the algorithm has finished, there will be a single element left in the array. Return that element.

	Specification
	Challenge.packArray(arr)
	Parameters
	arr: Integer[] - An array of integers to be packed

	Return Value
	Integer - The final product

	Constraints
	arr.length == 2k

	0 ≤ k ≤ 5

	-9 ≤ arr[i] ≤ 99

	Example
	For arr = [1, 2, 3, 4, 5, 6, 7, 8], the output should be 186.

	We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.

*/

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