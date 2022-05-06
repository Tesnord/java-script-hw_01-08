const logItems = function(array) {
  let result;
  for (let item of array) {
    result += item;
  }
  return result
}

let log = logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

console.log(log);