let total = 0;

while (true) {
  const input = Number(prompt('Введите число'));
  console.log(input);
  if (input === 0) {
    break;
  } else {
    if (!Number.isInteger(input)) {
      alert('Вы ввели не число');
      continue;
    } else {
      total += Number(input);
    }
  }
}
alert(`Общая сумма чисел равна ${total}`);
