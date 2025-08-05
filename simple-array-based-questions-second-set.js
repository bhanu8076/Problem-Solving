function moveZerosToEnd(arr) {
  let insertPos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[insertPos] = arr[i];
      insertPos++;
    }
  }

  while (insertPos < arr.length) {
    arr[insertPos] = 0;
    insertPos++;
  }

  return arr;
}

// Test
console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]

function rotateArray(arr, k, direction = 'right') {
  let n = arr.length;
  k = k % n;

  let result = new Array(n); // create result array

  for (let i = 0; i < n; i++) {
    let newIndex;
    
    if (direction === 'left') {
      newIndex = (i - k + n) % n; // shift left
    } else {
      newIndex = (i + k) % n; // shift right
    }

    result[newIndex] = arr[i];
  }

  // Copy back to original array if in-place update is needed
  for (let i = 0; i < n; i++) {
    arr[i] = result[i];
  }

  return arr;
}

// Test
console.log(rotateArray([1, 2, 3, 4, 5], 2, 'left'));  // Output: [3, 4, 5, 1, 2]
console.log(rotateArray([1, 2, 3, 4, 5], 2, 'right')); // Output: [4, 5, 1, 2, 3]


function merge(arr1, arr2, n, m) {
    let i = 0;

    while (i < n) {
        if (arr1[i] > arr2[0]) {
            [arr1[i], arr2[0]] = [arr2[0], arr1[i]];

            fixArray2(arr2, m);
        }
        i++;
    }
}

function fixArray2(arr2, m) {
    for (let i = 1; i < m; i++) {
        if (arr2[i] < arr2[i - 1]) {
            [arr2[i], arr2[i - 1]] = [arr2[i - 1], arr2[i]];
        } else {
            break;
        }
    }
}

let arr1 = [1, 4, 7, 8, 10];
let arr2 = [2, 3, 9];

merge(arr1, arr2, arr1.length, arr2.length);

console.log("arr1:", arr1); // [1, 2, 3, 4, 7]
console.log("arr2:", arr2); // [8, 9, 10]

function intersection(arr1, arr2) {
  var map = {};      // Manual hashmap
  var result = [];

  // Build frequency map for arr1
  for (var i = 0; i < arr1.length; i++) {
    var num = arr1[i];
    map[num] = 1; // Use 1 to indicate presence
  }

  for (var j = 0; j < arr2.length; j++) {
    var num2 = arr2[j];

    // If found in map and not yet added to result
    if (map[num2] === 1) {
      result[result.length] = num2;
      map[num2] = 0; // Mark as added to avoid duplicates
    }
  }

  return result;
}

// Example
console.log(intersection([1, 2, 2, 3], [2, 2, 4])); // Output: [2]s
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

function sort012(arr) {
  var low = 0, mid = 0;
  var high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      var temp = arr[low];
      arr[low] = arr[mid];
      arr[mid] = temp;
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      var temp = arr[mid];
      arr[mid] = arr[high];
      arr[high] = temp;
      high--;
    }
  }

  return arr;
}

// Example
console.log(sort012([0, 1, 2, 0, 1, 2]));   // [0, 0, 1, 1, 2, 2]
console.log(sort012([2, 2, 1, 1, 0, 0]));   // [0, 0, 1, 1, 2, 2]
console.log(sort012([0, 0, 0]));            // [0, 0, 0]

function findSubarraysWithSum(arr, target) {
  var prefixSum = 0;
  var map = {}; // Map from sum to index list
  var result = [];

  map[0] = [-1]; // Base case: sum 0 at index -1

  for (var i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    var needed = prefixSum - target;

    if (map[needed]) {
      for (var j = 0; j < map[needed].length; j++) {
        // Manually build subarray from map[needed][j]+1 to i
        var start = map[needed][j] + 1;
        var temp = [];
        for (var k = start; k <= i; k++) {
          temp[temp.length] = arr[k];
        }
        result[result.length] = temp;
      }
    }

    // Add current prefixSum to map
    if (!map[prefixSum]) {
      map[prefixSum] = [i];
    } else {
      map[prefixSum][map[prefixSum].length] = i;
    }
  }

  return result;
}

// Example
console.log(findSubarraysWithSum([1, 2, 3, 4, 2], 6)); 
// Output: [[2, 4], [1, 2, 3]]
console.log(findSubarraysWithSum([1, 1, 1], 2));       
// [[1, 1], [1, 1]]
console.log(findSubarraysWithSum([3, 4, 7, 2, -3, 1, 4, 2], 7)); 
// Will not return correct result due to negative numbers