/*Objects (including arrays and functions) assigned to a variable `const` can be still changed. `const` only prevents reassignment.*/

const arr = [1, 2, 3];
/*arr = [5, 6, 7];*/
arr[2] = 8;
console.log(arr);

/*To prevent mutation use `Object.freeze()` */
let obj = {
    name: "Triple H",
    move: "Pedigree"
};
Object.freeze(obj);
obj.move = "RKO";
obj.newProp = "testing";
console.log(obj)

/*Arrow functions*/
const myFunc = () => {
    console.log("sth");
}
myFunc()