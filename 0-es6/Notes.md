# Notes on ES6
variables declared with `var` are global.
variables declared with `let` inside a block are limited to that scope.

Objects (including arrays and functions) assigned to a variable `const` can be still changed. `const` only prevents reassignment.

To prevent mutation use `Object.freeze()`

Arrow functions

## Default parameters
Use default parameters in case no argument is passed.

## Rest parameter
Used to create functions that can take a variable number of arguments.

## Spread
Use the spread operator to expnad arrays. allows us to quickly copy all or part of an existing array or object into another array or object without explicitly iterating through them.

## Destructuring assignment
For assigning values from an object.

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables

## Temperate literals

`<script type="module" src="filename.js"></script>`
module means he js script can be imported and exported

## JS promises
A promise has three states: pending, fulfilled, and rejected. resolve is used when you want your promise to succeed, and reject is used when you want it to fail.
Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request.