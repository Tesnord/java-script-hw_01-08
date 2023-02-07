const liItem = document.querySelectorAll('li.item')
console.log(`В списке ${liItem.length} категории`);

const item = (items) => {
  items.forEach(e => {
    console.log({
      'Категория': e.querySelector('h2').textContent,
      'Количество': e.querySelectorAll('ul li').length
    });
  });
}

item(liItem)