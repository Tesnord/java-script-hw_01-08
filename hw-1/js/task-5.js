let delivery = prompt('Введите названтие страны:');

let sity;
let price;
let message;

if (delivery != null) {
  delivery = delivery.toLowerCase()
} else {
  delivery = null
}

switch (delivery) {
  case 'китай':
    sity = 'Китай';
    price = 100;
    break
  case 'чили':
    sity = 'Чили';
    price = 250;
    break
  case 'австралия':
    sity = 'Австралия';
    price = 170;
    break
  case 'индия':
    sity = 'Индия';
    price = 80;
    break
  case 'ямайка':
    sity = 'Ямайка';
    price = 120;
    break
  case null:
    message = 'Отменено пользователем!'
    break
  default:
    message = 'В вашей стране доставка не доступна'
    break
}

if (sity) {
  alert(`Доставка в ${sity} будет стоить ${price} кредитов`);
} else {
  alert(`${message}`)
}