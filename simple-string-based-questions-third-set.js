function toUpperCaseChar(char) {
  let code = char.charCodeAt(0);
  if (code >= 97 && code <= 122) {
    return String.fromCharCode(code - 32);
  }
  return char;
}

function toLowerCaseChar(char) {
  let code = char.charCodeAt(0);
  if (code >= 65 && code <= 90) {
    return String.fromCharCode(code + 32);
  }
  return char;
}

function toTitleCase(text) {
  let result = '';
  let capitalizeNext = true;

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char === ' ') {
      result += char;
      capitalizeNext = true;
    } else if (capitalizeNext) {
      result += toUpperCaseChar(char);
      capitalizeNext = false;
    } else {
      result += toLowerCaseChar(char);
    }
  }

  return result;
}

console.log("Title Case Example 1:", toTitleCase("hello world from javascript")); // "Hello World From Javascript"
console.log("Title Case Example 2:", toTitleCase("tHiS iS a TeST"));               // "This Is A Test"


function longestCommonPrefix(words) {
  if (words.length === 0) return "";

  let prefix = '';
  let index = 0;
  
  while (true) {
    let currentChar = null;

    for (let i = 0; i < words.length; i++) {
      if (index >= words[i].length) return prefix;

      let char = words[i][index];
      if (currentChar === null) {
        currentChar = char;
      } else if (currentChar !== char) {
        return prefix;
      }
    }

    prefix += currentChar;
    index++;
  }
}

console.log("Longest Prefix Example 1:", longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log("Longest Prefix Example 2:", longestCommonPrefix(["dog", "racecar", "car"]));     // ""

// Break a string into a char array — without confusion (no inbuilt split or spread)
function toCharArray(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result[result.length] = str[i];
  }
  return result;
}

// === Example usage for Char Array ===
console.log("Char Array Example 1:", toCharArray("hello")); // ['h', 'e', 'l', 'l', 'o']
console.log("Char Array Example 2:", toCharArray("JS123")); // ['J', 'S', '1', '2', '3']

