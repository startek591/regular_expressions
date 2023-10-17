let text = `She sells seashells on a seashore. The shells she sells are seashells, I'm sure.`;

let regex1 = /[A-Z]+/g;

console.log(text.match(regex1));

// + -> Matches one or more occurrences
// ? -> Matched zero or one occurance
// * -> matches zero or more occurances
