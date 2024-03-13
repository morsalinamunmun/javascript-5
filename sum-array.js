function sumArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
        //console.log(element, sum);
    }
    return sum;
}
const myNumbers = [12, 45, 34, 67, 88];
const arraySum = sumArray(myNumbers);
console.log(arraySum);

function oddNumberAnArray(nums){
    let oddNumber = [];
    for(let i = 0; i < nums.length; i++){
        const element = nums[i];
        if(element % 2 !== 0){
            oddNumber.push(element);
        }
    }
    return oddNumber;
}

const numbers = [34, 25, 88, 65, 44, 48, 47, 33, 66];
const selectOddNumber = oddNumberAnArray(numbers);
console.log(selectOddNumber);
 const oddNumberSum = sumArray(selectOddNumber);
console.log(oddNumberSum);



function rowSumOddNumbers(n){
    let result = [];
  
    // generate the arrays of odd numbers
    for(let i = 0; i < 30; i++){
      // generate sub arrays by using another for loop
      // and only pushing if the length is equal to current j
      let sub = [];
      for(let j = 1; j <= n; j++){
        // if length === j (from 1 - n) keep pushing
         if(sub[j - 1].length <= j){
           // and if i is odd
           if(i % 2 !== 0){
             // push the i to sub (per length)
             sub.push(i);
           }
         }
      }
      // push everything to the main array
      result.push(sub);
    }
  
    // return sum of n 
    return result[n + 1].reduce(function(total, item){
      return total += item;
    });
  }