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