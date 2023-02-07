import users from './users.js';

const getNamesSortedByFriendsCount = users => {
  return users
    .sort((firstItem, secondItem) =>
      firstItem.friends.length - secondItem.friends.length)
    .flatMap(e => e.name)
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]