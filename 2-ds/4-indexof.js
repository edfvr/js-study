//We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.
const quickCheck = (arr, elem) => {
    if (arr.indexOf(elem) >= 0) {
        return (true);
    } else {
        return (false);
    }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));