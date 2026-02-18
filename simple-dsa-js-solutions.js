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
