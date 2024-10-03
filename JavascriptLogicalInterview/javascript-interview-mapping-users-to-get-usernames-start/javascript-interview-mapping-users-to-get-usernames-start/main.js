// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending
const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];

//Using map optimized way
const namesList = users
  .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
  .filter((user) => user.isActive)
  .map((user) => user.name);

// using for loop
// users.sort((user1, user2) => (user1.age < user2.age ? 1 : -1));
// const namesList = [];
// for (let i = 0; i < users.length; i++) {
//   if (users[i].isActive) {
//     namesList.push(users[i].name);
//   }
// }

//using forEach Loop
// users.forEach((user) => namesList.push(user.name));

//using for of loop
// for (let user of users) {
//   namesList.push(user.name);
// }

console.log("Names", namesList);
