/**const findLongestWordLength = (str) => {
    let bag = str.split(" ");
    let longestLength = 0;
    for (let i = 0; i < bag.length; i++) {
        if (bag[i].length > longestLength) {
            longestLength = bag[i].length;
        }
    }
    return longestLength;
}*/

/**
 * findLongestWordLength returns the length of the longest word in a string
 * @param {string} str 
 * @returns the length of longest word in a string
 */
function findLongestWordLength (str) {
    let bag = str.split(" ");
    let longestWord = ""
    for (let i = 0; i < bag.length; i++) {
        if (bag[i].length > longestWord.length) {
            longestWord = bag[i]; 
        }
    }
    str = longestWord;
    console.log(`The longest word is "${str}" of length ${str.length}`);
    return str.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));