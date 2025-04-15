function moveZero(arr) {
    let j = 0; // points the position of zero
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            if(i !== j) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            j++;
        }
    }
    return arr;
}

let arr = [1,2,0,7,8,9,10,0,8]
console.log(moveZero(arr));;
// [1, 2, 7, 8, 9, 10, 8, 0, 0]