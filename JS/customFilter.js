Array.prototype.myFilter = function(cb) {
    let filteredArray = [];
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
}

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.myFilter((number) => number % 2 === 0)

console.log(evenNumbers); // [2, 4, 6]