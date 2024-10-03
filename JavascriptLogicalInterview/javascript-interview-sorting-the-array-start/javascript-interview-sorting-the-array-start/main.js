// Sort the array of numbers
// Sort array of objects by author's lastname

// const arr = [5, 2, 7];
// const result = arr.sort((num1, num2) => num1 - num2);
// console.log(arr, result);

const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
];

const res = books.sort((book1, book2) => {
  const authorLastName1 = book1.author.split(" ")[1];
  const authorLastName2 = book2.author.split(" ")[1];
  return authorLastName1 < authorLastName2 ? -1 : 1;
});

console.log(res);
