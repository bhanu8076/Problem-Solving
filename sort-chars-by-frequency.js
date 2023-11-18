var frequencySort = function (s) {
    const frequency = {};
    for (let char of s) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }
    const charFreqArray = [];
    let charKeys = Object.keys(frequency);

    for (let i = 0; i < charKeys.length; i++) {
        charFreqArray.push({
            char: charKeys[i],
            count: frequency[charKeys[i]]
        });
    }

    charFreqArray.sort((a, b) => b.count - a.count);

    const sortedString = charFreqArray.map(item => item.char.repeat(item.count)).join('');

    return sortedString;
};

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const frequency = {};
    for (let char of s) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }
    const charFreqArray = [];
    let charKeys = Object.keys(frequency);

    for (let i = 0; i < charKeys.length; i++) {
        charFreqArray.push({
            char: charKeys[i],
            count: frequency[charKeys[i]]
        });
    }

    charFreqArray.sort((a, b) => b.count - a.count);

    const sortedString = charFreqArray.map(item => item.char.repeat(item.count)).join('');

    return sortedString;
};

console.log(frequencySort("tree"));
console.log(frequencySort("cccaaa"));
console.log(frequencySort("Aabb"));