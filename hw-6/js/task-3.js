import users from './users.js';

const getUsersWithGender = (users, gender) => {
  return users.filter(e => e.gender == gender).flatMap(e => e.name)
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]