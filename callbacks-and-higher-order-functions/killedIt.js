//console.log("Hello World!");

// Declare a variable 'programmingLanguages' and set it to an array that contains the values 'C++', 'Java', 'Python', Javascript', and 'Swift'.

// declare a variable, const and set it to an array with the provided string values

const programmingLanguages = ["C++", "Java", "Python", "Javascript", "Swift"];

/*
Create a function 'containsJ' that takes a string as an argument
'containsJ' should return a boolean value based off of whether or not the string being passed to it contains the letter 'j' or 'J.
For example, if the input is 'Cat' then your function should return false, and if the input is 'Jaguar' it should return true.
*/

// declare the function, needs to accept an argument
function containsJ(str) {
  // use if logic to determine if the 'j' or 'J' is in that argument
  // may have to use a method, contains()
  // 'j' || 'J'
  if (str.includes("j") || str.includes("J")) {
    return true;
  }
  return false;
}

// console.log(containsJ('Cat'));  // false
// console.log(containsJ('Jaguar'));  // true
// console.log(containsJ('jaguar'));  // true

/*
Create a function 'screen' that takes in two arguments an array and a callback function that will be applied to every element in the array.
The callback function will return a boolean value. When 'screen' is called it will apply the callback function on every element in the array.
If the result of the callback function is true then that element in the array will be added to a new array. The 'screen' function will return that new array.
For example, if we were to call 'screen' and pass to it an array containing the elements 1, 2, 3, 4, 5, and 6 as the first argument and a callback function that tested if its argument was even for the second argument, then we should get the result [2, 4, 6] from our call to 'screen'
*/

// create the function 'screen' takes 2 args, arr and a cb
function screen(arr, cb) {
  // create new array call it storage
  const storage = [];

  // iterate over the passed in array
  for (let i = 0; i < arr.length; i++) {
    // we need apply the cb to every element
    // if we get true
    // add this to our storage
    if (cb(arr[i]) == true) {
      storage.push(arr[i]);
    }
  }

  // return storage
  return storage;
}

// Check that your 'screen' function is working correctly by passing it your 'programmingLanguages' array and your 'containsJ' function
// console.log(screen(programmingLanguages, containsJ));

/*
Write a function "memoryMaker" that accepts no parameters, and returns a function. Have the returned function accept a value, and every time the returned function is called, return an array of all the previously passed values.

example:
*/

// create function, it will not have any arguments/params
function memoryMaker() {
  // create an array and have it remember values
  var memo = [];

  // create another function, this function will take a value
  function f(x) {
    // every time this function is called
    // return an array of previously passed values
    memo.push(x);
    return memo;
  }
  // return function
  return f;
}

// const iRemember = memoryMaker();
// iRemember('hello');
// iRemember(1);
// iRemember('world');
// console.log(iRemember(true));

/*
Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). "sumAllElements" will return the sum of the elements in the array starting at the initial value.

Example:
sumAllElements([1,2,3,4], 10) -> 20

Note: Do NOT use any native JS methods, or loops
*/

// create a function sumallels, take in 2 arguments, arr of nums, and the initial val
// total and it needs to automatically take in the initial value.
function sumAllElements(arrayOfNums, initialValue, total = 0) {
  // create base case the array is no longer there, undefined
  total = initialValue;
  if (!arrayOfNums.length) return initialValue;
  // removing values one at a time from the array
  total += arrayOfNums[0];
  arrayOfNums.shift();
  // passing the the new arry back to to the sumallelments function
  // return recusively
  return sumAllElements(arrayOfNums, total);
}

console.log(sumAllElements([1, 2, 3, 4], 10));

// const sumAllElements = () => {}
