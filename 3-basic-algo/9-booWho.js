/**
 * Checks if a value is classified as a boolean primitive.
 * @param {boolean} bool The value to be checked.
 * @returns True is value is a boolean primitive
 *          else false.
 */
function booWho(bool) {
    return typeof bool === "boolean";
}

console.log(booWho(null));