// https://www.codewars.com/kata/5effa412233ac3002a9e471d/

// 16+18=214
// 122+81 = 1103

//My solution

function add(num1, num2) {
  const first = (num1 + "").split("");
  const second = (num2 + "").split("");
  const digit = first.length - second.length;

  if (digit !== 0) {
    for (let i = 0; i < Math.abs(digit); i++) {
      if (digit > 0) {
        second.unshift("0");
      } else {
        first.unshift("0");
      }
    }
  }
  const result = first.map((n, i, arr) => {
    n = +arr[i] + +second[i];
    return n;
  });
  return +result.join("");
}
//____________________________
// console.log(add(122, 81));


// function add(num1, num2) {
//   num1 = num1.toString().split("").reverse().join("");
//   num2 = num2.toString().split("").reverse().join("");
//   if (num1.length < num2.length) {
//       [num1, num2] = [num2, num1];
//   }
//   var returnString = "";
//   for (var i = 0; i < num1.length; i++) {
//       var int1 = parseInt(num1[i]);
//       var int2 = parseInt(num2[i] || 0);    
//       returnString = (int1+ int2).toString()+returnString;
//   }
  
//   return parseInt(returnString);
// }