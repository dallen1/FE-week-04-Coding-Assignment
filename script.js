console.log(`----------------
Question 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
----------------`);

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages);

console.log(`----------------
1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
    •	Do not use numbers to reference the last element, find it programmatically, 
    •	ages[7] – ages[0] is not allowed!
----------------`);

console.log(ages[ages.length -1] - ages[0]);