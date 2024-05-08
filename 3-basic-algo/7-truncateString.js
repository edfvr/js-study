/**
 * Truncates a string if it is longer than the given maximum string length
 * @param {string} str The given string.
 * @param {number} num The max string length to keep.
 * @returns A truncated string with a `...` ending.
 */
const truncateString = (str, num) => {
    let bag = str.split("");

    if (str.length > num) {
        str = bag.splice(0, num)
        str = str.join("") + '...'
    }
    return str;
}

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));