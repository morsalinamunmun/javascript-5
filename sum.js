function sum(number){
    let sum = 0;
    for(let i = 1; i <= number; i++){
        sum = sum + i;
        //console.log(element, sum);
    }
    return sum;
}

const numbers = 30;
console.log(sum(numbers));