function createBoxes(amount) {
  document.querySelector('[data-action="render"]').addEventListener('click', e => {
    let range = 30
    for (let i = 1; i <= amount.value; i++) {
      let elemBox = document.createElement('div')
      elemBox.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
      elemBox.style.width = `${range}px`
      elemBox.style.height = `${range}px`
      range += 10
      document.querySelector('div#boxes').append(elemBox)
    }
  })
}

function destroyBoxes() {
  document.querySelector('[data-action="destroy"]').addEventListener('click', e => {
    document.querySelectorAll('div#boxes div').forEach(elem => {
      elem.remove()
    })
  })
}

createBoxes(document.querySelector('div#controls input'))

destroyBoxes()