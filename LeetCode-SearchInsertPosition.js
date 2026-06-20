/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target) {
            k++;
            if (nums[i] === target) {
                const index = nums.indexOf(target);
                return index;
            }
        }
    }
    return k;

};

console.log(searchInsert([1,2,3,4,6,7,8], 10));