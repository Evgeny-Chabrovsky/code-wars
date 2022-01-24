// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

//My solution
const remove = (str) => {
  let index = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i]!=='!'){
      index = str.length-1;
      break;
    }
   
    if (str[i-1] !== '!') {
      index = i-1;
      break;    
    }
  }

  return str.slice(0, index+1)
}
// ___________________________

// const remove = s => s.replace(/!+$/, '');

// const remove = (s) => 
//   s[s.length - 1] !== '!' ? s : remove(s.slice(0, s.length - 1));

console.log(remove("Hi!!!"));
console.log(remove("!Hi"));
console.log(remove("!Hi!"));
console.log(remove("Hi! Hi!"));
console.log(remove("xajdq tpgpsra!!"));
console.log(remove("xajdq tpgpsra"));

