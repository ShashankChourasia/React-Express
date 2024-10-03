// Write a function which helps to achieve multiply(a)(b) and returns product of a and b
// Create a curry function
// What can your curried function do?

// const multiply = (num1) => {
//   return (num2) => {
//     return num1 * num2;
//   };
// };

// const multiply = (num1) => (num2) => num1 * num2;

// console.log(multiply(2)(3));

const curry = function (fn) {
  var arity = fn.length;
  //   console.log("arity", arity);
  return function f1(...args) {
    if (args.length >= arity) {
      //   console.log("enough arguments");
      return fn(...args);
    } else {
      //   console.log("need more arguments");
      return function f2(...moreArgs) {
        var newArgs = args.concat(moreArgs);
        return f1(...newArgs);
      };
    }
  };
};
// const curriedSum = curry((a, b, c) => a + b + c);
// const partiallyCurriedSum = curriedSum(1);
// console.log(partiallyCurriedSum(2, 3));

const get = curry((property, object) => object[property]);
const getId = get("id");
const map = curry((fn, values) => values.map(fn));
const getIds = map(getId);
