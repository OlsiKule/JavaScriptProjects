/*Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
Tests

Passed: sumAll([1, 4]) should return a number.
Passed: sumAll([1, 4]) should return 10.
Passed: sumAll([4, 1]) should return 10.
Passed: sumAll([5, 10]) should return 45.
Passed: sumAll([10, 5]) should return 45.
*/

function sumAll(arr) {
    // set up sm to lg numbers
    arr.sort((a, b) => a - b);
    // create an array => had to look up the sln b/n couldn't figure this one out
   let nums = Array.from({ length: arr[1] - arr[0] + 1 }, (_, i) => i + arr[0]);
    // use reduce to sum up the total
    let sum = nums.reduce((acc, curr) => acc + curr);
    return sum;
  }
  
  sumAll([1, 4]);

//   author's sln 
function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  sumAll([1, 4]);

//   author's sln 
const sumAll = arr => {
    // Buckle up everything to one!
    const startNum = arr[0];
    const endNum = arr[1];
  
    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;
  
    // Using Arithmetic Progression summing formula => this is what we learned in elementary school when adding # from 1-100 
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
  };

//   author's sln => interesting case of recursive fxn 
function sumAll(arr) {
    const [first, last] = [...arr].sort((a, b) => a - b);
    return first !== last
      ? first + sumAll([first + 1, last])
      : first;
  }
  
  sumAll([1, 4]);

  /*  Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
Passed: ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
Passed: ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.
Passed: ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
Passed: ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.
Passed: ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
Passed: ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.
Passed: [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
Passed: [1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.
Passed: [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
Passed: [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.
Passed: [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
Passed: [], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.
Passed: [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
Passed: [1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.*/ 

function diffArray(arr1, arr2) {

  const longArr = [...arr1, ...arr2];
  const uniqueArr = longArr.filter((item, index) => longArr.indexOf(item) === index && longArr.lastIndexOf(item) === index);
  return uniqueArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// suggested sln
function diffArray(arr1, arr2) {
  const newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 

// suggested sln
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// suggested sln
function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}



/* Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
Tests

Passed: destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
Passed: destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
Passed: destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
Passed: destroyer([2, 3, 2, 3], 2, 3) should return [].
Passed: destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
Passed: destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65]. */

// didn't come up with this sln other than think of the main steps
function destroyer(arr) {
  for (let i = 1; i < arguments.length; i++) {
    arr = arr.filter(item => item !== arguments[i]);
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// alternatively with includes() fxn 
function destroyer(arr, ...args) {
  return arr.filter(item => !args.includes(item));
}


/*     Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
Passed: whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
Passed: whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
Passed: whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
Passed: whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
Passed: whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return []
Passed: whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3}) should return []
*/ 

// not my sln 
function whatIsInAName(collection, source) {
  return collection.filter(obj => {
      return Object.keys(source).every(key => {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      });
    });
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });