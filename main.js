// 1. Create a function that calculates the sum of two given numbers.
function calculateSum(num1, num2) {
  return num1 + num2;
}
console.log(calculateSum(5, 2));

// 2. Write a function that checks if a number is prime (a number that can only be divided
//     by 1 and itself without any remainder).
function checkPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(checkPrime(7));

// 3. Write a function to reverse a given string (using built in method).
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Hello World"));

// 4. Write a function to find the largest number in an array.
function findLargest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log(findLargest([1, 3, 7, 2, 4]));

// 5. Write a function that filters an array and returns only the even numbers.
function filterEven(arr) {
  //with higher order function fillter
  // return arr.filter(num => num % 2 === 0);

  //or
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) evenNumbers.push(arr[i]);
  }
  return evenNumbers;
}
console.log(filterEven([1, 2, 3, 4, 5, 6]));

// 6. Implement a function to reverse a string without using the built-in reverse() method.
function reverseStringWithoutBuiltIn(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log(reverseStringWithoutBuiltIn("route"));

// 7. Write a function to calculate the average value of all numbers in an array.
function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calculateAverage([1, 2, 3, 4, 5]));

// 8. Write a function that determines whether a given day number (1-7) represents a weekday or weekend.
function determineDay(day) {
  if (day >= 1 && day <= 6) {
    return "Weekday";
  } else if (day == 7) {
    return "Weekend";
  } else {
    return "Invalid day";
  }
}
console.log(determineDay(5), determineDay(7), determineDay(8));

// 9. Write a function that filters an array of numbers and returns only those that are divisible by 2 or 3.
function filterDivisible(arr) {
  let divisibleNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 || arr[i] % 3 === 0) {
      divisibleNumbers.push(arr[i]);
    }
  }
  return divisibleNumbers;
}
console.log(filterDivisible([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//10. Write a function that finds the index of a given element in an array. If the element isn't found, return `-1`.
function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(findIndex([1, 2, 3, 4, 5], 3), findIndex([1, 2, 3, 4, 5], 10));

//11. Write a function to calculate the factorial of a given number.
function factorial(n) {
  if (n === 0) {
    return 1;
  } else if (n > 0) {
    return n * factorial(n - 1);
  } else {
    return "Factorial is not defined for negative numbers";
  }
}
console.log(factorial(-5));

// 12. Write a function that takes an object and returns an array containing only its keys.
function getKeys(obj) {
  return Object.keys(obj);
}
console.log(getKeys({ name: "John", age: 30 }));

// 13. Write a function that returns only the unique numbers from an array.
function findUniqueNumbers(arr) {
  const numberCount = {};

  arr.forEach((num) => {
    numberCount[num] = (numberCount[num] || 0) + 1;
  });

  return Object.keys(numberCount).filter((num) => numberCount[num] === 1).map(Number);
}

console.log(findUniqueNumbers([1, 2, 2, 3, 4, 4, 5]))


//14. Write a function to count the occurrences of each character in a string.
function countCharacter(string) {
  
  const characterCount = {};

  string.split("").forEach((chr) => {
    characterCount[chr] = (characterCount[chr] || 0) + 1;
  });

  return characterCount;
}
console.log(countCharacter("Hello"));

//15. Write a function that sorts an array of numbers in ascending order.
function sortNumbers(arr) {
  return arr.sort((a,b)=>a-b);
}
console.log(sortNumbers([5, 3, 8, 1, 2]));


//16. Write a function to check if a given string is an anagram of another string (i.e., contains the same characters in a different order).
function isAnagram(str1, str2) {
  return [...str1].sort().join("") === [...str2].sort().join("");
}
console.log(isAnagram("listen", "silent"));

//17. Write a function that removes all falsy values (`false`, `null`, `0`, `""`, `undefined`,and `NaN`) from an array.
function removeFalsyValues(arr) {
  return arr.filter(val => val);
}
console.log(removeFalsyValues([0, false, "Hello", "", null, undefined, NaN, 42]))

//18. Write a function that creates a car object with properties such as `model` and `year’ and includes a method to display the car's details.

function  createCar(model, year) {
  return `Model: ${model}, Year: ${year}`
}
console.log(createCar("Toyota", 2020));

//19. Write a function that checks if a given object contains a specific property.
function hasProperty(obj, prop) {
  return Object.keys(obj).includes(prop);
}
console.log(hasProperty({name: "John", age: 30}, "name"));
console.log(hasProperty({name: "Alice", age: 25}, "address"));

//20. Write a function to count the number of vowels (a, e, i, o, u) in a string, regardless of case.
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return str.split("").reduce((count, chr) => {
    if (vowels.includes(chr)) {
      return count + 1;
      }
      return count;
      }, 0);
}
console.log(countVowels("Hello World"));

//21. Write a function that splits a string into an array of words based on spaces.
function splitString(str) {
  return str.split(" ");
}
console.log(splitString("The quick brown fox"));


// 22. Write a function that performs a mathematical operation (`+`, `-`, `*`, `/`) on two numbers.
function mathOperation(num1, num2, operation) {
  switch (operation) {
    case "+": return num1 + num2;break;
    case "-": return num1 - num2;break;
    case "*": return num1 * num2;break;
    case "/": return num1 / num2;break;
    default: return "Invalid operation";
  }
}
console.log(mathOperation(5, 3, "+"));
console.log(mathOperation(5, 3, "%"));