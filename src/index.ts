import { greet, TPerson } from './module/index';

const createPerson = (person: TPerson) => ({
  ...person,
  greet,
});

const person = createPerson({ name: 'Bob', age: 25 });

console.log(person);
