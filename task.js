function hourToMinutes(hours){
    const minutes = hours * 60;
    return minutes;
}
const result = hourToMinutes(7);
console.log(result);

function minutesToSecond(minutes){
    const seconds = minutes * 60;
    return seconds; 
}
const secondResult = minutesToSecond(20);
console.log(secondResult);

function findLeapYear(years){
    let leapYear = [];
    for(let i = 0; i < years.length; i++){
        const year = years[i];
        if(year % 4 === 0){
            leapYear.push(year);
        }
    }
    return leapYear;
}
const leapYears = [2023, 2024, 2025, 2028, 2030];
const leapYearResult = findLeapYear(leapYears);
console.log(leapYearResult);

for(let i = 0; i<10; i++){
    console.log(i);
 }

 for( let i = 10; i >= 1; i--){ 
    console.log(i);
 } 