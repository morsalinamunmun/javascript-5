function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
        return false;
}

const presentYear = isLeapYear(2020);
console.log('Present year', presentYear);

const pastYear = isLeapYear(2021);
console.log('Past Year', pastYear);