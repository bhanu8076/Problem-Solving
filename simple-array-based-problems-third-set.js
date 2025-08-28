function hasZeroSumSubarray(arr) {
    const sumSet = new Set();

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum === 0 || sumSet.has(sum)) {
            return true;
        }

        sumSet.add(sum);
    }

    return false;
}

console.log(hasZeroSumSubarray([4, 2, -3, 1, 6]));


function lengthOfLIS(arr) {
    // Binary search approach
    const n = arr.length;
    const ans = [];

    // Initialize the answer array with the first element of arr
    ans.push(arr[0]);

    for (let i = 1; i < n; i++) {
        if (arr[i] > ans[ans.length - 1]) {
            // If the current number is greater than the last element 
            // of the answer array, it means we have found a 
            // longer increasing subsequence. Hence, we push the current number
            // to the answer array.
            ans.push(arr[i]);
            
        } else {
            // If the current number is not greater than the last element of
            // the answer array, we perform a binary search to find the smallest
            // element in the answer array that is greater than or equal to the
            // current number.

            // The indexOf function returns the first index at which the current
            // number can be inserted to maintain sorted order.
            const low = ans.findIndex((el) => el >= arr[i]);

            // We update the element at the found position with the current number.
            // By doing this, we are maintaining a sorted order in the answer array.
            ans[low] = arr[i];
        }
    }

    // The length of the answer array represents the length of the
    // longest increasing subsequence.
    return ans.length;
}

console.log("Length of LIS is " + lengthOfLIS([22, 9, 33, 21, 50, 41, 60]));


function maxSubarraySum(arr) {
  // Initialize two variables:
  // currentSum -> keeps track of the sum of the current subarray we’re evaluating
  // maxSum -> keeps track of the maximum sum we’ve found so far
  let currentSum = arr[0];
  let maxSum = arr[0];

  // Loop through the array starting from the 2nd element
  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];

    // At each step, decide:
    // 1. Either extend the current subarray by adding this number
    // 2. Or start a new subarray from this number
    currentSum = Math.max(num, currentSum + num);

    // Update maxSum if the currentSum is greater than what we’ve seen so far
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6 (subarray [4,-1,2,1])
