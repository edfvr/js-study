/**
 * largestOfFour returns an array consisting of the largest number from each provided sub-array
 * @param {object} arr 
 * @returns an array consisting of the largest number from each provided sub-array
 */
function largestOfFour(arr) {
    bigs = [];

    for (let i = 0; i < arr.length; i++) {
        let largest = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > largest) {
                largest = arr[i][j];
            }
        }
        bigs.push(largest);
    }
    return bigs;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));