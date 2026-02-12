const str = "Hello";
const num = "12345789";
const str2 = "  Hello   ";
console.log(str);

console.log(str[0]);
console.log(str.includes("l"));

for (let i = 0; i < str.length; i++) {
  // console.log(str[i]);
}

console.log(str.charAt(1));

console.log(str.slice(0, 4));
console.log(str.slice(-1));

console.log(str2.trim());

console.log(str.localeCompare(str2));
console.log(str.padEnd(16, "*"));
console.log(num.padEnd(16, "*"));
console.log(str.replaceAll("l", "I"));
console.log(str.split(","));
