function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex) {
        let mid = Math.floor((leftIndex + rightIndex)/2);
        if(arr[mid] === target) {
            return mid;
        }
        if(target < arr[mid]) {
            rightIndex = mid - 1;
        } else {
            leftIndex = mid + 1;
        }
    }
    return -1
    
}

console.log(binarySearch([-5, 2, 5, 7, 8, 9, 11],7));   // 3
console.log(binarySearch([-5, 2, 5, 7, 8, 9, 11],2));   // 1
console.log(binarySearch([-5, 2, 5, 7, 8, 9, 11],11));  // 6