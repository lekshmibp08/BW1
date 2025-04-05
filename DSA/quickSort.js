function quickSort(arr) {
    if(arr.length < 2) {
        return arr;
    }
    let leftArr = [];
    let rightArr = [];
    let pivot = arr[arr.length-1];
    for(let i = 0; i < arr.length-1; i++) {
        if(arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

console.log(quickSort([32,41,4,2,3,64,22,10]));
//  [2,  3,  4, 10, 22, 32, 41, 64]