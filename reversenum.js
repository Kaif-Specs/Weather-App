// function reverseNumber(num) {
//   let reversed = 0;

//   while (num > 0) {
//     let digit = num % 10;
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num / 10);
//   }

//   return reversed;
// }

// console.log(reverseNumber(12345));

function reverseNumberJS(num) {
  return Number(num.toString().split('').reverse().join(''));
}

console.log(reverseNumberJS(12345)); // 54321

                                                                                            

