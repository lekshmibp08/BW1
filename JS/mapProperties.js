const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

const values = map.values();
const keys = map.keys();
const entries = map.entries();

console.log([...values]);       // [ 1, 2, 3 ]
console.log([...keys]);         // [ 'a', 'b', 'c' ]
console.log([...entries]);      // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// Object → Map	    new Map(Object.entries(obj))
// Map → Object	    Object.fromEntries(map)