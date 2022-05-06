const calculateEngravingPrice = function(message, pricePerWorld) {
  let words = message.split(" ");
  let collect = [];
  for( let item in words) {
    if (!collect[words[item]]) {
      collect[words[item]] = 0;
    }
    collect[words[item]]++;
  }
  let counter = 0;
  for(var word in collect) {
    counter++
  }
  return pricePerWorld * counter;
}

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120