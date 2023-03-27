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
  // console.log(longArr);
  const uniqueArr = longArr.filter((item, index) => longArr.indexOf(item) === index && longArr.lastIndexOf(item) === index);
  // console.log(uniqueArr)
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