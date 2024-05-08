/**
 * Checks for the first element of an array that passes the 'truth test'.
 * @param {object} arr An array of numbers.
 * @param {func} func A function that checks for even numbers.
 * @returns The first element in the array that passes a 'truth test' or
 *          undefined if no element passes the test.
 */
function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) return arr[i];
    }
    return undefined;
}
console.log(findElement([1, 2, 3, 4], function(num) { return num % 2 === 0; }));