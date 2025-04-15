function longestUniqueSubstring(str) {
   let currSubstring = '';
   let maxSubstring = '';
   for(let i = 0; i < str.length; i++) {
    let index = currSubstring.indexOf(str[i]);
    if(index !== -1) {
        currSubstring = currSubstring.slice(index+1);
    }
    currSubstring += str[i];
    if(maxSubstring.length < currSubstring.length) {
        maxSubstring = currSubstring;
    }
   }
   return maxSubstring
}

console.log(longestUniqueSubstring("abcaaabcaacddddd")); 