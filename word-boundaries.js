let text = `Inplant this idea; plan to plant multiple trees on this planet`;

let regex1 = /\bplan/g;

console.log(text.match(regex1));

// \b -> word boundary pattern should bounded by an non word character
// \B -> nonword boundary -> pattern is bounded by a word character
// \w => [A-Za-z0-9_]
