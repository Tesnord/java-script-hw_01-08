import { default as users } from './users.js';

const getUsersWithEyeColor = (users, color) => {
  return users.filter(e => e.eyeColor == color);
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]