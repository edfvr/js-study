/**
 * repeatStringNumTimes Repeats a given string for a specified number of times
 * @param {string} str Given string
 * @param {number} num number of times string is repeated
 * @returns repeated string or
 *          an empty string if number of times is less than 1
 */
const repeatStringNumTimes = (str, num) => {
    if (num < 1) return "";
    else return str + repeatStringNumTimes(str, num - 1);
}

console.log(repeatStringNumTimes("abc", 3))