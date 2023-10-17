let text = "0XF89F";

let regex1 = /0x[^0-9A-F][0-9A-F]/g;

console.log(text.match(regex1));
