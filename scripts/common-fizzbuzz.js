/**
 * If n is a multiple of 3, Fizz, if n is a multiple of 5, Buzz, if both FizzBuzz.
 * @param {number} n 
 * @returns the string "Fizz" | "Buzz" | "FizzBuzz"
 */
 function fizzBuzz(n) {
    let s = "";
    if( n % 3 === 0 ) s += "Fizz";
    if( n % 5 === 0 ) s += "Buzz";
    return s;
}