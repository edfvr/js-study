/**
 * Converts all the first letters of words in a string to uppercase and the rest of the word to lowercase.
 * @param {string} str The given string.
 * @returns A string with all first letters capitalized and the rest of the word in lowercase.
 */
function titleCase(str) {
    let bag = str.split(" ");
    let newStr = [];

    for (let word in bag) {
        newStr[word] = bag[word][0].toUpperCase() + bag[word].slice(1).toLowerCase();
    }
    return newStr.join(" ");
}
console.log(titleCase("sHoRt AnD sToUt"));