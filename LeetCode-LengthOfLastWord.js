/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    const word = s.trim().split(" ");
    for (let i = 0; i < word.length; i++) {
        console.log("this is for i loop: " + word.length);
        // console.log("this is length: " + word[i].length);
    }
};

console.log(lengthOfLastWord(" Hello World Ph "));