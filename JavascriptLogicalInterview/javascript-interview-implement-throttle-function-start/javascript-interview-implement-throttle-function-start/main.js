// Create throttle function

const throttle = (func, timeout = 300) => {
  let isWaiting = false;
  return (...args) => {
    if (!isWaiting) {
      func.apply(this, args);
      isWaiting = true;
      setTimeout(() => {
        isWaiting = false;
      }, timeout);
    }
  };
};

const saveInput = (name) => {
  console.log("Save input", name);
};

const processChange = throttle(saveInput, 2000);

processChange("foo");

setTimeout(() => {
  processChange("foo");
}, 1000);

setTimeout(() => {
  processChange("foo");
}, 1200);

setTimeout(() => {
  processChange("foo");
}, 2400);
