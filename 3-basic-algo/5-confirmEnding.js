/**
 * confirmEnding checks if a string ends with the target string
 * @param {string} str the main string
 * @param {string} target the target string
 * @returns true if string ends with the target string 
 *          else false
 */
const confirmEnding = (str, target) => {
    if (str.slice(str.length - target.length) === target) return true
    else return false
}

console.log((confirmEnding("Open sesame", "same")));