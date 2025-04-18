const pascal = "MySampleString"
// my_sample_string 

function convert (str) {
  let result = str[0].toLowerCase();
  for(let i = 1; i < str.length; i++) {
    let original = str[i];
    let lower = original.toLowerCase();
    if(original === lower) {
      result += original;
    } else {
      result += "_";
      result += lower;
    }
  }
  return result
}

console.log(convert(pascal))        // my_sample_string 


function pascalToSnakeCase(str) {
    return str
    .replace(/([A-Z])/g, '_$1')   // Add underscore before every capital letter
    .toLowerCase()                // Convert entire string to lowercase
    .replace(/^_/, '');           // Remove leading underscore if exists
}

console.log(pascalToSnakeCase(pascal))        // my_sample_string 
