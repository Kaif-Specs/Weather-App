function ispalendrome(str){
    let rev = str.split(' ').reverse().join('');
    return str == rev;
}
console.log(ispalendrome("RACECAR"));