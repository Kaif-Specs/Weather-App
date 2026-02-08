// function reversestring(str){
//    return str.split('').reverse().join(' ');
// }
// console.log(reversestring('interview'));


function reverse(str) {
    let reversed = "";
    
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }

    return reversed; 
}

console.log(reverse('interview'));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              