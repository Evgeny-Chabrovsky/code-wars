
// Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.


// function isPrime(num) {
//   for (var i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return num > 1;
// }

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(isPrime(2));
