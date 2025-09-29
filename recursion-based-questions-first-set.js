function solveNQueens(n) {
    const results = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));
    const cols = new Set();
    const diag1 = new Set(); // row - col
    const diag2 = new Set(); // row + col

    function backtrack(row) {
        if (row === n) {
            // Convert board to array of strings
            results.push(board.map(r => r.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;
            // Place queen
            board[row][col] = 'Q';
            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);

            backtrack(row + 1);

            // Remove queen
            board[row][col] = '.';
            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    }

    backtrack(0);
    return results;
}

// ----------- Test Cases -----------
console.log(solveNQueens(4));
/*
Output:
[
  [".Q..","...Q","Q...","..Q."],
  ["..Q.","Q...","...Q",".Q.."]
]
*/

console.log(solveNQueens(1));
// Output: [["Q"]]


function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);  // for O(1) lookups
  const memo = {};

  function canBreak(start) {
    // If we reached the end, return true
    if (start === s.length) return true;

    // If already computed, return from memo
    if (start in memo) return memo[start];

    // Try every possible substring starting from "start"
    for (let end = start + 1; end <= s.length; end++) {
      const prefix = s.slice(start, end);

      if (wordSet.has(prefix) && canBreak(end)) {
        memo[start] = true;
        return true;
      }
    }

    memo[start] = false;
    return false;
  }

  return canBreak(0);
}

console.log(wordBreak("leetcode", ["leet", "code"])); 
// true

console.log(wordBreak("applepenapple", ["apple", "pen"])); 
// true

console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); 
// false

function generateParenthesis(n) {
  const result = [];

  function backtrack(current, open, close) {
    // Base case: valid string completed
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    // Place "(" if we still can
    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }

    // Place ")" if valid (cannot close more than opened)
    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
  }

  backtrack("", 0, 0); // start with empty string and no brackets
  return result;
}

console.log(generateParenthesis(1));
// ["()"]

console.log(generateParenthesis(2));
// ["(())", "()()"]

console.log(generateParenthesis(3));
// ["((()))", "(()())", "(())()", "()(())", "()()()"]
