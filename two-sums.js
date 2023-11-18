/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsMap = {};
    for (let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];
        if(numsMap[compliment] !== undefined) {
            return [numsMap[compliment], i];
        }
        numsMap[nums[i]] = i;
    }
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));