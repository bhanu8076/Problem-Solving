function reverseWords(sentence) {
  let words = [];
  let word = '';

  for (let i = 0; i <= sentence.length; i++) {
    let char = sentence[i] || ' ';
    if (char === ' ') {
      if (word.length > 0) {
        words.unshift(word);
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

function runLengthEncode(str) {
  if (str.length === 0) return "";

  let result = '';
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  }

  return result;
}

// Example
console.log(runLengthEncode("aaabbcaaa")); // Output: a3b2c1a3

function mostFrequentChar(str) {
  const freq = {};

  for (const ch of str) {
    if (ch !== ' ') {
      freq[ch] = (freq[ch] || 0) + 1;
    }
  }

  let maxChar = '';
  let maxCount = 0;

  for (const ch in freq) {
    if (freq[ch] > maxCount) {
      maxChar = ch;
      maxCount = freq[ch];
    }
  }

  return maxChar;
}

// Example
console.log(mostFrequentChar("abracadabra")); // Output: a

function listAllSubstrings(str) {
  const substrings = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrings.push(str.slice(i, j));
    }
  }

  return substrings;
}

// Example
console.log(listAllSubstrings("abc"));
// Output: ['a', 'ab', 'abc', 'b', 'bc', 'c']

function isRotation(str1, str2) {
  // Strings must be of equal length and not empty
  if (str1.length !== str2.length || str1.length === 0) return false;

  // Concatenate str1 with itself, then check if str2 is a substring
  return (str1 + str1).includes(str2);
}

// Example
console.log(isRotation("waterbottle", "erbottlewat")); // Output: true
