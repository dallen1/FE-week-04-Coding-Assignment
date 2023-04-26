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

console.log(`----------------
2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
----------------`);
//create new string var to hold concat
let concatNames = "";
for (let i=0;i<names.length;i++) { 
    //create concat string from looping through indexes of names
    concatNames += names[i]+ " ";
    console.log("Name concat so far: " + concatNames); 
}

console.log(`----------------
3.	How do you access the last element of any array?
----------------`);
console.log(`A reliable way to get the last element of an array is to use the length method 
on the array then subtract 1 to get the index. This is because indexing starts 
at 0 so the value of the last index is the result of the length method minus 1.`);

console.log(`----------------
4.	How do you access the first element of any array?
----------------`);
console.log(`To access the first element we use the index of 0. This is written as array[0].`);

console.log(`----------------
5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names
array and add the length of each name to the nameLengths array.

For example:

let names = ["Kelly", "Sam", "Kate"]; 	//starting with this array
let nameLengths = [5, 3, 4]; 			//create this new array
----------------`);
//initialize variable
let nameLengths =[];

//create for loop
for (let i=0;i<names.length;i++){
    //assinging the index of nameLength to be the length of the value of name at the same index
    nameLengths[i]=names[i].length;
}
console.log("Array of name lengths: " + nameLengths);

console.log(`----------------
6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
----------------`);
//initialize our return variable
let sumLengths=0;

//create loop
for (let i=0;i<nameLengths.length;i++) {
    //increasing sumlengths each iteration by the retrived index.
    sumLengths+= nameLengths[i];
}

console.log("The sum of the length of the names is: " + sumLengths);

console.log(`----------------
7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated
to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would 
expect the function to return ‘HelloHelloHello’).
----------------`);

//create arrow function with 2 parameters
const concatFunction = ( word, n) => {
    //initialize empty array
    let concatWord =[];

    //create loop to run number of times defined by n
    for (let i=0;i<n;i++) {
       //fill array with contents of word as many times as instructed
       concatWord[i]=word;
    }
    //run concat operation
    word=concatWord.join('');
    return word;
};

//exectutes function as described with required parameters
console.log(concatFunction("Hello",3));

console.log(`----------------
8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
  The full name should be the first and the last name separated by a space.
----------------`);
//using an arrow syntax and string literals to constuct the function
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

//calling the function
console.log(fullName("Michael", "Jackson"));

console.log(`----------------
9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers
in the array is greater than 100.
----------------`);

//decalre function with 1 param
const break100 = (arr1) => {
    //initialize sum tracker
    let sum =0;

    //loops over array
    for (let i=0;i<arr1.length;i++) {

        //sums values
        sum += arr1[i];
        
        //returns true when we meet the condition of greater than 100
        if (sum > 100) {
            return true;
        }
    }

    //return if condition unmet
    return false
}

//testing function with ages array
console.log(break100(ages));

console.log(`----------------
10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
----------------`);

//create single parameter function
const indexAvg = (arr1) => {
    //initialize counting var
    let sum =0;
    //loop through index
    for (let i=0;i<arr1.length;i++){
        //create sum
        sum +=arr1[i];
    }
    //calc avg
    return sum / arr1.length;
}
//invoke function with ages array. It returns the same value as for question 1c.
console.log(indexAvg(ages));

console.log(`----------------
11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the
first array is greater than the average of the elements in the second array.
----------------`);

//create function with two params
const arrCompare = (arr1, arr2) => {

    //using the function created for question 9, we compare two arrays
    if (indexAvg(arr1) > indexAvg(arr2)) {
        //return when array 1 is larger
        return true;
    }

    //return for all other conditions
    return false;
}

//invoke new function
console.log(arrCompare([1,2,3,4,5], [1,2,3,4]));

console.log(`----------------
12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true 
if it is hot outside and if moneyInPocket is greater than 10.50.
----------------`);

//function invoked with 2 parameters
const willBuyDrink = (isHotOutside, moneyInPocket) => {

    //checks for both logical conditions
    if (isHotOutside === true && moneyInPocket > 10.50) {
        //retrun when condtions are met
        return true;
    }

    //retrun for all other cases
    return false;
}

//invoking the function
console.log(willBuyDrink(true, 11));

console.log(`----------------
13.	Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.
----------------`);

//creates function that returns an array of the fibonacci sequence. The taken parameter indictaes 
//how many iterations the function should run.
//It could be expanded with an input check for n to be a positive number >=3.

const fibonacci = (n) => {
    //initaiates the mathematical sequence with the first 2 index values
    let sequence =[0,1];
    
    //starts the loop at index 2. It runs until the specific interation designated by n.
    for (let i=2;i<=n;i++) {

            sequence[i]= sequence[i-1]+sequence[i-2]
            
        }
    return sequence;
}

//invokes the function up to iteration 12.
console.log(fibonacci(12));