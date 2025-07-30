function removeDuplicates(arr, seen=new Set(), index=0) {
    if(index >= arr.length) {
        return [];
    }
    let uniqueSubArr = [];
    for(let num of arr[index]) {
        if(!seen.has(num)) {
            seen.add(num);
            uniqueSubArr.push(num);
        }
    }

    return [uniqueSubArr, ...removeDuplicates(arr, seen, index+1)]
}

const jaggedArray = [
    [1, 2, 3],
    [4, 2, 6],
    [7, 8, 1],
    [3, 9],
    [2, 2, 2]
  ];
  console.log(removeDuplicates(jaggedArray))    // [ [ 1, 2, 3 ], [ 4, 6 ], [ 7, 8 ], [ 9 ], [] ]
  