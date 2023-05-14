/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === '' || needle === haystack) return 0;
    if (haystack.length < needle.length) return -1;

    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack[i] === needle[0]) {
            for (let j = 0; j < needle.length; j++) {
                if (needle[j] !== haystack[i + j]) {
                    break;
                } else if (j === needle.length - 1) {
                    return i;
                }
            }
        }
    }

    return -1;
};

const testCaseObj = {
    firstCase: {
        haystack: 'sadbutsad',
        needle: 'sad'
    },
    secondCase: {
        haystack: 'leetcode',
        needle: 'leeto'
    }
}

console.log(strStr(testCaseObj.firstCase.haystack, testCaseObj.firstCase.needle));
// Explanation: "sad" occurs at index 0 and 6. The first occurrence is at index 0, so we return 0.
console.log(strStr(testCaseObj.secondCase.haystack, testCaseObj.secondCase.needle));
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
