/**
 * Checks if a string ends with the target string.
 * @param {string} str The string possibly containing the target string
 * @param {string} target The string to be matched with the main string.
 * @returns True if string ends with the target string 
 *          else false.
 */
const confirmEnding = (str, target) => {
    if (str.slice(str.length - target.length) === target) return true
    else return false
}

console.log((confirmEnding("Open sesame", "same")));