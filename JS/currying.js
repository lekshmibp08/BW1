/*
function greetPerson(greet, name) {
    return `${greet}, ${name}...!`;
}

console.log(greetPerson('hello', 'Alice'));

const greetPerson = (greet) => 
    (name) => 
        `${greet}, ${name}...!`

*/

function greetPerson(greet) {
    return function(name) {
        return `${greet}, ${name}...!`;
    }
}

const sayHello = greetPerson('Hello');
const mngWish = greetPerson('Good Morning');
console.log(sayHello("Alice"))
console.log(sayHello("Bob"))
console.log(mngWish("Bob"))
console.log(mngWish("Alice"))

const evaluate = (operator) => (a) => (b) => {
    if(operator === '+') return a+b
    if(operator === '-') return a-b
    if(operator === '*') return a*b
    if(operator === '/') return a/b
}

const multiply = evaluate('*')
console.log(multiply(2)(3));

const multBySeven = multiply(7);
console.log(multBySeven(20));


