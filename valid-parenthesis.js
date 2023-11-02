function checkLongestValidParenthesis(str) {
    const parenthesisObj = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };

    const stack = [];

    for(const s of str) {
        if (parenthesisObj[s]) {
            stack.push(s);
        } else {
            const validParenthesisChar = stack.pop();
            if(validParenthesisChar !== parenthesisObj[s]) {
                return false;
            } 
        }
    }
}

// Test the function
console.log(isValidParentheses("()"));
console.log(isValidParentheses("()[]{}"));
console.log(isValidParentheses("(]"));
console.log(isValidParentheses("([)]"));
console.log(isValidParentheses("{[]}"));