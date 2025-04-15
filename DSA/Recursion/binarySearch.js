function search(arr, target, left = 0, right = arr.length-1) {
    if(right < left) {
        return -1;
    }
    let mid = Math.floor((left+right)/2);
    if(arr[mid] === target) {
        return mid;
    }
    if(target < arr[mid]) {
        return search(arr, target, 0, mid-1);
    } else {
        return search(arr, target, mid+1, arr.length-1);        
    }
}

let arr = [1,3,4,5,7,8,11]
console.log(search(arr, 5));
