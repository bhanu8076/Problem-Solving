function reverseWords(sentence) {
  let words = [];
  let word = '';

  for (let i = 0; i <= sentence.length; i++) {
    let char = sentence[i] || ' ';
    if (char === ' ') {
      if (word.length > 0) {
        words.unshift(word); // Add to front
        word = '';
      }
    } else {
      word += char;
    }
  }

  return words.join(' ');
}

// Example
console.log(reverseWords("hello world today")); // "today world hello"

function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  let count = {};

  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

// Example
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("apple", "pale"));    // 

function longestUniqueSubstring(str) {
  let seen = {};
  let start = 0, maxLength = 0;

  for (let end = 0; end < str.length; end++) {
    let char = str[end];
    if (seen[char] >= start) {
      start = seen[char] + 1;
    }
    seen[char] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example
console.log(longestUniqueSubstring("abcabcbb")); // 3 ("abc")
