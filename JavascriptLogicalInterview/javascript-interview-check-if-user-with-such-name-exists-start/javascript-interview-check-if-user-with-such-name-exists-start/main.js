// Check that user with such name exists in array of objects

const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
  },
];

// const isNameExists = (name, users) => users.some((user) => user.name === name);
const isNameExists = (name, users) => {
  const index = users.findIndex((user) => user.name === name);
  return index >= 0;
};

// const isNameExists = (name, user) => {
//   let exists = false;
//   for (let i = 0; i < user.length; i++) {
//     if (user[i].name === name) {
//       exists = true;
//     }
//   }
//   return exists;
// };
