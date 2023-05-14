/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function binarySearch(nums, key, findMax) {
    let keyIndex = -1;

  let left = 0;

  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2);

    if (key > nums[middle]) {
      left = middle + 1;
    } else if (key < nums[middle]) {
      right = middle - 1;
    } else {
      // equal
      keyIndex = middle;

      if (findMax) {
        // true mean we are looking for max
        left = middle + 1;
      } else {
        // mean looking for min
        right = middle - 1;
      }
    }
  }
  return keyIndex;

}

var searchRange = function(nums, target) {
    let minIndex = binarySearch(nums, target, false);

  if (minIndex !== -1) {
    let maxIndex = binarySearch(nums, target, true);
    return [minIndex, maxIndex];
  }

  return [-1, -1];
};

const testCaseObj = {
    firstCase: {
        nums: [5,7,7,8,8,10],
        target: 8
    },
    secondCase: {
        nums: [5,7,7,8,8,10],
        target: 6
    },
    thirdCase: {
        nums: [],
        target: 0
    }
}
console.log(searchRange(testCaseObj.firstCase.nums, testCaseObj.firstCase.target));
console.log(searchRange(testCaseObj.secondCase.nums, testCaseObj.secondCase.target));
console.log(searchRange(testCaseObj.thirdCase.nums, testCaseObj.thirdCase.target));