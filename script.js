//Challenge 1

const people = [
  {
    firstName: 'John',
    lastName: ' Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: ' Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: ' Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: ' Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: ' Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

const youngerPeople = people.filter((youngerPeople) => youngerPeople.age <= 25);
console.log(youngerPeople);

const youngPeople = youngerPeople.map((youngPeople) => {
  return {
    name: youngPeople.firstName + youngPeople.lastName,
    email: youngPeople.email,
  };
});
console.log(youngPeople);

//Challenge 2

const numbers = [2, -30, 50, 20, -12, -9, 7];
const positiveNum = numbers.filter((number) => number >= 1);
console.log(positiveNum);

const positiveSum = () => {
  let acc = 0;
  positiveNum.forEach((cur) => {
    acc += cur;
  });
  return acc;
};
console.log(positiveSum());

//Challenge 3

const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words.map(
  (word) => `${word[0].toUpperCase()}${word.slice(1)}`
);
console.log(capitalizedWords);
