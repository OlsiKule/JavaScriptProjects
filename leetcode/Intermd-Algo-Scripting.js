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