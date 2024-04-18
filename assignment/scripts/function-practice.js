console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('Should say personalized hello, my name is Tristan:', helloName('Tristan'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log('The addition of 24 & 42:', addNumbers(24, 42));

// 4. Function to multiply three numbers & return the result
function multiplyThree(mult1, mult2, mult3) {
  return mult1 * mult2 * mult3;
}
console.log('The multiplication of 7, 8, & 9:', multiplyThree(7,8,9));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('Is -100 a positive number?', isPositive(-100));
console.log('Is 100 a positive number?', isPositive(100));



// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  const last = array.findLast((lastValue) => lastValue === array[array.length - 1]);
  return last;
}

console.log('Last value of the [1,2,3,24] array:', getLast([1,2,3,24]));
console.log('Last value of the [2,5,77,39] array:', getLast([2,5,77,39]));
console.log('Last value of the [] array:', getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let i = 0; i < array.length; i++){
    if (array[i]===value){
      return true;
    } //console.log(`The value of ${value} is found at index ${array[i]}`)
   }
   return false;
  }


console.log('Is the value 3 in the array of [1,2,3]', find(3,[1,2,3]));
console.log('Is the value 10 in the array [1,2,3]', find(100,[1,2,3]));
console.log('Is the value 37 in the array [10,20,30,37]', find(37,[10,20,30,37]));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for ( let c of string){
    if (letter === string[0]){
      return true;
    } else {
      return false;
    }
  }
}
console.log(`Is 'A' the first letter of 'Alphabet'?`, isFirstLetter('A','Alphabet'));
console.log(`Is 'a' the first letter of 'Alphabet'?`, isFirstLetter('a','Alphabet'));


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
