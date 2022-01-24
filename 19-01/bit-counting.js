// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// My solution
// const countBits = (n) => n.toString(2).split("").filter((n) => n === "1").length;

const countBits = (n) => n.toString(2).split("").reduce((a,b)=>(+a) + (+b), 0)

console.log(countBits(1234));
