/*
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck!
*/

const repeats = (arr) => {
    let arr2 = [];
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        if(obj[arr[i]] === undefined) {
          obj[arr[i]] = 1;
        } else {
          obj[arr[i]]++;
        }
     }
     for(let i = 0; i < arr.length; i++) {
         if(obj[arr[i]] < 2) {
           arr2.push(arr[i]);
         }
     }
    console.log(arr2);
  
    return arr2.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    })
  };