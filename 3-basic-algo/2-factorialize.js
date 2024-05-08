/**
 * Calculates the factorial of a given number.
 * @param {number} num The given number.
 * @returns The factorial of the given number.
 */
const factorialize = (num) => {
    if (num < 1) {
        return 1;
    }
    return num * factorialize(num -1);
}

console.log(factorialize(4));