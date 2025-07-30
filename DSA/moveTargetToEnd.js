const moveTargetToEnd = (arr, target) => {
    let result = [];
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            count++;
        } else {
            result.push(arr[i]);
        }
    }
    console.log(count);
    
    while(count > 0) {
        result.push(target);
        count--;
    }
    return result
}

const arr = [2, 1, 2, 3, 4, 2];
console.log(moveTargetToEnd(arr, 2));
