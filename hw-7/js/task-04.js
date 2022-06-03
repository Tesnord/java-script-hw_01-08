let counterValue = document.querySelector('#value')

document.querySelectorAll('button[data-action]').forEach(elem => {
  if (elem.dataset.action == 'decrement') {
    elem.addEventListener('click', event => {
      Number(counterValue.textContent--);
      counterValue.textContent = Number(counterValue.textContent--)
    })
  } else if (elem.dataset.action == 'increment') {
    elem.addEventListener('click', event => {
      Number(counterValue.textContent++)
      counterValue.textContent = Number(counterValue.textContent++)
    })
  }
})
