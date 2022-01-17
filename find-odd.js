// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

//[7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//My solution

function findOdd(arr) {
  for (const i of arr) {
    let num = a.filter((it) => it === i);
    if (num.length % 2 !== 0) {
      return i;
    }
  }
  return [];
}
// ____________________

// function findOdd(arr) {
//   return arr.find((item, index) => arr.filter(el => el == item).length % 2)
// }

console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));
