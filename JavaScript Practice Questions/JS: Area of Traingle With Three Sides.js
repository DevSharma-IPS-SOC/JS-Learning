// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
// Let three sides be a, b, c.

let a = 5;
let b = 6;
let c = 7;

// Using 3 sides Heron's formula rootof(s(s-a)(s-b)(s-c)) and S is Semi-perimeter S: (a+b+c)/2

let s = (a+b+c)/2;

//let A be the area of 3 sides triangle

let A = s*(s-a)*(s-b)*(s-c);

// Store the Math.sqrt() of A in Result and log it in Console.

let result = Math.sqrt(A);

console.log(result)

// Result will be = 14.696938456699069.
