function sumOfAll(arr) {
    let sum = 0;
    arr.forEach(element => {
        if(typeof element === 'number') {
            sum += element;
        } else if(typeof element === 'object') {
            for(let key in element) {
                let value = element[key];
                if(typeof value === 'number') {
                    sum += value;
                } else if (Array.isArray(value)) {
                    sum += value.reduce((acc, curr) => acc + curr, 0);
                }
            }
        }
    });
    return sum;
}


const ab = [ { a: [1, 2, 3] }, 45, { g: 67 }, { c: [1, 2, 3] } ];

console.log(sumOfAll(ab));          // 124
