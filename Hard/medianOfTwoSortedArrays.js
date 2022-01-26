/*
    Given two sorted arrays nums1 and nums2 of size m and n respectively, 
    return the median of the two sorted arrays.

    The overall run time complexity should be O(log (m+n)).

    Example 1
    Input: nums1 = [1,3], nums2 = [2]
    Output: 2.00000
    Explanation: merged array = [1,2,3] and median is 2.

    Example 2
    Input: nums1 = [1,2], nums2 = [3,4]
    Output: 2.50000
    Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/

const findMedianSortedArrays = (nums1, nums2) => {
    // MERGE THE TWO ARRAYS
    let all = [...nums1,...nums2];
    
    // SORT THE MERGED ARRAY
    all.sort((a,b) => a - b);
    
    let targ = all.length / 2;
    let median = null;
    if((all.length % 2) == 0 ){
        median = (all[ targ ] + all[ targ - 1 ]) / 2;
    } else{
        median = all[Math.floor(targ)];
    }
    
    return median;
}

console.log(findMedianSortedArrays([1,2],[3,2]));