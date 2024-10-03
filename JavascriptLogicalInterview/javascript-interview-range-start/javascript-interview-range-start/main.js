// Write a function which implement range

// range(1, 50)
// 1,2,3,4,5,6,...,50
const range = (start, end) =>
  [...Array(end - start).keys()].map((el) => el + start);
// const range = (start, end) => {
//   const res = [];
//   for (let i = start; i <= end; i++) {
//     res.push(i);
//   }
//   return res;
// };

console.log(range(41, 47));
