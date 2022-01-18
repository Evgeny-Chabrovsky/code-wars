//Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
//          spinWords( "This is a test") => returns "This is a test" 
//          spinWords( "This is another test" )=> returns "This is rehtona test"

//My solution
function spinWords(string) {
  return string.split(' ').map((el) => {
    return (el.length >= 5) ? el.split("").reverse().join("") : el 
  }).join(' ');
}

// function spinWords(str){
//   return str.replace(/\w{5,}/g, function(w) {
//     return w.split('').reverse().join('');
//   });
// }

console.log(spinWords("Hey fellow warriors"));