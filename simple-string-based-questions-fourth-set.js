function toAcronym(sentence) {
  let acronym = "";
  let atWordStart = true;

  for (let i = 0; i < sentence.length; i++) {
    let ch = sentence[i];

    if (ch === ' ') {
      atWordStart = true;
    } else if (atWordStart) {
      if (ch >= 'a' && ch <= 'z') {
        acronym += String.fromCharCode(ch.charCodeAt(0) - 32);
      } else {
        acronym += ch;
      }
      atWordStart = false;
    }
  }

  return acronym;
}

let sample1 = "make things happen";
console.log("\nSample Input 1:", sample1);
console.log("Acronym:", toAcronym(sample1));
// Output: "MTH"

function countWords(str) {
  let count = 0;
  let inWord = false;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char !== ' ' && char !== '\t' && char !== '\n') {
      if (!inWord) {
        count++;
        inWord = true;
      }
    } else {
      inWord = false;
    }
  }

  return count;
}

let text = "  Find the shortest word in this sentence! ";

console.log("Word Count:", countWords(text)); 
// Output: 7

function shortestWord(sentence) {
  let minWord = "";
  let currentWord = "";

  for (let i = 0; i <= sentence.length; i++) {
    let ch = sentence[i];

    if (ch !== ' ' && ch !== undefined) {
      currentWord += ch;
    } else {
      if (currentWord.length > 0) {
        if (minWord === "" || currentWord.length < minWord.length) {
          minWord = currentWord;
        }
        currentWord = "";
      }
    }
  }

  return minWord;
}

console.log("Shortest Word:", shortestWord(text)); 
// Output: "in"

function longestPalindrome(s) {
    if (s.length < 1) return "";

    let start = 0, end = 0;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(i, i);       // Odd-length palindrome
        const len2 = expandAroundCenter(i, i + 1);   // Even-length palindrome
        const len = Math.max(len1, len2);

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.slice(start, end + 1);
}

console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // Output: "bb"