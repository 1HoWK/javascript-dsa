/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // O(n * m)
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        // break down the pieces
        if (haystack.substring(i, i + needle.length) === needle) { // beware of end index
        // if (haystack.substr(i, needle.length) === needle) {
            return i;
        }
    }
    return -1;

    // brute force n*m

    // javascript cheatcode
    // return haystack.indexOf(needle);
};