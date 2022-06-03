const logItems = function(array) {
  let result = '';
  for (let item in array) {
    console.log(`${Number(item)+1} - ${array[item]}`)
  }
  return result;
}

// let log = logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
let log = logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
