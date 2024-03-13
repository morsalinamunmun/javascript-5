function multipicationNo(number){
    let multipication = 1;
    for(let i = 1; i <= number; i++){
        multipication = multipication * i;
    }
    return multipication;
}

const result = multipicationNo(7);
console.log(result);