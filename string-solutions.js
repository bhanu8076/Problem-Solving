const firstNonRepeating = str => {
  const map = new Map();

  for (let ch of str) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  for (let ch of str) {
    if (map.get(ch) === 1) return ch;
  }

  return null;
};

console.log(firstNonRepeating("aabbcdde"));


const countVowels = str => {
  let count = 0;

  for (let ch of str) {
    if (
      ch === 'a' || ch === 'e' || ch === 'i' ||
      ch === 'o' || ch === 'u' ||
      ch === 'A' || ch === 'E' || ch === 'I' ||
      ch === 'O' || ch === 'U'
    ) {
      count++;
    }
  }

  return count;
};

console.log(countVowels("JavaScript"));


const reverseString = (str, i = str.length - 1) => {
  if (i < 0) return "";
  return str[i] + reverseString(str, i - 1);
};

console.log(reverseString("hello"));