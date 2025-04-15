Array.prototype.customReduce = function (cb, initialValue) {
    acc = initialValue !== undefined ? initialValue : this[0];
    startIndex = initialValue !== undefined ? 0 : 1;
    for(let i = startIndex; i < this.length; i++) {
        acc = cb(acc, this[i], i, this);
    }
    return acc;
}

const arr = [1, 2, 3, 4, 5];

const sum = arr.customReduce((curr, acc) => acc+curr, 0);

console.log(sum);
