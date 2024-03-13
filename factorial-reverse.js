function factorialNo(number){
    let factorial = 1;
    for(let i = number; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}
const fact = factorialNo(7);
console.log(fact);

//while loop
function factorial2(numb2){
    let num = 1;
    let result = 1;
    while(num <= 7){
        result = result * num;
        num++;
    }
    return result;
}

function factorial3(numb3){
    let num = numb3;
    let result = 1;
    while(num >= 1){
        result = result * num;
        num--;
    }
    return result;
}
const fac = factorial3(6);
console.log(fac);