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

console.log(`----------------
1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
----------------`);

//using the push method to append an index with a value to the ages array
ages.push(33);
console.log(ages[ages.length -1] - ages[0]);

console.log(`----------------
1c.	Use a loop to iterate through the array and calculate the average age. 
----------------`);
//initialize vars for averaging ages
let sum = 0;
let avg = 0;
//for loop to go through all elements of the array
for (let i=0;i<ages.length;i++) {
    //summing the ages
    console.log("Age tally: " + (sum += ages[i]));      
}
//calculate the avg
avg = sum / (ages.length);
console.log("Average age: "+avg);

console.log(`----------------
2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’. 
----------------`);

//array initilization
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

console.log(`----------------
2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
----------------`);
let charSum =0;
let charAvg =0;
for (let i=0;i<names.length;i++) {
      //summing the length of names
      console.log("Name length tally: " + (charSum += names[i].length)); 
}
charAvg = charSum / (names.length);
console.log("Average number of letters: "+charAvg);