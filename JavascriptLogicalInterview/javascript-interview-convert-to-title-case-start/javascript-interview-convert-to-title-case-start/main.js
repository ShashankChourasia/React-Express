// Write a function to convert a string to title case

// Provided test cases
//   titleCase(“I’m a little tea pot”) should return a string.
//   titleCase(“I’m a little tea pot”) should return “I’m A Little Tea Pot”.
//   titleCase(“sHoRt AnD sToUt”) should return “Short And Stout”.
//   titleCase(“HERE IS MY HANDLE HERE IS MY SPOUT”) should return “Here Is My Handle Here Is My Spout”.

const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  //   const arr = str.toLowerCase().split(" ");
  //   for (var i = 0; i < arr.length; i++) {
  //     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  //   }
  //   return arr.join(" ");
};

console.log(titleCase("I’m a little tea pot"));
