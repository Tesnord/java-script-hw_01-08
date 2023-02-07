import users from './users.js';

const calculateTotalBalance = users => {
  let sum = 0
  users.forEach(e => {
    sum += e.balance 
  });
  return sum
};

console.log(calculateTotalBalance(users)); // 20916