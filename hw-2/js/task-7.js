const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  return login.length >= 4 && login.length <= 16 ? false : 'Ошибка! Логин должен быть от 4 до 16 символов';
};

const isLoginUnique = function(allLogins, login) {
  return !allLogins.includes(login) ? false : 'Такой логин уже используется!';
};

const addLogin = function(allLogins, login) {
  return (isLoginUnique(allLogins, login) || isLoginValid(login)) || 
    (logins.push(login) & console.log('Логин успешно добавлен!'))
};



/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'Ajax2')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'Ajax3')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(logins)