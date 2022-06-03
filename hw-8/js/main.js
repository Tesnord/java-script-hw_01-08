import {default as galleryItems} from './app.js'

const gallery = document.querySelector('.gallery')
let img = document.querySelector('.lightbox__image')

galleryItems.forEach(elem => {
  const liItem = document.createElement('li')
  liItem.classList.add('gallery__item')

  const liLink = document.createElement('a')
  liLink.classList.add('gallery__link')
  liLink.setAttribute('href', elem.original)

  const img = document.createElement('img')
  img.classList.add('gallery__image')
  img.setAttribute('src', elem.preview)
  img.setAttribute('data-sourse', elem.original)
  img.setAttribute('alt', elem.description)

  liLink.append(img)
  liItem.append(liLink)
  gallery.append(liItem)
})

gallery.addEventListener('click', event => {
  event.preventDefault()
  if (event.target.nodeName !== 'UL') {
    let ChildElem = event.target
    document.querySelector('.lightbox').classList.add('is-open')
    console.log(ChildElem.dataset.sourse);
    img.setAttribute('src', ChildElem.dataset.sourse)
    img.setAttribute('alt', ChildElem.getAttribute('alt'))
  }
})

document.querySelector('button[data-action="close-lightbox"]').addEventListener('click', closeModal)

document.querySelector('.lightbox__overlay').addEventListener('click', closeModal)

document.addEventListener('keydown', event => {
  if (event.key == "Escape") {
    closeModal()
  }
})

function closeModal(event) {
  document.querySelector('.lightbox').classList.toggle('is-open')
  img.removeAttribute('src')
  img.removeAttribute('alt')
}