import { default as users } from './users.js';

const getUsersWithFriend = (users, friendName) => {
  return users.filter(e => e.friends.find(e => e == friendName)).flatMap(e => e.name)
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]