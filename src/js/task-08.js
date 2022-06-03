let box = document.querySelector('div#boxes')
let input = document.querySelector('div#controls input')
let render = document.querySelector('[data-action="render"]')
let destroy = document.querySelector('[data-action="destroy"]')

function createBoxes(amount) {
  render.addEventListener('click', event => {
    let range = 30
    for (let i = 1; i <= amount; i++) {
      let elemBox = document.createElement('div')
      elemBox.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
      elemBox.style.width = `${range}px`
      elemBox.style.height = `${range}px`
      range += 10
      box.append(elemBox)
    }
  })
}

function destroyBoxes() {
  destroy.addEventListener('click', event => {
    document.querySelectorAll('div#boxes div').forEach(elem => {
      console.log(elem.remove())
    })
  })
}

createBoxes(input.value)

destroyBoxes()