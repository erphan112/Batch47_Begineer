export {}
let myName: string = 'Irfan ali';
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

function titleCase(str:string)
{
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
  }
  
  console.log(titleCase(myName));

//   1.	‘str.toLowerCase()’: This converts the entire input string str to lowercase. This is necessary because we want to ensure that all words start with a lowercase letter before converting them to uppercase, to maintain proper title case format.
//   2.	‘.replace(/\b\w/g, s => s.toUpperCase())’: This is a regular expression-based replacement using the replace method. It looks for word boundaries (\b) and selects the first character of each word (\w) in the string.
//   •	‘\b’: Represents a word boundary, ensuring that we only match the first character of each word.
//   •	‘\w’: Represents any word character (alphabet letters, digits, or underscores).
//   The g flag at the end of the regular expression (‘/\b\w/g’) means it will replace all occurrences of the pattern in the input string.
//   The second argument of the replace method is a function that processes each match. In this case, the function takes the matched character (s) and converts it to uppercase using ‘toUpperCase()’.
  