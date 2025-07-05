function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Example
console.log(reverseString("hello")); // "olleh"

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

function removeDuplicates(str) {
  let seen = {};
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!seen[char]) {
      seen[char] = true;
      result += char;
    }
  }
  return result;
}

// Example
console.log(removeDuplicates("banana")); // "ban"

function firstNonRepeatingChar(str) {
  let countMap = {};

  // First pass: count characters
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    countMap[char] = (countMap[char] || 0) + 1;
  }

  // Second pass: find first unique
  for (let i = 0; i < str.length; i++) {
    if (countMap[str[i]] === 1) {
      return str[i];
    }
  }

  return null; // No non-repeating character
}

console.log(firstNonRepeatingChar("swiss")); // "w"

function countCharacters(str) {
  let countMap = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    countMap[char] = (countMap[char] || 0) + 1;
  }

  return countMap;
}

// Example
console.log(countCharacters("hello"));
// { h: 1, e: 1, l: 2, o: 1 }