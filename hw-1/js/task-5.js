let delivery = prompt('Введите названтие страны:');

delivery.toLowerCase();
let sity;
let price;


switch (delivery.toLowerCase()) {
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
  default:
    sity = ''
    break
}

if (sity != '') {
    alert(`Доставка в ${sity} будет стоить ${price} кредитов`);
} else {
  alert('В вашей стране доставка не доступна')
}