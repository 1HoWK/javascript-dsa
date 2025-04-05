var fizzBuzz = function (n) {
  // what is the input
  // integer n

  // seems like we need to iterate each element

  // what is the output
  // return a string array

  // declare an array;
  let arr = [];
  // iterate each element
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i.toString());
    }
  }

  return arr;
};
