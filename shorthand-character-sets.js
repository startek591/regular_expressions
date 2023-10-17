let text = `A String that contains numbers (12345)
   A second line _ (12345)`;

let regex1 = /\s/g;

console.log(text.match(regex1));

// shortcuts
// \d -> [0-9]
// \w -> [a-zA-Z0-9_]
// \s -> [\t\r\n]
