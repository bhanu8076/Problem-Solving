/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) {
        return '';
    }
    let prefix = strs[0];
    for(let i=1; i< strs.length; i++) {
        let j = 0;
        while(j <= strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }
        prefix = prefix.substring(0, j);
        if(prefix === '') break;
    }
    return prefix;
};

let input = {
    firstCase: ["flower","flow","flight"],   //output : "fl"
    secondCase: ["dog","racecar","car"]   //output : ""
}

console.log(longestCommonPrefix(input.firstCase));
console.log(longestCommonPrefix(input.secondCase));