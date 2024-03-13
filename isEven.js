
// console.log(4%2);
// console.log(98%2);
// console.log(144%2);

// console.log(5%2);
// console.log(97%2);
// console.log(145%2);

function checkEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        // console.log('this is even number');
        return true;
    }else{
        // console.log('this is odd number');
        return false;
    }
}
const numberEven = 56;
const result = checkEven(numberEven);
console.log(result);