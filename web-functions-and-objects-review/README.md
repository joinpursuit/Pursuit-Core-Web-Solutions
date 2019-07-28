# Mid-Unit-1 Review Lab

In this lab, we will review two key topics covered so far: Objects and Functions.  These are two vital topics for understanding JavaScript fundamentals, and will be used heavily as we build web apps in later units.


## Functions

## 1. Average of two numbers

Write a function that takes in two numbers as input and returns their average

```
Input: 4,6
Output: 5
```

## 2. Average of three numbers

Write a function that takes in three numbers as input and returns their average

```
Input: 1,3,5
Output: 3
```

## 3. Average of array

Write a function that takes in an array of numbers as input and returns their average

```
Input: [1,2,3,4,5,10,10]
Output: 5
```

## 4. Remove even numbers

Write a function that returns a new array with all even numbers removed.

```
Input: [1,2,3,4,5,6]
Output: [1,3,5]
```

BONUS: If you didn't rewrite this using an array method with a callback

## 5. Make sure each number is positive

Write a function that checks to see whether every number in an array is positive.

```
Input: [-4,3,-2,4]
Output: false
```

BONUS: If you didn't rewrite this using an array method with a callback

## 6. Lowercase all strings

Write a function that lowercases all strings in an array of strings.

```
Input: ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
Output: ["hello", "there", "these", "are", "some", "strings"]
```

BONUS: 
  A. If you didn't rewrite this using an array method with a callback
  B. Make it work even if the array has mixed types inside `[1, 'HELLO', {one: 'uno'}] would become ['hello']` 

## 7. Combine strings

Write a function that combines an array of strings into a single string separated by spaces.

```
Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
Output: "It’s not a bug. It’s an undocumented feature!""
```

## 8. Random number

Write a function that returns a random integer between 1 and n

```
Input: 7
Output: 3
```
Bonus: Your function should return 1 or 7 inclusive

## 9. Sum of absolute values

Write a function that returns the sum of the absolute values of an array

```
Input: [3,-4,5,-6]
Output: 18
```

## 10. Fahrenheit to Celsius

Write a function that converts a temperature in Fahrenheit to Celsius

```
Input: 212
Output: 100
```

## Objects

1. Write an object that represents a User.  It should have a property for the user's name, email address, and age.

2. Make 3 different user objects and store them in an array

3. Write a function that takes in an array of User objects, and returns an array with only their email addresses

4. Write a function that takes in an array of User objects, and returns the average age of all users. Rounded down.

5. Write a function that takes in an array of User objects and returns whether or not all users have an age greater than 18

6. Write an object that represents a Recipe.  It should have a property for the recipe's ingredients, name, and how long it will take to make.

7. Make 3 different recipe objects and store them in an array.

8. Write a function that takes in an array of Recipe objects and returns the recipe that will take the least amount of time to make.

9. Write a function that takes in an array of Recipe objects and returns an array containing all the ingredients you need to make all of the recipes.

Bonus: Remove duplicate ingredients from the final array

10. Write a function that takes in an array of Recipe objects and an array of ingredients and returns all the recipes that you are able to make.
