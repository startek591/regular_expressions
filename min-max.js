let text = `My telephone number is as follows 801-555-6789`;

let regex1 = /\w{3,5}/g;

console.log(text.match(regex1));

// {min, max} => matches min to max
// {min} => min occurrence
// {min,} => min
