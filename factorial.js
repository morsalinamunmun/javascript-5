function factorialNo(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}
const factorialNumber =factorialNo(5);
console.log(factorialNumber);