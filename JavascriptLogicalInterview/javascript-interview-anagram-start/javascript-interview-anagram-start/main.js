// Write a function which checks if string is an anagram

// Anagrams are words that have the same characters in the same quantity. This means that two strings are anagrams if we can rearrange one to get the other.
// Here are some examples of words that are anagrams.
// “listen” and “silent”
// “rail safety” and “fairy tales”
// “dormitory” and “dirty room”
// “the eyes” and “they see”
const isAnagram = (str1, str2) => {
  if (str1.length != str2.length) return false;

  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  if (lowerStr1 === lowerStr2) return false;

  const sortedStr1 = lowerStr1.split("").sort().join("");
  const sortedStr2 = lowerStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
};
// console.log(isAnagram("listen", "silent"));

// console.log(isAnagram("rail safety", "fairy tales"));

console.log(isAnagram("dormitory", "dirty room"));

// console.log(isAnagram("the eyes", "they see"));

// console.log(isAnagram("foo", "bar"));
