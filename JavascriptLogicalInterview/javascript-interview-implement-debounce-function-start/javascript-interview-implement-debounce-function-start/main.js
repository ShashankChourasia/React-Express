// Create debounce function

const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    console.log("Inner func", args);
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

const saveInput = (name) => {
  console.log("Save input", name);
};

const processChange = debounce(saveInput, 2000);

processChange("foo");
processChange("foo");
processChange("foo");
processChange("foo");
