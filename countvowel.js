function countVowels(str) {
  let vowels = ['a','e','i','o','u'];

  let count = 0;

  for (let ch of str.toLowerCase()) {
    if (vowels.includes(ch)) count++;
  }
  return count;
}

console.log(countVowels("Hello"));