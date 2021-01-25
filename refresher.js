const name = 'Steve';
let age = 38;
const hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) =>
  'Name is ' + userName + ', age is ' + userAge + ', and the user has hobbies ' + userHasHobby;

console.log(summarizeUser(name, age, hasHobbies));

// =========================================================

const person = {
  name: 'Steve',
  age: 38,
  greet() {
    console.log('Hi, I am ' + this.name);
  },
};

person.greet();

// =========================================================

const hobbies = ['Art', 'Web'];

for (let hobby of hobbies) {
  console.log(hobby);
}

console.log(hobbies.map((hobby) => 'hobby: ' + hobby));

// =========================================================

// Copy person
const copiedPerson = { ...person };
console.log(copiedPerson);

// Copy hobbies
const copiedHobbies = [...hobbies];
console.log(copiedHobbies);

// Create an array with 'n' number of arguments
const toArray = (...args) => args;
console.log(toArray(1, 2, 3, 4, 5, 'sam'));

// =========================================================
