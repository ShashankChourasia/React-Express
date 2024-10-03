// Write a function which can concatenate 2 arrays

const mergeArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
  // return arr1.concat(arr2); // can pass multiple arrays and it will merge
  // arr1.push(...arr2);
  // return arr1;
};

const arr1 = [1];
const arr2 = [2, 3];
const result = mergeArrays(arr1, arr2);
console.log(result, arr1, arr2);
