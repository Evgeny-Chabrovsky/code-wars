// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// My solution
// function findNextSquare(sq) {
//   let num = Math.sqrt(sq);
//   return num % 1 !== 0 ? -1 : (num + 1) * (num + 1);
// }

function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 !== 0 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}
console.log(findNextSquare(625));
