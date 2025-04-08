function mergeSort(arr, key) {
    if(arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left, key), mergeSort(right, key), key);
}

function merge(left, right, key) {
    let sortedArr = [];
    while(left.length && right.length) {
        if(left[0][key] < right[0][key]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right];
}

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 32 },
    { name: "Charlie", age: 18 },
    { name: "David", age: 40 },
    { name: "Eve", age: 29 }
];
console.log(mergeSort(people, "age"));
