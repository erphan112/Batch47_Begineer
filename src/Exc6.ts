export {}
let personNameWithWhitespace: string = '\t \n Muhammad Irfan \t \n';

console.log('Name with whitespace:');
console.log(personNameWithWhitespace);

let eliminateWhiteSpace: string = personNameWithWhitespace.trim();

console.log('Name after stripping whitespace:');
console.log(eliminateWhiteSpace);