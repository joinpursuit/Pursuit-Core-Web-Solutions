let assert = require('assert')

// Question One:

// Write a function called double that doubles a number

function double(num) {
  return num * 2
}

// Uncomment out the next line to test your solution
runQ1Tests()

// Question Two:

// Write a function called containsSeven that returns whether or not a number has an sevens in it.

let containsSeven = num => ((num + '').split('').filter(str => str === '7')).length > 0

// Uncomment out the next line to test your solution
runQ2Tests()

// Question Three:

// Write a function called capitalizeTheAs the capitalizes all of the lowercase "a"s in a string leaving all other characters the same

function capitalizeTheAs(str) {
  let finalStr = ""
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      finalStr += "A"
    } else {
      finalStr += str[i]
    }
  }
  return finalStr
}

// Uncomment out the next line to test your solution
runQ3Tests()

// Question Four:
// Write a function called largest that returns the largest value in an array

function largest(arr) {
  let largestVal = arr[0]
  for (let val of arr) {
    if (val > largestVal) {
      largestVal = val
    }
  }
  return largestVal
}

// Uncomment out the next line to test your solution
runQ4Tests()

// Question Five:
// Write a function called average that returns the average of an array

const average = arr => arr.reduce((accum, elem) => accum + elem) / arr.length

// Uncomment out the next line to test your solution
runQ5Tests()

// Question Six:
// Write a function called mode that returns the most frequently occurring number in an array

// Uncomment out the next line to test your solution
// runQ6Tests()

// Question Seven:
// Write a function called median that returns the most median number in an array
// HINT: You'll need to sort the array first

// Uncomment out the next line to test your solution
// runQ7Tests()

// Question Eight:
// Write a function called addAllStudents that takes in an array of Classroom objects (described below) and returns the total number of students

// Sample input:
// [{teacher: "Mr. Smith", numberOfStudents: 28}, {teacher: "Ms. Lopez", numberOfStudents: 32}, {teacher: "Professor McGonagall", numberOfStudents: 20}]

// Sample output:
// 80

// Uncomment out the next line to test your solution
// runQ8Tests()


// Question Nine:
// Write a function called getSmallestClassObject that takes in an array of Classroom objects (described below) and returns the object with the least students

// Sample input:
// [{teacher: "Mr. Smith", numberOfStudents: 28}, {teacher: "Ms. Lopez", numberOfStudents: 32}, {teacher: "Professor McGonagall", numberOfStudents: 20}]

// Sample output:
// {teacher: "Professor McGonagall", numberOfStudents: 20}

// Uncomment out the next line to test your solution
// runQ9Tests()




// Question Ten:

// Write a function called doubleAllElements that doubles each number in an array
// Your function should use a higher-ordered function (e.g map, filter, reduce, every, sort) in its implementation

// Uncomment out the next line to test your solution
// runQ10Tests()


// Question Eleven:

// Write a function called onlyLongStrings that removes all strings with 3 or fewer characters
// Your function should use a higher-ordered function (e.g map, filter, reduce, every, sort) in its implementation
// Your output should be in the same order as the input

// Uncomment out the next line to test your solution
// runQ11Tests()

// Question Twelve:

// Write a function called containsOnlyNumbers that returns whether or not an array contains only numbers
// Your function should use a higher-ordered function (e.g map, filter, reduce, every, sort) in its implementation

// Uncomment out the next line to test your solution
// runQ12Tests()

// Question Thirteen:

// Make a class called Person that has two properties set by the constructor named age and name
// Give it a method called isALegalAdult which returns true if the age is at least 18

// runQ13Tests()

// Question Fourteen:

// Write a function called getAllAdults that takes in an array of Person objects and returns an array with only Person objects with an age of at least 18

// runQ14Tests()

// Question Fifteen:

// Write a function called getAllNames that takes in an array of Person objects and returns a string with all of the names joined together with a ","

// runQ15Tests()

// The code below is used to test your solutions.  Feel free to look over it, but do not change any of it.

function TestCase(input, output) {
  this.input = input
  this.output = output
  this.formattedInput = () => {
    return JSON.stringify(this.input)
  }
}

function runTests(questionNum, testCases, testCallback) {
  console.log(`Question ${questionNum} Tests`)
  try {
    for (let testCase of testCases) {
      console.log(`Running ${testCallback.name}(${testCase.formattedInput()})`)
      assert.strictEqual(JSON.stringify(testCallback(testCase.input)), JSON.stringify(testCase.output))
    }
    console.log(`All Question ${questionNum} tests passed!\n`)
  }
  catch(error) {
    if (error.expected === undefined) {
      console.log("An unexpected error occurred running the test")
      console.log(error)
    } else {
      console.log(`\nTest failed.  Was expecting "${error.expected}", but got "${error.actual}"`)
    }
  }
}

function runQ1Tests() {
  let testCases = [
    new TestCase(3,6),
    new TestCase(0,0),
    new TestCase(1,2),
    new TestCase(-8,-16),
    new TestCase(100.1,200.2)
  ]
  runTests("One", testCases, double)
}

function runQ2Tests() {
  let testCases = [
    new TestCase(7, true),
    new TestCase(84393, false),
    new TestCase(0, false),
    new TestCase(0.4927493, true)
  ]
  runTests("Two", testCases, containsSeven)
}

function runQ3Tests() {
  let testCases = [
    new TestCase("Hello world!", "Hello world!"),
    new TestCase("apple", "Apple"),
    new TestCase("aAaaAaaA", "AAAAAAAA"),
    new TestCase("", ""),
    new TestCase("cApitalIZe ThE 'a'S", "cApitAlIZe ThE 'A'S"),
  ]
  runTests("Three", testCases, capitalizeTheAs)
}

function runQ4Tests() {
  let testCases = [
    new TestCase([1,2,3,4,5,6,7,8], 8),
    new TestCase([8,7,6,5,4,3,2,1], 8),
    new TestCase([3,6,4,8,4,20,6,8,9], 20),
    new TestCase([-8,-9,-10,-5,-7], -5),
    new TestCase([0], 0)
  ]
  runTests("Four", testCases, largest)
}

function runQ5Tests() {
  let testCases = [
    new TestCase([3,4,5], 4),
    new TestCase([2,5,7,9], 5.75),
    new TestCase([3], 3),
    new TestCase([2,5,7,9], 5.75),
    new TestCase([-3,4,-7], -2),
    new TestCase([-2,-9,-4,15], 0),
  ]
  runTests("Five", testCases, average)
}

function runQ6Tests() {

}

function runQ7Tests() {

}
