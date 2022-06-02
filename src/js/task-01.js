const liItem = document.querySelectorAll('li.item')
console.log(`В списке ${liItem.length} категории`);

const item = (items) => {
  items.forEach(e => {
    let item = {
      'Категория': e.querySelector('h2').textContent,
      'Количество': e.querySelectorAll('ul li').length
    }
    console.log(item);
  });
} 
console.log(item(liItem));