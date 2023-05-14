/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const stack = [-1];
    let max_len = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                max_len = Math.max(max_len, i - stack[stack.length - 1]);
            }
        }
    }

    return max_len;
};

const testCaseObj = {
    firstCase: "(()",
    secondCase: ")()())",
    thirdCase: ""
};

console.log(testCaseObj.firstCase);
// Explanation: The longest valid parentheses substring is "()".
console.log(testCaseObj.secondCase);
// Explanation: The longest valid parentheses substring is "()()".
console.log(testCaseObj.thisrdCase);