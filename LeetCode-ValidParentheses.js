/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const openingBrackets = ['(', '[', '{']; // 0, 1, 2
    const closingBrackets = [')', ']', '}']; // 0, 1, 2

    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        const index = openingBrackets.indexOf(current); 
        const index2 = closingBrackets.indexOf(current); 

        console.log(index);
        if (openingBrackets[index] === current) {
            stack.push(current);
        } else {
            const last = stack.pop();
            if (current === closingBrackets[index2] && last !== openingBrackets[index2] ) {
                return false
            }            
        }
    }

    return stack.length === 0;
};

// console.log(isValid('[[}'));
console.log(isValid('[]{}()'));
// console.log(isValid('([])'));
// console.log(isValid('[({)}]'));
// console.log(isValid('][{()'));