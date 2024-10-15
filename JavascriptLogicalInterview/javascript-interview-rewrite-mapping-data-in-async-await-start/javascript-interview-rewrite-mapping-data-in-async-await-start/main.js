// You have 2 functions which return promises. Map data from users and userStatuses to get array of users with id, name, isActive
// Rewrite previous task in async await

const users = [
  {
    id: 1,
    name: "Jack",
  },
  {
    id: 2,
    name: "John",
  },
  {
    id: 3,
    name: "Mike",
  },
];
const userStatuses = [
  {
    id: 1,
    isActive: true,
  },
  {
    id: 2,
    isActive: true,
  },
  {
    id: 3,
    isActive: false,
  },
];

const getUsers = () => {
  return new Promise((resolve) => {
    resolve(users);
  });
};

const getUserStatuses = () => {
  return new Promise((resolve) => {
    resolve(userStatuses);
  });
};

const getMappedUsers = async () => {
  try {
    const users = await getUsers();
    const userStatuses = await getUserStatuses();
    const mappedUsers = users.map((user) => {
      const isActive = userStatuses.find(
        (status) => status.id === user.id
      ).isActive;
      return { ...user, isActive };
    });
    console.log("Mapped users ", mappedUsers);
  } catch (err) {
    console.log("Error", err);
  }
};

getMappedUsers();
