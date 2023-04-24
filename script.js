console.log(`----------------
Question 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
----------------`);
//initializing the array scoped to the block level with let
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages);

console.log(`----------------
1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
    •	Do not use numbers to reference the last element, find it programmatically, 
    •	ages[7] – ages[0] is not allowed!
----------------`);

//uses the length attribute to programtically get the last index
console.log(ages[ages.length -1] - ages[0]);
