function factorial(n){
    let fact = 1;
    for(let i = 1; i<=n; i++){
        return n * factorial(n-1)
}
return fact;
}
console.log(factorial(5));

