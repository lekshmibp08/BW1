function greetPerson(greet, wish) {
  console.log(`${greet}, ${wish} ${this.name}...`)
}

const person1 = {
  name: 'Alice'
}
const person2 = {
  name: 'Ann'
}
const person3 = {
  name: 'Ben'
}

greetPerson.call(person1, 'Hi', 'gd mng');      // Hi, gd mng Alice...
greetPerson.apply(person2, ['Hello', 'gd mng']);// Hello, gd mng Ann...

const greetPerson3 = greetPerson.bind(person3); // Hi, gd mng Ben...

greetPerson3('Hi', 'gd mng');

/*
Hi, gd mng Alice...
Hello, gd mng Ann...
Hi, gd mng Ben...
*/