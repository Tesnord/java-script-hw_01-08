const numbers = [];
let total = 0;

while (true) {
  const input = prompt('Введите число');
  if (input != null) {
    if (Number.isNaN(+input)) {
      alert('Вы ввели не число');
      continue;
    } else {
      numbers.push(input)
    }
  } else {
    for (let number of numbers) {
      total += +number
    }
    break;
  }
}
alert(`Общая сумма чисел равна ${total}`);