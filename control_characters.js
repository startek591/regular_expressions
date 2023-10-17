// Matching the control characters

// \t => tab
// \n => new line
// \r => carriage return
// \v => verticle tab

let text = `hot hit h t h
t`;

let regex1 = /h\tt/g;

console.log(text.match(text));
