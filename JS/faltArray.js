let arr=[1,2,3,4,5,6,7,[2,4,5],[3,[5,6,7]]]

const result = arr.flat(Infinity);
console.log(result);      // [1, 2, 3, 4, 5, 6, 7, 2, 4, 5, 3, 5, 6, 7]

function flatarray(arr, res = []) {
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            flatarray(arr[i], res);
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(flatarray(arr));    // [1, 2, 3, 4, 5, 6, 7, 2, 4, 5, 3, 5, 6, 7]

