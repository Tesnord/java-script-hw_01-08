const counterValue = document.querySelector('#value')

document.querySelectorAll('button[data-action]').forEach(e => {
  console.log(e.dataset.action);
})