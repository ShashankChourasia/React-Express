// Design a function which returns a fibonacci sequence value
// The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms. Hence, the nth term is the sum of (n-1)th term and (n-2)th term.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144;

// will get single number
// const fibonacci = (n) => {
//   if (n < 2) return 1;
//   else return fibonacci(n - 2) + fibonacci(n - 1);
// };

//full fibonacci series
const fibonacci = (n) => {
  // if(n<2) return [0,1]
  return [...Array(n).keys()].reduce(
    (acc, el) => {
      const next = acc[acc.length - 2] + acc[acc.length - 1];
      return [...acc, next];
    },
    [0, 1]
  );
};

console.log(fibonacci(1));
