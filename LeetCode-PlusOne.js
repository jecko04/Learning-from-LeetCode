/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let newNum = digits.pop();
    newNum += 1;
    for (let i = 0; i < digits.length; i++) { 
        let newDigits = Array.from(String(newNum), Number);
        digits.push(...newDigits);
        return digits;
    }
};

console.log(plusOne([9]));
// console.log(plusOne([1,2,3]));