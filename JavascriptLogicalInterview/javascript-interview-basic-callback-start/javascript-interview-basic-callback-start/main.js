// Write an asynchronous function which executes callback after finishing it's asynchronous task
// What problem callbacks solve?
const asyncFunc = (callback) => {
  setTimeout(() => callback("Done"), 2000);
};

asyncFunc((message) => console.log("Callback", message));
