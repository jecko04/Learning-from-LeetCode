/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        // console.log(digits[i]);

        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
        digits.unshift(1);

    return digits;
};
console.log("longer arr: " + plusOne([5,3,7,3,5,6,3,4,7,0,7,2,1,6,8,4,0,4,1,8,5,3,6,4,1,8,5,9,2,6]));
console.log("this is [5,9,9,9]: " + plusOne([8,9,9,9]));
console.log("this is [5,4,3]: " + plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
console.log("this is [9,9]: " + plusOne([9,9]));
console.log("this is [9]: " + plusOne([9]));
console.log("this is [1,2,3]: " + plusOne([1,2,3]));