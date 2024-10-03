// Remove all duplicates in the array

// const uniqueArr = (arr) => {
//   return [...new Set(arr)];
// };

// const uniqueArr = (arr) => {
//   const res = [];
//   arr.forEach((el) => {
//     if (!res.includes(el)) res.push(el);
//   });
//   return res;
// };

const uniqueArr = (arr) => {
  return arr.reduce((acc, el) => {
    return acc.includes(el) ? acc : [...acc, el];
  }, []);
};

console.log(uniqueArr([1, 1, 2]));
