const person = {
    name: "Alice",
    age: 25
  };
  
const handler = {
    get: function(target, property) {
        console.log(`Accessing property '${property}'...`);
        return target[property];        
    },
    set: function(target, property, value) {
        if(property === 'age' && typeof value !== 'number') {
            throw new Error ('Age must be a number');
        }
        console.log(`Assigning new value '${value}' to ${property} property...`);
        target[property] = value;
        return true;        
    }
}

console.log(person.name);       // Alice
console.log(person.age);        // 25
person.age = "old";
console.log(person.age);        // old
person.age = 30;
console.log(person.age);        // 30


const proxyPerson = new Proxy(person, handler)  ;

  
  // Accessing
console.log(proxyPerson.name);  // logs: Accessing property 'name', then prints 'Alice'
  
  // Setting
proxyPerson.age = 30;           // logs: Assigning new value '30' to age property...
  
  // Trying to set age to invalid value
proxyPerson.age = "thirty";  // throws: Error: Age must be a number
  