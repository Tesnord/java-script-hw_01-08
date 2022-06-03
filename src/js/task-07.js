let input = document.querySelector('input#font-size-control')
document.querySelector('span#text').style.fontSize = `${input.value}px`

input.addEventListener('input', event => {
  document.querySelector('span#text').style.fontSize = `${event.target.value}px`
})