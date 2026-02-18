// Flatten an array

function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let flat = flattenArray(arr[i]);
      for (let j = 0; j < flat.length; j++) {
        result.push(flat[j]);
      }
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

// Example
console.log(flattenArray([1, [2, [3, 4]], 5]));

// Remove duplicates using object

function removeDuplicates(arr) {
  let seen = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

// kth largest element in an array

function kthLargest(arr, k) {
  var obj = {};

  // store numbers as keys (removes duplicates automatically)
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }

  // extract keys into array
  var nums = [];
  for (var key in obj) {
    nums.push(Number(key));
  }

  // sort descending
  nums.sort(function(a, b) {
    return b - a;
  });

  return nums[k - 1];
}

// Example
console.log(kthLargest([10, 5, 20, 8, 15, 20], 2));


// count frequency

function countFrequency(arr) {
  var freq = {};

  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];

    if (freq[val]) {
      freq[val]++;
    } else {
      freq[val] = 1;
    }
  }

  return freq;
}

// Example
console.log(countFrequency(['a','b','a','c','b','a']));

// Basic array equality check

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

// Example
console.log(arraysEqual([1,2,3], [1,2,3])); // true
console.log(arraysEqual([1,2,3], [3,2,1])); // false

// O(n) Intersection

function intersection(arr1, arr2) {
  var lookup = {};
  var result = [];

  // store arr1 elements
  for (var i = 0; i < arr1.length; i++) {
    lookup[arr1[i]] = true;
  }

  // check arr2 elements
  for (var j = 0; j < arr2.length; j++) {
    if (lookup[arr2[j]]) {
      result.push(arr2[j]);
      lookup[arr2[j]] = false; // avoid duplicates
    }
  }

  return result;
}

console.log(intersection([1,2,3,4], [3,4,4,5]));


// Chunk array

function chunk(arr, size) {
  var result = [];
  var temp = [];

  for (var i = 0; i < arr.length; i++) {
    temp.push(arr[i]);

    if (temp.length === size) {
      result.push(temp);
      temp = [];
    }
  }

  // leftover elements
  if (temp.length > 0) {
    result.push(temp);
  }

  return result;
}

console.log(chunk([1,2,3,4,5], 2));


// find missing
function findMissing(arr, n) {
  var seen = {};

  // mark numbers present
  for (var i = 0; i < arr.length; i++) {
    seen[arr[i]] = true;
  }

  // check which number missing
  for (var j = 1; j <= n; j++) {
    if (!seen[j]) {
      return j;
    }
  }
}

console.log(findMissing([1,2,4,5], 5));

