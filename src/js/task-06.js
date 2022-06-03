let input = document.querySelector('input[data-length]')

input.addEventListener('blur', event => {
  switch (true) {
    case input.value.length == 0:
      input.classList.remove("valid")
      input.classList.remove("invalid")
      break
    case Number(input.dataset.length) == input.value.length:
      input.classList.remove("invalid")
      input.classList.add("valid")
      break
    case Number(input.dataset.length) !== input.value.length:
      input.classList.remove("valid")
      input.classList.add("invalid")
      break
  }
})