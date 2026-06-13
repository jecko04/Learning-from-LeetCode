/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString();

    let left = 0; // start from left to right galing sa x
    let right = str.length - 1; // start from right to left

    while (left < right) {
        if (str[left] !== str[right]) {  // condition kapag string left ay di match sa string right = false
            return false;
        }

        left++; // index na from left always add 1
        right--; // index na from right always minus 1
    }

    return true;
};

console.log(isPalindrome("121"));