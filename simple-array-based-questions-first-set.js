function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr;
}

// Test Case
console.log(reverseArrayInPlace([1, 2, 3, 4, 5])); 
// Output: [5, 4, 3, 2, 1]

function findMinMax(arr) {
  if (arr.length === 0) return null;

  let result = { min: arr[0], max: arr[0] };

  for (let i = 1; i < arr.length; i++) {
    let { min, max } = result;

    result = {
      min: arr[i] < min ? arr[i] : min,
      max: arr[i] > max ? arr[i] : max
    };
  }

  return result;
}

// Test Case
console.log(findMinMax([3, 7, 1, 9, -2, 5]));
// Output: { min: -2, max: 9 }

function hasDuplicates(arr) {
  let tracker = {};

  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];

    if (tracker[key] === true) {
      return true;
    }

    tracker[key] = true;
  }

  return false;
}

// Test Cases
console.log(hasDuplicates([1, 2, 3, 4]));       // Output: false
console.log(hasDuplicates([1, 2, 3, 2, 5]));    // Output: true

function removeDuplicates(arr) {
  let tracker = {};      // acts like a hash map
  let unique = [];       // final result array
  let uniqueIndex = 0;   // manual index for unique array

  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];

    // If key hasn't been seen yet
    if (tracker[key] !== true) {
      tracker[key] = true;               // Mark as seen
      unique[uniqueIndex] = arr[i];      // Add to result array
      uniqueIndex++;                     // Increment result index
    }
  }

  return unique;
}

// Test Cases
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
// Output: [1, 2, 3, 4, 5]

console.log(removeDuplicates(['a', 'b', 'a', 'c'])); 
// Output: ['a', 'b', 'c']

function findMissingNumber(arr, N) {
  let total = (N * (N + 1)) / 2;

  for (let i = 0; i < arr.length; i++) {
    total -= arr[i];
  }

  return total;
}

// Test Case 1
console.log(findMissingNumber([1, 2, 4, 5], 5)); 
// Output: 3

// Test Case 2
console.log(findMissingNumber([2, 3, 1, 5], 5)); 
// Output: 4

function findManyMissingNumbers(arr, N) {
  let seen = [];

  for (let i = 0; i < arr.length; i++) {
    seen[arr[i]] = true;
  }

  let missing = [];

  for (let i = 1; i <= N; i++) {
    if (!seen[i]) {
      missing[missing.length] = i;
    }
  }

  return missing;
}

// Test Case 1
console.log(findManyMissingNumbers([1, 2, 4, 6], 6));
// Output: [3, 5]

// Test Case 2
console.log(findManyMissingNumbers([2, 3, 7, 1, 9], 10));
// Output: [4, 5, 6, 8, 10]