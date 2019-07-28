// # Mid-Unit-1 Review Lab

// In this lab, we will review two key topics covered so far: Objects and Functions.  
// These are two vital topics for understanding JavaScript fundamentals, and will 
// be used heavily as we build web apps in later units.

const assert = require('assert');

// ## Functions

// ## 1. Average of two numbers
// Write a function that takes in two numbers as input and returns their average
// Input: 4,6
// Output: 5

console.log("========== 1 ==========")
const averageTwoNums = (a, b) => (a + b) / 2;

try {
  let tests = [
    assert.strictEqual(averageTwoNums(4, 6), 5),
    assert.strictEqual(averageTwoNums(4, 3), 3.5),
  ]
  console.log(tests.length + ' tests passed')
} catch (e) {
  throw e
}


// ## 2. Average of three numbers
// Write a function that takes in three numbers as input and returns their average
// Input: 1,3,5
// Output: 3
console.log("========== 2 ==========")
const averageThreeNums = (a, b, c) => (a + b + c) / 3;
try {
  let tests = [
    assert.strictEqual(averageThreeNums(1, 3, 5), 3),
    assert.strictEqual(averageThreeNums(4, 3, 2), 3),
  ]
  console.log(tests.length + ' tests passed')
} catch (e) {
  throw e
}

// ## 3. Average of array
// Write a function that takes in an array of numbers as input and returns their average
console.log("========== 3 ==========")
const averageArr = (arr) => {
  let sum = arr.reduce((sum, elem) => {
    return sum + elem;
  }, 0)
  return sum / arr.length;
}

try {
  let tests = [
    assert.strictEqual(averageArr([1, 3, 5]), 3),
    assert.strictEqual(averageArr([4, 3, 2]), 3),
    assert.strictEqual(averageArr([1,2,3,4,5,10,10]), 5)
  ]
  console.log(tests.length + ' tests passed')
} catch (e) {
  throw e
}

// ## 4. Remove even numbers
// Write a function that returns a new array with all even numbers removed.
// Input: [1,2,3,4,5,6]
// Output: [1,3,5]
console.log("========== 4 ==========")
const removeEvens = (arr) => {
  return arr.filter(elem => elem % 2)
}

try {
  let tests = [
    assert.deepStrictEqual(removeEvens([1, 3, 2, 5, 10]), [1, 3, 5]),
    assert.deepStrictEqual(removeEvens([2,4,10,10]), []),
    assert.deepStrictEqual(removeEvens([1,2,3,4,5,6]), [1,3,5]),

  ]
  console.log(tests.length + ' tests passed')
} catch (e) {
  throw e
}

// ## 5. Make sure each number is positive
// Write a function that checks to see whether every number in an array is positive.
// Input: [-4,3,-2,4]
// Output: false
console.log("========== 5 ==========")
const allPositive = (arr) => {
  return arr.every(elem => elem > 0)
}

try {
  let tests = [
    assert.strictEqual(allPositive([1, 3, 2, 5, 10]), true),
    assert.strictEqual(allPositive([1, 3, 2, 5, 10, -1]), false),
    assert.strictEqual(allPositive([0,0,1]), false),
    assert.strictEqual(allPositive([-4,3,-2,4]), false),

  ]
  console.log(tests.length + ' tests passed')
} catch (e) {
  throw e
}

// BONUS: If you didn't rewrite this using an array method with a callback

// ## 6. Lowercase all strings
// Write a function that lowercases all strings in an array of strings.
// Input: ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
// Output: ["hello", "there", "these", "are", "some", "strings"]

console.log("========== 6 ==========")
const lowercaseStrs = (arr) => {
  return arr.map(elem => {
    if (typeof elem === 'string') {
      return elem.toLowerCase()
    }
    return elem
  }).filter(elem => typeof elem === 'string')
}

try {
  let tests = [
    assert.deepStrictEqual(lowercaseStrs(
      ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
    ), ["hello", "there", "these", "are", "some", "strings"]),
    assert.deepStrictEqual(lowercaseStrs(
      ["HELLO", true, "THERE", {one: 1}, undefined, "Friend", 1]
    ), ["hello", "there", "friend"]),

  ]
  console.log(tests.length + ' tests passed')
} catch (e) {
  throw e
}

// BONUS: Rewrite this using a callback

// ## 7. Combine strings
// Write a function that combines an array of strings into a single string 
// separated by spaces.
// Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
// Output: "It’s not a bug. It’s an undocumented feature!""
console.log("========== 7 ==========")
const combineStrings = (arr) => arr.join(' ')

