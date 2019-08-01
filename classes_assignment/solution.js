// # Class Exercises

const assert = require('assert');

// ## Question 1
// a. Write a class called `Person` that has 3 properties: a first name, 
// a last name and a middle name. Create 2 instances of a `Person`.
// Print one of their first names.

class Person {
  constructor(firstName, middleName, lastName) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
  }
  
  fullName() {
    return `${this.firstName} ${this.middleName} ${this.lastName}`
  }
}

let alejandro = new Person('Alejandro', '', 'franco')
let geraint = new Person('Geraint', 'Howell', 'Thomas')
console.log(geraint.firstName)


// b. Write a method in `Person` called `fullName` that will return a formatted 
// string of an instance's full name. Call this method on both the instances you
// created in part a.
console.log(alejandro.fullName())
console.log(geraint.fullName())



// ## Question 2
// a. Create a class called `Book` that has properties `title`, `author` and 
// `rating`. Create some instances of `Book`.
class Book {
  constructor(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
  }

  isGood() {
    return this.rating >= 7
  }
}

let winFriends = new Book('How to win friends & influence people', 'Dale Carnegie', 8)
let hundredYears = new Book('A hundred years of solitude', 'Gabriel G. Marquez', 10)
let originOfSpecies = new Book('The origin of species', 'Charles Darwin', 6)

// b. Add a method to `Book` called `isGood` that returns `true` if its rating 
// is greater than or equal to 7
assert.strictEqual(hundredYears.isGood(), true)
assert.strictEqual(winFriends.isGood(), true)
assert.strictEqual(originOfSpecies.isGood(), false)

// ## Question 3
// a. Create a `Dog` class with four properties: `name (string), breed (string),
// mood (string), and hungry (boolean)`.
// b. Add a method called `playFetch`. It should set the dog's `hungry` property
// to `true`, set its mood property to `playful`, and log "Ruff!"
// c. Add a method called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
// d. Add a method called `toString` that returns a description of the dog:

class Dog {
  constructor(name, breed, mood, hungry) {
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
  }

  playFetch() {
    this.hungry = true;
    this.mood = 'playful';
    console.log('Ruff!')
  }
}

// ## Question 4

// There are three common scales that are used to measure temperature: Celsius,
// Fahrenheit, and Kelvin:

// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273

// a. Make an object called `freezingPoint` that has three properties: `celsius`,
// `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point 
// of water.


// b. Make a class called `Celsius` that has one property: `celsius`, and two 
// methods `getFahrenheitTemp`, and `getKelvinTemp`.

// ```js
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```

// c. Give `Celsius` a method called `isBelowFreezing` that returns a `Bool` 
// (true if the temperature is below freezing).

// ## Question 5
// a. Create a class called `Movie` that has properties for `name`, `year`,
// `genre`, `cast`, and `description`. Create an instance of your `Movie`

// b. Create an method inside `Movie` called `blurb` that returns a formatted 
//string describing the movie.

// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as
// a man named Borat who was visiting America from Kazakhstan."


// ## Question 6

// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.

// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.

// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

// [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)

// ```js
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}

// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5
// ```

// ## Question 7

// a. Make a class called `Car` with properties `make` and `model`.  
// Create an instance of a `Car`

// b. Make a class called `Bike` with properties `gears` and `hasBell`. 
// Create an instance of `Bike`

// c. Give each class a static method called `numberOfWheels` that returns the 
// number of wheels (2 for bikes, 4 for cars). 
// Why does it make sense for this to be a static method instead of an 
// instance method?

// ## Question 8

// a. Make a class called `Vehicle` with properties `color` and `name`.
// Give it a method called `makeSound` which logs "WHHOOSSSH" to the console

// b. Modify your `Car` and `Bike` classes from Question 7 to extend the `Vehicle`
// class.

// c. Create a new `Bike` instance that has a `color` of "green" and `name` 
// "Bikey McBikeface"

// d. Create a new `Car` instance that has a `color` of "red" and `name` 
// "Carry McCarface"
