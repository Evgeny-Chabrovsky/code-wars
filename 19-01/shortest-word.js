// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// function findShort(s) {
//   console.log(s.split(" ").sort((a, b) => a.length - b.length)[0].length);
// }

function findShort(s) {
  return Math.min(...s.split(" ").map((a) => a.length));
}

console.log(
  findShort(
    "String will never be empty and you do not need to account for different data types"
  )
);
