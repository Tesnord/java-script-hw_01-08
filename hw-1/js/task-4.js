let credits = 23580;
let pricePerDroid = 3000

let order = prompt('Сколько дроидов хочешь купить')

let totalPrice = pricePerDroid * order;


if (order == null) {
  credits = credits - totalPrice;
  alert('Отменено пользователем!')
} else if (credits >= totalPrice && credits > 0) {
  alert(`Вы купили ${order} дроидов, на счету осталось ${credits} кредитов.`)
} else {
  alert('Недостаточно средств на счету!')
}