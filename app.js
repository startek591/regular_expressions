let text = "Hello world leela";

let regex1 = new RegExp("Hello"); // Constructor Method
let regex2 = /world/; // using literal syntax
let regex3 = /\s/;

// test returns true or false if the match is found for the pattern
console.log(regex1.test(text)); // true
console.log(regex2.test(text)); // true

// exec returns the array with the match and the indec
console.log(regex2.exec(text));

// String Methods

// match returns the array same as exec
console.log(text.match(regex2));

// returns the indec of the match
console.log(text.search(regex2)); // -- 6 (index)

// replaces the text with the specified tect
console.log(text.replace(regex2, "globe"));

// split the text into array with the match
console.log(text.split(regex3));
