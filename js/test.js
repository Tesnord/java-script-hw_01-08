/*
Это конечно пиздец
*/

// function longest(s1, s2) {
//   let array = []
//   let arr = (s) => {
//     return s.split('');
//   }
//   console.log(`arr s1: ${arr(s1)}`);
//   for (let i in arr(s1)) {
//     array.push(arr(s1)[i])
//   }
//   console.log(`arr s2: ${arr(s2)}`);
//   for (let i in arr(s2)) {
//     array.push(arr(s2)[i])
//   }
//   console.log(`array: ${array}`);
//   let result = array.sort().filter((item, index) => {
//     return array.indexOf(item) === index
//   })
//   console.log(`result: ${result}`);
//   let a = ''
//   for (let i in result) {
//     a += result[i]
//   }
//   console.log(`final: ${a}`);
//   return a
// }

// const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')

// console.log(longest("aretheyhere", "yestheyarehere"));
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
// console.log(longest("inmanylanguages", "theresapairoffunctions"));