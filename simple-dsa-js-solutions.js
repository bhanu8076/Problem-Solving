const binarySearch = (arr, target, left = 0, right = arr.length - 1) => {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;
  if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid - 1);
  }
  return binarySearch(arr, target, mid + 1, right);
};

console.log(binarySearch([1,2,3,4,5], 4));


const twoSum = (arr, target) => {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];

    if (map[diff] !== undefined) {
      return [map[diff], i];
    }

    map[arr[i]] = i;
  }

  return [];
};

console.log(twoSum([2,7,11,15], 9));


const isBalanced = str => {
  const stack = [];
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let ch of str) {
    if (['(', '{', '['].includes(ch)) {
      stack.push(ch);
    } else {
      if (stack.pop() !== pairs[ch]) return false;
    }
  }

  return stack.length === 0;
};

console.log(isBalanced("{[()]}"));


const mergeSorted = (a, b) => {
  let i = 0, j = 0;
  const result = [];

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      result.push(a[i++]);
    } else {
      result.push(b[j++]);
    }
  }

  while (i < a.length) result.push(a[i++]);
  while (j < b.length) result.push(b[j++]);

  return result;
};

console.log(mergeSorted([1,3,5], [2,4,6]));

// kth largest using quickselect

function findKthLargest(nums, k) {
  // kth largest = (n - k)th smallest in sorted order
  const targetIndex = nums.length - k;

  // Quickselect function
  function quickSelect(left, right) {

    // Choose a pivot (here we pick the rightmost element)
    const pivot = nums[right];

    // Partition the array:
    //    All numbers < pivot go to left side
    //    All numbers >= pivot go to right side
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
      if (nums[i] < pivot) {
        // Swap nums[i] with nums[partitionIndex]
        [nums[i], nums[partitionIndex]] =
          [nums[partitionIndex], nums[i]];

        partitionIndex++;
      }
    }

    // Place pivot in its correct sorted position
    [nums[partitionIndex], nums[right]] =
      [nums[right], nums[partitionIndex]];

    // Now check:
    // If pivot index == target index → we found kth largest
    if (partitionIndex === targetIndex) {
      return nums[partitionIndex];
    }

    // If pivot index < target → search right half
    else if (partitionIndex < targetIndex) {
      return quickSelect(partitionIndex + 1, right);
    }

    // If pivot index > target → search left half
    else {
      return quickSelect(left, partitionIndex - 1);
    }
  }

  return quickSelect(0, nums.length - 1);
}

// rotate an array by k position
function rotate(nums, k) {
  const n = nums.length;
  k = k % n; // handle k > n

  function reverse(arr, left, right) {
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  // Step 1: reverse whole array
  reverse(nums, 0, n - 1);

  // Step 2: reverse first k elements
  reverse(nums, 0, k - 1);

  // Step 3: reverse remaining
  reverse(nums, k, n - 1);

  return nums;
}

// left rotation
k = k % n;
reverse(nums, 0, n - 1);
reverse(nums, 0, n - k - 1);
reverse(nums, n - k, n - 1);

// reverse an array with recursion

function reverseArray(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr;

  // Swap elements
  [arr[left], arr[right]] = [arr[right], arr[left]];

  // Recursive call
  return reverseArray(arr, left + 1, right - 1);
}

const nums = [1, 2, 3, 4, 5];
console.log(reverseArray(nums));
// [5, 4, 3, 2, 1]