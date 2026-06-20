/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    let k = 0;
    // const target = nums.indexOf(val);


    for (let i = 0; i < nums.length; i++) {
        // const index = nums.indexOf(nums[i]);
        // const index2 = nums.indexOf();
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
        // console.log("This is index: " + index);
        // console.log("This is index2: " + nums[i]);
    } 
    
    // console.log("This is target index: " + target);
    return k;
};

console.log(removeElement([3,2,2,3], 3));