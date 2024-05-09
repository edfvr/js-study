/**
 * Sorts an array in ascending order and returns the index where 'num' should be inserted.
 * @param {Array} arr An array of numbers.
 * @param {number} num The number to insert into the array.
 * @returns The index were the number should be inserted.
 */
function getIndexToIns(arr, num) {
    let index = 0;
    arr.sort((a, b) => (a - b));

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < num) {
            index = i + 1;
            break;
        }
    }
    return index;
}
console.log(getIndexToIns([2, 5, 10], 15));