try {
  let tests = [
    assert.deepStrictEqual(combineStrings(
      ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
    ), "HELLO THERE THESE ARE SOME STRINGS"),
    assert.deepStrictEqual(combineStrings(
      ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"],
      ), "It’s not a bug. It’s an undocumented feature!")
  ]
  console.log(tests.length + ' tests passed')
} catch (e) {
  throw e
}

// ## 8. Random number
// Write a function that returns a random integer between 1 and n
// Input: 7
// Output: 3
console.log("========== 8 ==========")
const getRandomNum = (n) => {
  return Math.floor(Math.random() * (n - 1) + 1)
}

console.log('random number between [1, 7)', getRandomNum(7))
console.log('random number between [1, 100)', getRandomNum(100))

// ## 9. Sum of absolute values
// Write a function that returns the sum of the absolute values of an 
// array
// Input: [3,-4,5,-6]
// Output: 18

console.log("========== 9 ==========")
const sumAbsValuesArr = (arr) => arr.reduce((sum, num) => sum + Math.abs(num))

try {
  let tests = [
    assert.deepStrictEqual(sumAbsValuesArr([1, -1, 0]), 2), 
    assert.deepStrictEqual(sumAbsValuesArr([3,-4,5,-6]), 18), 
  ]
  console.log(tests.length + ' tests passed')
} catch (e) {
  throw e
}

// ## 10. Fahrenheit to Celsius
// Write a function that converts a temperature in Fahrenheit to Celsius
// Input: 212
// Output: 100
console.log("========== 10 ==========")
const FtoC = (f) => {
  let c = (f - 32) * 5/9
  return c;
}

try {
  let tests = [
    assert.strictEqual(FtoC(32), 0), 
    assert.strictEqual(FtoC(98), 36.666666666666664), 
    assert.strictEqual(FtoC(212), 100), 
  ]
  console.log(tests.length + ' tests passed')
} catch (e) {
  throw e
}

// ## Objects
console.log("\n\n## Objects ##")
// 1. Write an object that represents a User. 
// It should have a property for the user's name, email address, and age.
const alejo = {
  name: 'Alejandro',
  email: 'alejo@email.com',
  age: 23
}

// 2. Make 3 different user objects and store them in an array
const users = [
  alejo,
  {
    name: 'Peter Sagan',
    email: 'petoSagan@email.com',
    age: 29
  },
  {
    name: 'Nairo Quintana',
    email: 'nairoQ@email.com',
    age: 29
  },
  {
    name: 'Chris Froome',
    email: 'chrisF@email.com',
    age: 34
  }
]

// 3. Write a function that takes in an array of User objects, and prints their email addresses
console.log("========== O3 ==========")
const getEmails = (users) => {
  return emails = users.map(user => user.email)
}

try {
  let tests = [
    assert.deepStrictEqual(getEmails(users), [
      'alejo@email.com', 'petoSagan@email.com',
      'nairoQ@email.com', 'chrisF@email.com'
      ]) 
  ]
  console.log(tests.length + ' tests passed')
} catch (e) {
  throw e
}

// 4. Write a function that takes in an array of User objects, 
// and return the average age of all users

console.log("========== O4 ==========")
const averageUserAge = (users) => {
  let sum = users.reduce((sum, user)  => sum + user.age, 0)
  return Math.floor(sum / users.length)
}

try {
  let tests = [
    assert.deepStrictEqual(averageUserAge(users), 28) 
  ]
  console.log(tests.length + ' tests passed')
} catch (e) {
  throw e
}

// 5. Write a function that takes in an array of User objects and 
// returns whether or not all users have an age greater than 18
console.log("========== O5 ==========")
const areAllOver18 = (users) => {
  return users.every(user => user.age > 18)
}

try {
  let tests = [
    assert.deepStrictEqual(areAllOver18(users), true)
  ]
  console.log(tests.length + ' tests passed')
} catch (e) {
  throw e
}


// 6. Write an object that represents a Recipe.  It should have a property for the recipe's ingredients, name, and how long it will take to make.

// 7. Make 3 different recipe objects and store them in an array.

// 8. Write a function that takes in an array of Recipe objects and returns the recipe that will take the least amount of time to make.

// 9. Write a function that takes in an array of Recipe objects and returns an array containing all the ingredients you need to make all of the recipes.

// Bonus: Remove duplicate ingredients from the final array

// 10. Write a function that takes in an array of Recipe objects and an array of ingredients and returns all the recipes that you are able to make.
