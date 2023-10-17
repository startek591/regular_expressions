let text = "Hello world leela";

let regex1 = new RegExp("Hello"); // Constructor Method
let regex2 = /world/; // using literal syntax

console.log(regex1.test(text)); // true
console.log(regex2.test(text)); // true
