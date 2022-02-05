//https://www.codewars.com/kata/563b662a59afc2b5120000c6
// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.


// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10


function nb_year(p0, percent, aug, p, year = 0) {
  if (p0 >= p) {
    return year;
  } else {
    p0 = Math.ceil(p0 + p0 * (percent / 100) + aug);
    year++;
    return nb_year(p0, percent, aug, p, year);
  }
}

console.log(nb_year(1000, 2, 50, 1200));
console.log(nb_year(1500000, 2.5, 10000, 2000000));
