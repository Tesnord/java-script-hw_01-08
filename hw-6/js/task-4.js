import { default as users } from './users.js';

const getInactiveUsers = users => {
  return users.filter(e => !e.isActive)
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]