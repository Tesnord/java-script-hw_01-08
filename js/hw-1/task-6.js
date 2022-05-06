let total = 0;

while (true) {
  const input = prompt('Введите число');
  if (input === null) {
    break;
  } else {
    total += Number(input);
  }
}
alert(`Общая сумма чисел равна ${total}`);
