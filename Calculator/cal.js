const input = document.getElementById('number-input');
const result = document.getElementById('result');

function handleClickButton(el) {
    input.value += el.innerText;
}

function calculate() {
    try {
        result.value = eval(input.value);
    } catch {
        result.value = "Error";
    }
}

function reset() {
    input.value = "";
    result.value = "";
}
// const input = document.getElementById('number-input');
// const result = document.getElementById('result');


// function handleClickButton(el){
//     console.log(el.innerText);
//    const exp = `${input.innerText}${el.innerText}`;
//    input.value = exp;
//    if (['+','-','*','/'].includes(el.innerText))
//    result.value =eval(exp);

// }

// function reset(){
//     input.value = "";
//     result.value = "";
// }