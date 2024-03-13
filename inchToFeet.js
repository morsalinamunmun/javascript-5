// const inches = 24;
// const feet = inches / 12;
// console.log(feet);

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const dataInches = 145;
const dataFeet = inchToFeet(dataInches);
console.log(dataFeet);

function milesToKM(miles){
    const km = miles * 1.609;
    return km;
}

const dataMiles = 34;
const dataKm = milesToKM(dataMiles);
console.log(dataKm);
