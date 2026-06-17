/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    const arr = [];

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const next = nums[i + 1];

        // console.log("this is current: " + current );
        // console.log("this is next: " + next );

        if (current !== next) {
            arr.push(current);
            // console.log("this is arr stack: " + arr);
        }
    }
    // console.log("this is arr: " + arr);
    return arr.length;

};

console.log(removeDuplicates([1,1,3,2,3]));