/**
 * Reverses a string.
 * @param {string} str The string to be reversed.
 * @returns A reversed string.
 */
function reverseString(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseString("hello"));