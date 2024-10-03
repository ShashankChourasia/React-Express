// Write a function which implements shuffle
const shuffleItem = (items) => {
  return items
    .map((item) => ({ sort: Math.random(), value: item }))
    .sort((item1, item2) => item1.sort - item2.sort)
    .map((a) => a.value);
};
console.log(shuffleItem([1, 2]));
