//Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.
const arr = [2, 4, 5, 1, 7, 5, 2, 1];

const newArr = arr.splice(1, 3);
console.log(newArr);


//We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//