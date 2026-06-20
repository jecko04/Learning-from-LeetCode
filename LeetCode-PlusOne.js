/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {


    for (let i = 0; i < digits.length; i++) { 
        let newNum = digits.pop();
        if (digits[i] !== newNum) {
            newNum += 1;
            let newDigits = Array.from(String(newNum), Number);
            digits.push(...newDigits);
            return digits;    
        } else {
            let num2 = digits[i] = newNum += 1;
            newDigits = Array.from(String(num2), Number);
            digits.push(...newDigits);
            return digits;
        }
    }
    
};
console.log("this is [9,9]: " + plusOne([9,9]));
console.log("this is [9]: " + plusOne([9]));
console.log("this is [1,2,3]: " + plusOne([1,2,3]));