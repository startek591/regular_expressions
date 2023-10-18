let text = `<p>This is the first paragraph</p><p>This is the second paragraph</p>
<p>This is the first paragraph</p><p>This is the first paragraph</p>`;

let regex1 = /<p>.*<\/p>/g;

console.log(text.match(regex1));
