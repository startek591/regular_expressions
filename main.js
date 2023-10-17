const str = "Hello world. HiS This is Leela";

const regex = new RegExp("s", "gi");

console.log(str.match(regex));

let match = "";
while ((match = regex.exec(str)) !== null) {
  console.log(match);
}
