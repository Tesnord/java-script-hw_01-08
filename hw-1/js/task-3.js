const ADMIN_PASSWORD = 'jqueryismyjam';

let message = prompt('Password please')

// if (message == ADMIN_PASSWORD) {
//   alert('Добро пожаловать!')
// } else if (message == null) {
//   alert('Отменено пользователем!')
// } else {
//   alert('Доступ запрещен, неверный пароль!')
// }

switch (message) {
  case ADMIN_PASSWORD: 
    alert('Добро пожаловать!')
    break
  case null:
    alert('Отменено пользователем!')
    break
  default:
    alert('Доступ запрещен, неверный пароль!')
}