/**
 * factorialize finds the factorial of a number
 * @param {number} num 
 * @returns factorial of a number
 */
const factorialize = (num) => {
    if (num < 1) {
        return 1;
    }
    return num * factorialize(num -1);
}

console.log(factorialize(4));