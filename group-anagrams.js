/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    let ans = [];
    
    (strs || []).forEach((str) => {
        let temp = str.split("").sort().join("");
        if(!map[temp]){
            map[temp] = [];
        }
        map[temp].push(str);
    })
    
    Object.keys(map).forEach((key) => {
        ans.push(map[key]);
    })
    return ans;
};

let testCaseObj = {
    firstCase: ["eat","tea","tan","ate","nat","bat"],
    secondCase: [""],
    thirdCase: ["a"]
}

console.log(groupAnagrams(testCaseObj.firstCase));
console.log(groupAnagrams(testCaseObj.secondCase));
console.log(groupAnagrams(testCaseObj.thirdCase));