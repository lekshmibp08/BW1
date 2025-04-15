Array.prototype.customMap = function (cb) {
    let newArray = [];
    for(let i =0; i < this.length; i++) {
        newArray.push(cb(this[i], i, this))
    }
    return newArray;
}

let arr = [1, 2, 3, 4, 5];

let doubledArr = arr.customMap((x) => 2*x);
console.log(doubledArr);
