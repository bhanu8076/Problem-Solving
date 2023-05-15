/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let concat = (nums1.concat(nums2))
    concat.sort((a,b)=>a-b)
    if(concat.length%2!==0){
        let mid = Math.floor(concat.length / 2)
        return(concat[mid])
    }else{
        let mid2 = (concat[concat.length / 2] + concat[(concat.length / 2) - 1]) / 2
        return(mid2)
    }
};

const testCaseObj = {
    firstCase: {
        num1: [1,3],
        num2: [2]
    },
    secondCase: {
        num1: [1,2],
        num2: [3,4]
    }
}

console.log('Output :', {
    firstCase: findMedianSortedArrays(testCaseObj.firstCase.num1, testCaseObj.firstCase.num2),
    secondCase: findMedianSortedArrays(testCaseObj.secondCase.num1, testCaseObj.secondCase.num2)
});