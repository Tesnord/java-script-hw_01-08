let counterValue = document.querySelector('#value')

function increment() {
  Number(counterValue.textContent++)
  counterValue.textContent = Number(counterValue.textContent++)
}
function decrement() {
  Number(counterValue.textContent--);
  counterValue.textContent = Number(counterValue.textContent--)
}
document.querySelector('button[data-action="increment"]').addEventListener('click', increment)
document.querySelector('button[data-action="decrement"]').addEventListener('click', decrement)

// document.querySelectorAll('button[data-action]').forEach(elem => {
//   if (elem.dataset.action == 'decrement') {
//     elem.addEventListener('click', event => {
//       Number(counterValue.textContent--);
//       counterValue.textContent = Number(counterValue.textContent--)
//     })
//   } else if (elem.dataset.action == 'increment') {
//     elem.addEventListener('click', event => {
//       Number(counterValue.textContent++)
//       counterValue.textContent = Number(counterValue.textContent++)
//     })
//   }
// })
