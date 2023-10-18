let text = `the first letter always first should be at the first`;

let regex1 = /^first.$/g;

console.log(text.match(regex1));

// ^ -> where the match is at the start
// $ -> match is at the end
