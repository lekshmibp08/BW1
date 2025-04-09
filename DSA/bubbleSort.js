function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i+1] < arr[i]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                swapped = true;
            }
        }
    } while(swapped)
    return arr;
}

console.log(bubbleSort([5,6,4,3,2,9,7,1,8]));
