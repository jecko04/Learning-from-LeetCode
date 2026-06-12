/**
 * @param {string} s
 * @return {number}
 */


let romanToInt = function(s) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const current = values[s[i]];
        const next = values[s[i + 1]];

        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }
    return total;

};

console.log(romanToInt("MCMXCIV"));

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.