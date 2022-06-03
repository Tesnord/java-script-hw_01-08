import {default as users} from './users.js';

const getUserNames = users => {
  const arr = []
  users.forEach(e => {arr.push(e.name)})
  return arr
};

// const getUserNames = users => {
//   return users.flatMap(e=> e.name)
// };

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]