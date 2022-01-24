https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

//My solution

function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;
  for (const i of str) {
    if (vowels.includes(i)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

getCount("node");
//____________________________________

// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }