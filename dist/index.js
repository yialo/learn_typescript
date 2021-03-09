import { greet } from './module/index';
const createPerson = (person) => (Object.assign(Object.assign({}, person), { greet }));
const person = createPerson({ name: 'Bob', age: 25 });
console.log(person);
