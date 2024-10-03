// Write a function which counts vowels in a string

const findVowels = (str) => {
  const vowels = ["a", "i", "o", "u", "e"];

  return str
    .toLowerCase()
    .split("")
    .reduce((acc, el) => {
      return vowels.includes(el) ? acc + 1 : acc;
    }, 0);
  //   let count = 0;
  //   for (let char of str.toLowerCase()) {
  //     if (vowels.includes(char)) count++;
  //   }
  //   return count;
};

console.log(findVowels("waeakji"));
