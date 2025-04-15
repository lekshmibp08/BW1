function decode (str){
    let result = '';
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        let count = '';
        while(i+1 < str.length && Number(str[i+1])) {
            count += str[i+1];
            i++;
        }
        count = Number(count);
        for(let j = 0; j < count; j++) {
            result += char;
        }
    }
    return result;
}

console.log(decode("a1bb1ccce2dd11"));
