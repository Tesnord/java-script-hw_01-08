let findLongestWord = function(string) {
  let words = string.split(" ");
  let result = words[0].length;
  for(let item of words) {
    if (item.length > result) {
      result = item.length
    }
  }
  for(let item of words) {
    if (item.length == result) {
      result = item
    }
  }
  return result
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'
