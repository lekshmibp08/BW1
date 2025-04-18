
function transformItems(items) {
    let result = {};
    items.forEach(item => {
        for(let key in item) {
            if(!result.hasOwnProperty(key)) {
                result[key] = [];
            }
            result[key].push(item[key]);
        }
    })

    for(let key in result) {
        if(result[key].length === 1) {
            result[key] = result[key][0];
        }        
    }
    return result;
}


// Example usage:
const items = [
    { id: 1, name: "Bob", place: "KTM", age: 30 },
    { id: 2, name: "Alice", place: "TVM" },
    { id: 3, name: "John", place: "IND" },
    { id: 4, name: "Sagar", place: "UK" },
];

console.log(transformItems(items));


/* out put

{
  id: [ 1, 2, 3, 4 ],
  name: [ 'Bob', 'Alice', 'John', 'Sagar' ],
  place: [ 'KTM', 'TVM', 'IND', 'UK' ],
  age: 30
}

*/